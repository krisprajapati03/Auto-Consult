import Category from '../models/Category.js';

export const createCategory = async (data) => await Category.create(data);
export const getAllCategories = async () => await Category.find().populate();
export const deleteCategory = async (id) => {
  const category = await Category.findByIdAndDelete(id);
  return category ? true : false;
}