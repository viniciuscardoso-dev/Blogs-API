const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const TOKEN_SECRET = process.env.JWT_SECRET || 'TEM . ENV NO DOCKER-COMPOSE.YML TB :xx';

const generateToken = (payload) =>
    jwt.sign(payload, TOKEN_SECRET, jwtConfig);

const authTokenValidation = async (token) => {
    if (!token) {
        const e = new Error('Token not found');
        e.status = 401;
        throw e;
    }
    try {
        const instrospection = await jwt.verify(token, TOKEN_SECRET);
        return instrospection;
    } catch (e) {
        const err = new Error('Expired or invalid token');
        err.status = 401;
        throw err;
    }  
};

module.exports = {
    generateToken,
    authTokenValidation,
};