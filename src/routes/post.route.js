const express = require('express');
require('express-async-errors');
const postController = require('../controllers/post.controller'); 
const postMiddleware = require('../middlewares/fields/post.field');
const authMiddleware = require('../middlewares/auth.middleware');

const routers = express.Router();

routers.post('/', authMiddleware, postMiddleware.newPost, postController.createPost);
// routers.post('/', userMiddleware.newUser, userController.createUser);

// routers.get('/', authMiddleware, userController.getUsers);
// routers.get('/:id', authMiddleware, userController.getUser);

module.exports = routers;