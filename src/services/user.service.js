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

const userExist = async (email) => {
  const users = await User.findOne({ where: { email } });
  if (users) {
    const e = new Error('User already registered');
    e.status = 409;
    throw e;
  }
};

const getUser = async (id) => {
  const user = await User.findOne({ 
    where: { id },
    attributes: { exclude: ['password'] },
  });
  if (!user) {
    const e = new Error('User does not exist');
    e.status = 404;
    throw e;
  }
  return user;
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
  getUser,
  getUsers,
  userExist,
};
