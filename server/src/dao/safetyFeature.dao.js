import { SafetyFeature } from "../models/SafetyFeature.js";

export const createSafetyFeature = async (data) => await SafetyFeature.create(data);

export const getAllSafetyFeatures = async () => await SafetyFeature.find().sort({ createdAt: -1 });

export const getSafetyFeatureById = async (id) => await SafetyFeature.findById(id);

export const updateSafetyFeatureById = async (id, updateData) =>
  await SafetyFeature.findByIdAndUpdate(id, updateData, { new: true });

export const deleteSafetyFeatureById = async (id) => await SafetyFeature.findByIdAndDelete(id);
