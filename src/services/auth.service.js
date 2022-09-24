const { User } = require('../models');
// pose ser que de erro na importacao

const { generateToken } = require('../utils/JWT');

const authentication = async ({ email, password }) => {
    if (!email || !password) {
        const e = new Error('Some required fields are missing');
        e.status = 400;
        throw e;
    }

    const user = await User.findOne({
        attributes: ['id'],
        where: { email, password },
    });

    if (!user) {
        const e = new Error('Invalid fields');
        e.status = 400;
        throw e;
    }

    const token = generateToken({ id: user.dataValues.id });

    return {
        token,
    };
};

module.exports = {
    authentication,
};