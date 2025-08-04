import * as CompanyDAO from "../dao/company.dao.js";

export const addCompany = async (data) => {
  return await CompanyDAO.createCompany(data);
};

export const fetchAllCompanies = async () => {
  return await CompanyDAO.getAllCompanies();
};

export const fetchCompanyById = async (id) => {
  return await CompanyDAO.getCompanyById(id);
};

export const editCompany = async (id, updateData) => {
  return await CompanyDAO.updateCompanyById(id, updateData);
};

export const removeCompany = async (id) => {
  return await CompanyDAO.deleteCompanyById(id);
};
