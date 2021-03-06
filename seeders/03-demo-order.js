'use strict';
let myDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('orders', [{
      userId: 1,
      movieId: 2,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 2,
      movieId: 3,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 3,
      movieId: 9,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 4,
      movieId: 11,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 5,
      movieId: 15,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 6,
      movieId: 16,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 7,
      movieId: 1,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 8,
      movieId: 5,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 9,
      movieId: 6,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 10,
      movieId: 10,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 11,
      movieId: 12,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 12,
      movieId: 13,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 13,
      movieId: 4,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 14,
      movieId: 7,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 15,
      movieId: 8,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 16,
      movieId: 17,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 17,
      movieId: 24,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 18,
      movieId: 25,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 19,
      movieId: 26,
      rentDate: new Date(),
      returnDate: myDate
    }, {
      userId: 20,
      movieId: 18,
      rentDate: new Date(),
      returnDate: myDate
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};