const express = require('express');
require('express-async-errors');
const postController = require('../controllers/post.controller'); 
const postMiddleware = require('../middlewares/fields/post.field');
const authMiddleware = require('../middlewares/auth.middleware');

const routers = express.Router();

routers.post('/', authMiddleware, postMiddleware.newPost, postController.createPost);
routers.get('/', authMiddleware, postController.getPosts);
routers.get('/:id', authMiddleware, postController.getPost);

module.exports = routers;