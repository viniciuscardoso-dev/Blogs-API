const { Category, sequelize } = require('../models');

const createCategory = async ({ name }) => {
if (!name) {
    const e = new Error('"name" is required');
    e.status = 400;
    throw e;
}
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

module.exports = {
    createCategory,
  };