'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.UserItem, {
      foreignKey: 'userId',
      as: 'userItems'
    });
    // associations can be defined here
  };
  return User;
};
