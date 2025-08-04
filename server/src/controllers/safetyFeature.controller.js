import * as SafetyFeatureService from "../services/safetyFeature.service.js";

export const createSafetyFeature = async (req, res) => {
  try {
    const feature = await SafetyFeatureService.addSafetyFeature(req.body);
    res.status(201).json(feature);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getSafetyFeatures = async (req, res) => {
  try {
    const features = await SafetyFeatureService.fetchAllSafetyFeatures();
    res.status(200).json(features);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getSafetyFeature = async (req, res) => {
  try {
    const feature = await SafetyFeatureService.fetchSafetyFeatureById(req.params.id);
    if (!feature) return res.status(404).json({ message: "Feature not found" });
    res.status(200).json(feature);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateSafetyFeature = async (req, res) => {
  try {
    const updatedFeature = await SafetyFeatureService.editSafetyFeature(req.params.id, req.body);
    if (!updatedFeature)
      return res.status(404).json({ message: "Feature not found" });
    res.status(200).json(updatedFeature);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteSafetyFeature = async (req, res) => {
  try {
    const deleted = await SafetyFeatureService.removeSafetyFeature(req.params.id);
    if (!deleted) return res.status(404).json("Feature not found");
    res.status(200).json("Feature deleted successfully");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
