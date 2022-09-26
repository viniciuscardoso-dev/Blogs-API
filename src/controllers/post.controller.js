const postService = require('../services/post.service');

const createPost = async (req, res, next) => {
    try {
      const newPost = await postService.createPost(req.body);
      return res.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  };

const getPosts = async (_req, res) => {
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
};

const getPost = async (req, res) => {
  const post = await postService.getPost(req.params);
  return res.status(200).json(post);
};

module.exports = {
    createPost,
    getPost,
    getPosts,
};