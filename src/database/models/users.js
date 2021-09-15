'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = ({ dms }) =>  {
    users.hasMany(dms, { foreignKey: 'receiverId', targetKey: 'id', as: 'sentDms' });
    users.hasMany(dms, { foreignKey: 'senderId', targetKey: 'id', as: 'receivedDms' });
  };
  return users;
};