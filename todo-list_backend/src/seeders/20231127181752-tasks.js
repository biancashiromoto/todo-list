'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("tasks",
    [
      {
        title: "Sample task 01",
        priority: "medium",
        status: "pending",
      },
      {
        title: "Sample task 02",
        priority: "high",
        status: "completed",
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tasks", {});
  }
};
