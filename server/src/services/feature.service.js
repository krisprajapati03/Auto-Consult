import * as FeatureDAO from "../dao/feature.dao.js";

export const addFeature = async (data) => {
  return await FeatureDAO.createFeature(data);
};

export const fetchAllFeatures = async () => {
  return await FeatureDAO.getAllFeatures();
};

export const fetchFeatureById = async (id) => {
  return await FeatureDAO.getFeatureById(id);
};

export const editFeature = async (id, updateData) => {
  return await FeatureDAO.updateFeatureById(id, updateData);
};

export const removeFeature = async (id) => {
  return await FeatureDAO.deleteFeatureById(id);
};
