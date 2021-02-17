'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('User_techs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Techs',
          key: 'id'
        },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        default: new Date()
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        default: new Date()
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User_techs')
  }
};