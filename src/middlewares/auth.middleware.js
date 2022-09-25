const { authTokenValidation } = require('../utils/JWT');
require('express-async-errors');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const payload = await authTokenValidation(token);

    if (!payload) {
        const err = new Error('error reading JWT');
        err.status = 401;
        throw err;
    }

    next();
};

module.exports = authMiddleware;