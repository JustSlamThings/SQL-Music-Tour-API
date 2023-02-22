'use strict';

const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.addColumn('bands', 'recommendation', {
          type: DataTypes.STRING
      })
    },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    down: async (queryInterface, Sequelize) => {
      await queryInterface.removeColumn('bands', 'recommendation')
    }
  }}