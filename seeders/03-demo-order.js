'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('orders', [{
      userId: 15,
      movieId: 5,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 25,
      movieId: 15,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 35,
      movieId: 25,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 45,
      movieId: 35,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 55,
      movieId: 45,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 65,
      movieId: 55,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 75,
      movieId: 65,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 85,
      movieId: 75,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 95,
      movieId: 85,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 105,
      movieId: 95,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 115,
      movieId: 105,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 125,
      movieId: 115,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 135,
      movieId: 125,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 145,
      movieId: 135,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 155,
      movieId: 145,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 165,
      movieId: 155,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 175,
      movieId: 165,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 185,
      movieId: 175,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 195,
      movieId: 185,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 5,
      movieId: 195,
      rentDate: new Date(),
      returnDate: new Date
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};
