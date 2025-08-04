import express from "express";
import {
  createCompany,
  getCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
} from "../controllers/company.controller.js";

const router = express.Router();

// POST /api/companies
router.post("/", createCompany);

// GET /api/companies
router.get("/", getCompanies);

// GET /api/companies/:id
router.get("/:id", getCompany);

// PUT /api/companies/:id
router.put("/:id", updateCompany);

// DELETE /api/companies/:id
router.delete("/:id", deleteCompany);

export default router;
