'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('movies', [{
      title: "Train to Busan",
      orderId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Shaun of the dead",
      orderId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "ZombieLand",
      orderId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Evil Dead",
      orderId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Evil Dead 2",
      orderId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Evil Dead 3",
      orderId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "28 Days Later",
      orderId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Zombiever",
      orderId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Overlord",
      orderId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "Black Sheep",
      orderId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('movies', null, {});

  }
};
