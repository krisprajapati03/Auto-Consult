import multer from "multer";

// Memory storage for buffer access
const storage = multer.memoryStorage();

export const uploadSingle = multer({ storage }).single("image");
export const uploadMultiple = multer({ storage }).array("images", 10);
