'use strict';
module.exports = (sequelize, DataTypes) => {
  const dms = sequelize.define('dms', {
    creatorId: {
      type: DataTypes.STRING,
      references: { model: 'users', key: 'id' },
      allowNull: false,
    },
    senderId: {
      type: DataTypes.STRING,
      references: { model: 'users', key: 'id' },
      allowNull: false,
    },
    receiverId: {
      type: DataTypes.STRING,
      references: { model: 'users', key: 'id' },
      allowNull: false
    },
    message: DataTypes.TEXT
  }, {});
  dms.associate = ({ users })  => {
    dms.belongsTo(users, { foreignKey: 'creatorId', targetKey: 'id', as: 'dms' });
  };
  return dms;
};
