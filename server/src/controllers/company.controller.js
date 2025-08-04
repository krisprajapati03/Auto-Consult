import * as CompanyService from "../services/company.service.js";

export const createCompany = async (req, res) => {
  try {
    const company = await CompanyService.addCompany(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getCompanies = async (req, res) => {
  try {
    const companies = await CompanyService.fetchAllCompanies();
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getCompany = async (req, res) => {
  try {
    const company = await CompanyService.fetchCompanyById(req.params.id);
    if (!company) return res.status(404).json({ message: "Company not found" });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const updatedCompany = await CompanyService.editCompany(req.params.id, req.body);
    if (!updatedCompany)
      return res.status(404).json({ message: "Company not found" });
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteCompany = async (req, res) => {
  try {
    const deleted = await CompanyService.removeCompany(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Company not found" });
    res.status(200).json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
