const { User } = require('../models');
// pose ser que de erro na importacao

// const { generateToken } = require('../utils/JWT');

const authentication = async ({ email, password }) => {
    const user = await User.findOne({
        attributes: ['id'],
        where: { email, password },
    });

    if (!user) {
        const e = new Error('Invalid fields');
        e.status = 400;
        throw e;
    }

    const token = 'implementa a util gera token cara';

    return {
        token,
    };
};

module.exports = {
    authentication,
};