const { authTokenValidation } = require('../utils/JWT');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const payload = await authTokenValidation(token);
    if (!payload) {
        const err = new Error('error reading JWT');
        err.status = 401;
        throw err;
    }
    req.body.userId = payload.id;
    next();
};

module.exports = authMiddleware;