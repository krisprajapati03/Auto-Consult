import { Color } from "../models/Color.js";

export const createColor = async (data) => await Color.create(data);

export const getAllColors = async () => await Color.find().sort({ createdAt: -1 });

export const getColorById = async (id) => await Color.findById(id);

export const updateColorById = async (id, updateData) =>
  await Color.findByIdAndUpdate(id, updateData, { new: true });

export const deleteColorById = async (id) => await Color.findByIdAndDelete(id);
