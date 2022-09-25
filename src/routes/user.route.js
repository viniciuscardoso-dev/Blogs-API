const express = require('express');
const userController = require('../controllers/user.controller.js'); 

const routers = express.Router();

routers.post('/', userController.createUser);

module.exports = routers;