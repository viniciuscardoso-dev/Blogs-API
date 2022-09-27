const express = require('express');
const userController = require('../controllers/user.controller.js'); 
const userMiddleware = require('../middlewares/fields/user.field');
const authMiddleware = require('../middlewares/auth.middleware');

const routers = express.Router();

routers.post('/', userMiddleware.newUser, userController.createUser);

routers.use(authMiddleware);

routers.get('/', userController.getUsers);
routers.get('/:id', userController.getUser);
routers.delete('/me', userController.deleteMe);

module.exports = routers;