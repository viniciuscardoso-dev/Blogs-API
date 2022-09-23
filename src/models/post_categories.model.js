module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });
  
    PostCategory.associate = (models) => {
        PostCategory.belongsTo(models.BlogPost, { 
          constraint: true,
          foreignKey: 'post_id',
        });
    };

    PostCategory.associate = (models) => {
        PostCategory.belongsTo(models.Category, { 
          constraint: true,
          foreignKey: 'category_id',
        });
    };
  
    return PostCategory;
  };