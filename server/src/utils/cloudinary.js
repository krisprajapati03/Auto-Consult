import cloudinary from "../config/cloudinary.config.js";

// Delete image by public_id
export const deleteFromCloudinary = async (publicId) => {
  return await cloudinary.uploader.destroy(publicId);
};
