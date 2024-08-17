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
          startingTime: "2021-06-13 08:30:00",
          price: 200000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
        },
        {
          departure: 3,
          destination: 4,
          startingTime: "2021-06-13 08:30:00",
          price: 250000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
        },
        {
          departure: 1,
          destination: 4,
          startingTime: "2021-06-13 08:30:00",
          price: 300000,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("trips", null, {});
  },
};
