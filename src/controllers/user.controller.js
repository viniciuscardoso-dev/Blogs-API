const userService = require('../services/user.service.js');
const { generateToken } = require('../utils/JWT');

const createUser = async (req, res) => {
    const newUser = await userService.createUser(req.body);
    const token = await generateToken(req.body);
    return res.status(201).json({ newUser, token });
  };

const getUsers = async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

const getUser = async (req, res) => {
  const user = await userService.getUser(req.params.id);
  return res.status(200).json(user);
};

const deleteMe = async (req, res) => {
  await userService.deleteMe(req.body.userId);
  return res.status(204).end();
};

module.exports = {
    createUser,
    getUser,
    getUsers,
    deleteMe,
};