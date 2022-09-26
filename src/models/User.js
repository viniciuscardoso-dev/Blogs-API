module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      displayName: {
        type: DataTypes.STRING,
      }, 
      image: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'users',
      underscored: true,
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, { 
        constraint: true,
        foreignKey: 'userId',
        as: 'blog_posts'
      });
    };
  
    return User;
  };