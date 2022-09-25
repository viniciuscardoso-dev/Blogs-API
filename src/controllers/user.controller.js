const userService = require('../services/user.service.js');
const { generateToken } = require('../utils/JWT');

const createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    const token = await generateToken(req.body);
    return res.status(201).json({ newUser, token });
  };

module.exports = {
    createUser,
};