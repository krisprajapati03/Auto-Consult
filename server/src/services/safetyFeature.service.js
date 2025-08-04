import * as SafetyFeatureDAO from "../dao/safetyFeature.dao.js";

export const addSafetyFeature = async (data) => {
  return await SafetyFeatureDAO.createSafetyFeature(data);
};

export const fetchAllSafetyFeatures = async () => {
  return await SafetyFeatureDAO.getAllSafetyFeatures();
};

export const fetchSafetyFeatureById = async (id) => {
  return await SafetyFeatureDAO.getSafetyFeatureById(id);
};

export const editSafetyFeature = async (id, updateData) => {
  return await SafetyFeatureDAO.updateSafetyFeatureById(id, updateData);
};

export const removeSafetyFeature = async (id) => {
  return await SafetyFeatureDAO.deleteSafetyFeatureById(id);
};
