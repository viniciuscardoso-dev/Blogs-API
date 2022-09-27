const { Category } = require('../models');

const createCategory = async ({ name }) => {
    const newCategory = await Category.create({ name });
    return newCategory;
};

const getCategorys = async () => {
    const category = await Category.findAll();
    if (!category) {
      const e = new Error('Category already registered');
      e.status = 401;
      throw e;
    }
    return category;
  };

module.exports = {
    createCategory,
    getCategorys,
  };