import * as ColorDAO from "../dao/color.dao.js";

export const addColor = async (data) => {
  return await ColorDAO.createColor(data);
};

export const fetchAllColors = async () => {
  return await ColorDAO.getAllColors();
};

export const fetchColorById = async (id) => {
  return await ColorDAO.getColorById(id);
};

export const editColor = async (id, updateData) => {
  return await ColorDAO.updateColorById(id, updateData);
};

export const removeColor = async (id) => {
  return await ColorDAO.deleteColorById(id);
};
