const express = require('express');
const categoryController = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const routers = express.Router();

routers.use(authMiddleware);
routers.post('/', categoryController.createCategory);
routers.get('/', categoryController.getCategorys);

module.exports = routers;