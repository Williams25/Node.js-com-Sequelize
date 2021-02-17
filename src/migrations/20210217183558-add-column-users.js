'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'age', { type: Sequelize.INTEGER })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'age')
  }
};
