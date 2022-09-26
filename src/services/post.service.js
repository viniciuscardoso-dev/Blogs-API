const { BlogPost, PostCategory, sequelize } = require('../models');

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

module.exports = {
  createPost,
};
