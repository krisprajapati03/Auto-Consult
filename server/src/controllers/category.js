import * as CategoryService from '../services/category.js';

export const createCategory = async (req, res) => {
  try {
    const category = await CategoryService.createCategory(req.body);
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await CategoryService.getCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const deleted = await CategoryService.deleteCategory(req.params.id);
    if (!deleted) return res.status(404).json("Category not found");
    res.status(200).json("Category deleted successfully");
  } catch (err) {
    res.status(500).json(err.message);
  }
}