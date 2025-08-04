import { Company } from "../models/company.js";

export const createCompany = async (data) => await Company.create(data);

export const getAllCompanies = async () => await Company.find().sort({ createdAt: -1 });

export const getCompanyById = async (id) => await Company.findById(id);

export const updateCompanyById = async (id, updateData) =>
  await Company.findByIdAndUpdate(id, updateData, { new: true });

export const deleteCompanyById = async (id) => await Company.findByIdAndDelete(id);
