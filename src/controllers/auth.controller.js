const authService = require('../services/auth.service.js');

const auth = async (req, res) => {
    const token = await authService.authentication(req.body);
    res.status(200).json(token);
};

module.exports = {
    auth,
};