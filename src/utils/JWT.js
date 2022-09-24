const jwt = require('jsonwebtoken');

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const TOKEN_SECRET = process.env.JWT_SECRET || 'TEM . ENV NO DOCKER-COMPOSE.YML TB :xx';

const generateToken = (payload) =>
    jwt.sign(payload, TOKEN_SECRET, jwtConfig);

// const authTokenValidation = async () => {

// };

module.exports = {
    generateToken,
    // authTokenValidation
};