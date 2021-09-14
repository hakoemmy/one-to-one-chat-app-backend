'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('dms', {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
      },
      creatorId: {
        type: Sequelize.STRING,
        references: { model: 'users', key: 'id' },
        allowNull: false,
      },
      senderId: {
        type: Sequelize.STRING,
        references: { model: 'users', key: 'id' },
        allowNull: false,
      },
      receiverId: {
        type: Sequelize.STRING,
        references: { model: 'users', key: 'id' },
        allowNull: false
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dms');
  }
};