import express from "express";
import {
  createFeature,
  getFeatures,
  getFeature,
  updateFeature,
  deleteFeature,
} from "../controllers/feature.controller.js";

const router = express.Router();

// POST /api/features
router.post("/", createFeature);

// GET /api/features
router.get("/", getFeatures);

// GET /api/features/:id
router.get("/:id", getFeature);

// PUT /api/features/:id
router.put("/:id", updateFeature);

// DELETE /api/features/:id
router.delete("/:id", deleteFeature);

export default router;
