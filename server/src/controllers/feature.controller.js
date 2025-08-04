import * as FeatureService from "../services/feature.service.js";

export const createFeature = async (req, res) => {
  try {
    const feature = await FeatureService.addFeature(req.body);
    res.status(201).json(feature);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getFeatures = async (req, res) => {
  try {
    const features = await FeatureService.fetchAllFeatures();
    res.status(200).json(features);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getFeature = async (req, res) => {
  try {
    const feature = await FeatureService.fetchFeatureById(req.params.id);
    if (!feature) return res.status(404).json({ message: "Feature not found" });
    res.status(200).json(feature);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateFeature = async (req, res) => {
  try {
    const updatedFeature = await FeatureService.editFeature(req.params.id, req.body);
    if (!updatedFeature)
      return res.status(404).json({ message: "Feature not found" });
    res.status(200).json({ feature: updatedFeature });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteFeature = async (req, res) => {
  try {
    const deleted = await FeatureService.removeFeature(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Feature not found" });
    res.status(200).json({ message: "Feature deleted successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
