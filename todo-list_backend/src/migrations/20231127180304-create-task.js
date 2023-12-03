'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("tasks", {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
      },
      priority: {
        type: Sequelize.ENUM("high", "medium", "low"),
    },
    status: {
        type: Sequelize.ENUM("pending", "completed"),
    }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("tasks");
  }
};
