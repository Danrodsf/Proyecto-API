'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('orders', [{
      id: 1,
      userId: 15,
      movieId: 61,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 2,
      userId: 5,
      movieId: 15,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 3,
      userId: 6,
      movieId: 10,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 4,
      userId: 10,
      movieId: 89,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 5,
      userId: 17,
      movieId: 59,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 6,
      userId: 19,
      movieId: 74,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 7,
      userId: 6,
      movieId: 85,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 8,
      userId: 6,
      movieId: 4,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 9,
      userId: 4,
      movieId: 67,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 10,
      userId: 14,
      movieId: 87,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 11,
      userId: 4,
      movieId: 90,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 12,
      userId: 4,
      movieId: 37,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 13,
      userId: 8,
      movieId: 81,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 14,
      userId: 10,
      movieId: 47,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 15,
      userId: 20,
      movieId: 78,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 16,
      userId: 3,
      movieId: 39,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 17,
      userId: 17,
      movieId: 31,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 18,
      userId: 18,
      movieId: 44,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 19,
      userId: 4,
      movieId: 92,
      rentDate: new Date(),
      returnDate: new Date
    }, {
      id: 20,
      userId: 16,
      movieId: 97,
      rentDate: new Date(),
      returnDate: new Date
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};
