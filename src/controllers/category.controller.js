const CategoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  if (!req.body.name) {
    const e = new Error('"name" is required');
    e.status = 400;
    throw e;
  }
  const newCategory = await CategoryService.createCategory(req.body);
  return res.status(201).json(newCategory);
};

const getCategorys = async (_req, res) => {
  const Categorys = await CategoryService.getCategorys();
  return res.status(200).json(Categorys);
};

module.exports = {
  createCategory,
  getCategorys,
};