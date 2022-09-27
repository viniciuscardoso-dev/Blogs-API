const { BlogPost, PostCategory, User, Category, sequelize } = require('../models');

const createPost = async ({ userId, title, content, categoryIds }) => {
  const transaction = await sequelize.transaction();
  try {
    const newPost = await BlogPost.create({ userId, title, content },
      { transaction, underscored: true });
    await Promise.all(
      categoryIds.map((categoryId) => PostCategory.create({ postId: newPost.id, categoryId },
        { transaction })),
    );
    await transaction.commit();
    return newPost;
  } catch (e) {
    await transaction.rollback();
    e.status = 400;
    e.message = '"categoryIds" not found';
    throw e;
  }
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories' },
    ],
  });
  return posts;
};

const getPost = async ({ id }) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'categories' },
    ],
  });
  if (!post) {
    const e = {
      status: 404,
      message: 'Post does not exist',
    };
    throw e;
  }
  return post;
};

const alterPost = async (id, { title, content }) => {
  if (!title || !content) {
    const e = {
      status: 400,
      message: 'Some required fields are missing',
    };
    throw e;
  }
  // esse if tem que estar na camada de controle
  await BlogPost.update({
    title, content,
  }, { where: { id } });
  const postAltered = await getPost({ id });
  return postAltered;
};

module.exports = {
  createPost,
  getPost,
  getPosts,
  alterPost,
};
