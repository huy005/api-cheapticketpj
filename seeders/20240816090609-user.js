"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        username: "Taka Hashi",
        email: "takahashi001@gmail.com",
        password: "th000",
        phoneNumber: "0993887456",
        avatar:
          "https://lh6.googleusercontent.com/X7JYEBXkxFMLWlXgsipqGbOYN6j9Lh_83FdKL-WPAtVKZsNnwrEE-VJVR83IXO73jgq4NrVuwPER2JVgkuyIpFMDMLzN3kbY1uHnD2_5enIx52yB-0IWf_VIfgFcpQBb4Yp3-an0",
        type: "ADMIN",
        createdAt: "2024-08-07 08:35:25",
        updatedAt: "2021-08-17 08:35:25",
      },
      {
        username: "Yukito Mizuki",
        email: "mizuki002@gmail.com",
        password: "ym000",
        phoneNumber: "0709922883",
        avatar:
          "https://lh6.googleusercontent.com/X7JYEBXkxFMLWlXgsipqGbOYN6j9Lh_83FdKL-WPAtVKZsNnwrEE-VJVR83IXO73jgq4NrVuwPER2JVgkuyIpFMDMLzN3kbY1uHnD2_5enIx52yB-0IWf_VIfgFcpQBb4Yp3-an0",
        type: "CLIENT",
        createdAt: "2024-09-20 13:10:57",
        updatedAt: "2024-11-30 21:05:16",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
