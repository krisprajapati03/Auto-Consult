import sharp from "sharp";
import cloudinary from "../config/cloudinary.config.js";

// Upload and resize single image buffer
export const uploadToCloudinary = async (buffer, folder) => {
  const resizedBuffer = await sharp(buffer)
    .resize({ width: 1024 })
    .jpeg({ quality: 80 })
    .toBuffer();

  const uploadRes = await new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder },
      (err, result) => (err ? reject(err) : resolve(result))
    ).end(resizedBuffer);
  });

  return {
    url: uploadRes.secure_url,
    public_id: uploadRes.public_id,
  };
};
