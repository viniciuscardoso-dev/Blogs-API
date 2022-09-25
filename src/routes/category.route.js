const express = require('express');
const categoryController = require('../controllers/category.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const routers = express.Router();

routers.post('/', authMiddleware, categoryController.createCategory);
routers.get('/', authMiddleware, categoryController.getCategorys);

module.exports = routers;