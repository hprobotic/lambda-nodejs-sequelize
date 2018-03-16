'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserItem = sequelize.define(
    'UserItem',
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {}
  );
  UserItem.associate = models => {
    UserItem.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };
  return UserItem;
};
