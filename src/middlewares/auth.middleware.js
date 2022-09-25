const { authTokenValidation } = require('../utils/JWT');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;
    const payload = await authTokenValidation(token);

    if (payload.status) {
        return next(payload);
    }

    next();
};

module.exports = authMiddleware;