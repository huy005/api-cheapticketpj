"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "trips",
      [
        {
          departure: 1,
          destination: 2,
          startingTime: "2024-06-13 08:30:00",
          price: 200000,
          createdAt: "2024-04-07 08:35:25",
          updatedAt: "2024-04-07 09:40:25",
        },
        {
          departure: 2,
          destination: 1,
          startingTime: "2024-06-13 08:30:00",
          price: 250000,
          createdAt: "2024-04-07 08:35:25",
          updatedAt: "2024-04-07 08:35:25",
        },
        {
          departure: 3,
          destination: 1,
          startingTime: "2024-06-13 08:30:00",
          price: 300000,
          createdAt: "2024-04-07 08:35:25",
          updatedAt: "2024-04-07 08:35:25",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("trips", null, {});
  },
};
