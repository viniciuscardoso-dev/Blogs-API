module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
      userId: DataTypes.INTEGER
    },
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    });
  
    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { 
          constraint: true,
          foreignKey: 'user_id',
          as: 'user',
        });
    };
  
    return BlogPost;
  };