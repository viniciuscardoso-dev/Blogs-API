module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: 'posts_categories',
      foreignKey: 'post_id',
      otherKey: 'category_id'
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: 'posts_categories',
      foreignKey: 'category_id',
      otherKey: 'post_id'
    });
  };

  return PostCategory;
};