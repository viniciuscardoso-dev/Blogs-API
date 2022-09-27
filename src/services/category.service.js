const { Category, sequelize } = require('../models');

const createCategory = async ({ name }) => {
  const result = await sequelize.transaction(async (t) => {
    const newCategory = await Category.create(
      { name },
      {
        transaction: t,
        underscored: true,
      },
    );
    return newCategory;
  });
  return result;
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