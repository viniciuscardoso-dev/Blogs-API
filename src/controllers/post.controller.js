const postService = require('../services/post.service');

const createPost = async (req, res, next) => {
    try {
      const newPost = await postService.createPost(req.body);
      return res.status(201).json(newPost);
    } catch (error) {
      next(error);
    }
  };

// const getposts = async (_req, res) => {
//   const posts = await postService.getposts();
//   return res.status(200).json(posts);
// };

// const getpost = async (req, res) => {
//   const post = await postService.getpost(req.params.id);
//   return res.status(200).json(post);
// };

module.exports = {
    createPost,
    // getpost,
    // getposts,
};