"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("stations", [
      {
        name: "Narita",
        address: "002 Nishi Tokyo",
        place: "Chiba",
        createdAt: "2024-08-15 04:10:42",
        updatedAt: "2024-08-15 04:41:57",
      },
      {
        name: "Haneda",
        address: "001 Narita",
        place: "Tokyo",
        createdAt: "2024-08-15 04:50:14",
        updatedAt: "2024-08-15 04:50:14",
      },
      {
        name: "Kansai",
        address: "003 NishiOsaka",
        place: "Osaka",
        createdAt: "2024-10-05 01:45:10",
        updatedAt: "2024-12-15 18:50:33",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("stations", null, {});
  },
};
