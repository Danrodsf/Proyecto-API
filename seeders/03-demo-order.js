'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('orders', [{
      userId: 1,
      movieId: 50,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 2,
      movieId: 1,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 3,
      movieId: 2,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 4,
      movieId: 3,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 5,
      movieId: 4,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 6,
      movieId: 5,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 7,
      movieId: 6,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 8,
      movieId: 7,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 9,
      movieId: 8,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 10,
      movieId: 9,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 11,
      movieId: 10,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 12,
      movieId: 11,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 13,
      movieId: 12,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 14,
      movieId: 13,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 15,
      movieId: 14,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 16,
      movieId: 15,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 17,
      movieId: 16,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 18,
      movieId: 17,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 19,
      movieId: 18,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      userId: 20,
      movieId: 19,
      rentDate: new Date(),
      returnDate: new Date
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};