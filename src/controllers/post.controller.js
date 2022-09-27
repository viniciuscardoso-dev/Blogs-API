const postService = require('../services/post.service');

const createPost = async (req, res) => {
    const newPost = await postService.createPost(req.body);
    return res.status(201).json(newPost);
};

const deletePost = async (req, res) => {
  const { userId } = req.body;
  const post = await postService.getPost(req.params);
  if (post.userId !== userId) {
    const e = {
      status: 401,
      message: 'Unauthorized user',
    };
    throw e;
  }
  await postService.deletePost(req.params.id);
  return res.status(204).end();
};

const getPosts = async (_req, res) => {
  const posts = await postService.getPosts();
  return res.status(200).json(posts);
};

const getPost = async (req, res) => {
  const post = await postService.getPost(req.params);
  return res.status(200).json(post);
};

const alterPost = async (req, res) => {
  const { userId, title, content } = req.body;
  if (!title || !content) {
    const e = {
      status: 400,
      message: 'Some required fields are missing',
    };
    throw e;
  }
  const post = await postService.getPost({ id: userId });
  if (post.userId !== userId) {
    const e = {
      status: 401,
      message: 'Unauthorized user',
    };
    throw e;
  }
  const postAltered = await postService.alterPost(req.params.id, req.body);
  return res.status(200).json(postAltered);
};

module.exports = {
  createPost,
  getPost,
  getPosts,
  alterPost,
  deletePost,
};