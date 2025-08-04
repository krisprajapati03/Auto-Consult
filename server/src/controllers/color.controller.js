import * as ColorService from "../services/color.service.js";

export const createColor = async (req, res) => {
  try {
    const color = await ColorService.addColor(req.body);
    res.status(201).json(color);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getColors = async (req, res) => {
  try {
    const colors = await ColorService.fetchAllColors();
    res.status(200).json(colors);
  } catch (error) {
    res.status(500).json( error.message);
  }
};

export const getColor = async (req, res) => {
  try {
    const color = await ColorService.fetchColorById(req.params.id);
    if (!color) return res.status(404).json({ message: "Color not found" });
    res.status(200).json(color);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateColor = async (req, res) => {
  try {
    const updatedColor = await ColorService.editColor(req.params.id, req.body);
    if (!updatedColor) return res.status(404).json({ success: false, message: "Color not found" });
    res.status(200).json({ success: true, color: updatedColor });
  } catch (error) {
    res.status(500).json( error.message);
  }
};

export const deleteColor = async (req, res) => {
  try {
    const deleted = await ColorService.removeColor(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: "Color not found" });
    res.status(200).json({ message: "Color deleted successfully" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
