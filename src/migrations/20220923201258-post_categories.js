'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts_categories', {
      post_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      category_id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'categories',
          key: 'id',
        },
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PostCategories');
  }
};