"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tickets",
      [
        {
          trip_id: 2,
          user_id: 1,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
        },
        {
          trip_id: 1,
          user_id: 2,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
        },
        {
          trip_id: 3,
          user_id: 1,
          createdAt: "2021-04-07 08:35:25",
          updatedAt: "2021-04-07 08:35:25",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tickets", null, {});
  },
};
