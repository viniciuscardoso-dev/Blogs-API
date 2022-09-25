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

module.exports = {
    createUser,
};
