'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = ({ dms }) =>  {
    users.hasMany(dms, { foreignKey: 'creatorId', targetKey: 'id', as: 'dms' });
  };
  return users;
};