const express = require('express');
const userController = require('../controllers/user.controller.js'); 
const userMiddleware = require('../middlewares/fields/user.field');

const routers = express.Router();

routers.post('/', userMiddleware.newUser, userController.createUser);

module.exports = routers;