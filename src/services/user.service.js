const { User, sequelize } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const result = await sequelize.transaction(async (t) => {
    const newUser = await User.create(
      { displayName, email, password, image },
      {
        transaction: t,
        underscored: true,
      },
    );
    return newUser;
  });
  return result;
};

const getUsers = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });
  if (!user) {
    const e = new Error('User already registered');
    e.status = 401;
    throw e;
  }
  return user;
};

module.exports = {
  createUser,
  getUsers,
};
