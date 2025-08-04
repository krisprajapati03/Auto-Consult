import express from "express";
import {
  createSafetyFeature,
  getSafetyFeatures,
  getSafetyFeature,
  updateSafetyFeature,
  deleteSafetyFeature,
} from "../controllers/safetyFeature.controller.js";

const router = express.Router();

// POST /api/safety-features
router.post("/", createSafetyFeature);

// GET /api/safety-features
router.get("/", getSafetyFeatures);

// GET /api/safety-features/:id
router.get("/:id", getSafetyFeature);

// PUT /api/safety-features/:id
router.put("/:id", updateSafetyFeature);

// DELETE /api/safety-features/:id
router.delete("/:id", deleteSafetyFeature);

export default router;
