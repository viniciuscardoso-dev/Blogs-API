const express = require('express');
require('express-async-errors');
const postController = require('../controllers/post.controller'); 
const postMiddleware = require('../middlewares/fields/post.field');
const authMiddleware = require('../middlewares/auth.middleware');

const routers = express.Router();

routers.use(authMiddleware);
routers.post('/', postMiddleware.newPost, postController.createPost);
routers.get('/', postController.getPosts);
routers.get('/:id', postController.getPost);
routers.put('/:id', postController.alterPost);

module.exports = routers;