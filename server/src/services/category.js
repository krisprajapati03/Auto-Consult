import * as CategoryDAO from '../dao/category.js';

export const createCategory = async (data) => await CategoryDAO.createCategory(data);
export const getCategories = async () => await CategoryDAO.getAllCategories();
export const deleteCategory = async (id) => await CategoryDAO.deleteCategory(id);