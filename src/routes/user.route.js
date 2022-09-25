const express = require('express');
const userController = require('../controllers/user.controller.js'); 
const userMiddleware = require('../middlewares/fields/user.field');
const authMiddleware = require('../middlewares/auth.middleware');

const routers = express.Router();

routers.post('/', userMiddleware.newUser, userController.createUser);

routers.get('/', authMiddleware, userController.getUsers);
routers.get('/:id', authMiddleware, userController.getUser);

module.exports = routers;