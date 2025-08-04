import express from "express";
import {
  createColor,
  getColors,
  getColor,
  updateColor,
  deleteColor,
} from "../controllers/color.controller.js";

const router = express.Router();

// POST /api/colors
router.post("/", createColor);

// GET /api/colors
router.get("/", getColors);

// GET /api/colors/:id
router.get("/:id", getColor);

// PUT /api/colors/:id
router.put("/:id", updateColor);

// DELETE /api/colors/:id
router.delete("/:id", deleteColor);

export default router;
