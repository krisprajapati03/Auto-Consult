import { uploadToCloudinary } from "../services/upload.service.js";
import sharp from "sharp";
import cloudinary from "../config/cloudinary.config.js";

// Single image upload
export const uploadImageController = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ success: false, message: "No file uploaded" });
    const result = await uploadToCloudinary(req.file.buffer, "vehicles");
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    console.error("Image Upload Error:", err);
    res.status(500).json({ success: false, message: "Image upload failed" });
  }
};

// Multiple image upload
export const uploadMultipleImagesController = async (req, res) => {
  try {
    if (!req.files || req.files.length === 0)
      return res.status(400).json({ success: false, message: "No files provided" });

    const uploadPromises = req.files.map(async (file) => {
      const buffer = await sharp(file.buffer)
        .resize({ width: 1024 })
        .jpeg({ quality: 75 })
        .toBuffer();

      const base64 = `data:image/jpeg;base64,${buffer.toString("base64")}`;
      const result = await cloudinary.uploader.upload(base64, { folder: "vehicles" });

      return { url: result.secure_url, public_id: result.public_id };
    });

    const uploadedImages = await Promise.all(uploadPromises);
    res.status(200).json({ success: true, data: uploadedImages });
  } catch (err) {
    console.error("Multiple Upload Error:", err);
    res.status(500).json({ success: false, message: "Image upload failed" });
  }
};
