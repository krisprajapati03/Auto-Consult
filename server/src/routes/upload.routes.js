import express from "express";
import {
  uploadImageController,
  uploadMultipleImagesController,
} from "../controllers/upload.controller.js";
import { uploadSingle, uploadMultiple } from "../middleware/multer.middleware.js";

const router = express.Router();

router.post("/single", uploadSingle, uploadImageController);
router.post("/multiple", uploadMultiple, uploadMultipleImagesController);

export default router;
