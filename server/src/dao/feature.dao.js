import { Feature } from "../models/Feature.js";

export const createFeature = async (data) => await Feature.create(data);

export const getAllFeatures = async () => await Feature.find().sort({ createdAt: -1 });

export const getFeatureById = async (id) => await Feature.findById(id);

export const updateFeatureById = async (id, updateData) =>
  await Feature.findByIdAndUpdate(id, updateData, { new: true });

export const deleteFeatureById = async (id) => await Feature.findByIdAndDelete(id);
