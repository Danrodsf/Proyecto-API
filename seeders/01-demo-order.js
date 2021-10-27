'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('orders', [{
      id: 1,
      userId: 15,
      movieId: 61,
      rentDate: "2021-01-04T17:17:29Z",
      returnDate: "2021-01-21T03:01:30Z"
    }, {
      id: 2,
      userId: 5,
      movieId: 15,
      rentDate: "2021-04-23T01:52:33Z",
      returnDate: "2021-07-10T11:42:45Z"
    }, {
      id: 3,
      userId: 6,
      movieId: 10,
      rentDate: "2021-04-28T10:22:05Z",
      returnDate: "2021-05-17T14:39:22Z"
    }, {
      id: 4,
      userId: 10,
      movieId: 89,
      rentDate: "2021-02-28T09:28:23Z",
      returnDate: "2021-07-11T07:25:10Z"
    }, {
      id: 5,
      userId: 17,
      movieId: 59,
      rentDate: "2021-04-27T03:27:36Z",
      returnDate: "2021-01-25T11:24:19Z"
    }, {
      id: 6,
      userId: 19,
      movieId: 74,
      rentDate: "2021-08-15T08:15:54Z",
      returnDate: "2021-02-13T16:42:06Z"
    }, {
      id: 7,
      userId: 6,
      movieId: 85,
      rentDate: "2021-01-25T00:10:57Z",
      returnDate: "2020-12-08T12:06:29Z"
    }, {
      id: 8,
      userId: 6,
      movieId: 4,
      rentDate: "2021-08-31T04:25:24Z",
      returnDate: "2021-03-09T05:43:08Z"
    }, {
      id: 9,
      userId: 4,
      movieId: 67,
      rentDate: "2021-02-09T00:26:06Z",
      returnDate: "2021-05-30T16:10:28Z"
    }, {
      id: 10,
      userId: 14,
      movieId: 87,
      rentDate: "2020-11-29T14:59:27Z",
      returnDate: "2021-01-19T06:39:47Z"
    }, {
      id: 11,
      userId: 4,
      movieId: 90,
      rentDate: "2021-10-15T01:32:27Z",
      returnDate: "2021-08-03T04:21:44Z"
    }, {
      id: 12,
      userId: 4,
      movieId: 37,
      rentDate: "2020-11-22T23:57:42Z",
      returnDate: "2021-07-13T08:13:40Z"
    }, {
      id: 13,
      userId: 8,
      movieId: 81,
      rentDate: "2021-02-21T23:21:07Z",
      returnDate: "2021-07-17T15:15:43Z"
    }, {
      id: 14,
      userId: 10,
      movieId: 47,
      rentDate: "2021-03-28T20:10:25Z",
      returnDate: "2021-09-03T12:19:26Z"
    }, {
      id: 15,
      userId: 20,
      movieId: 78,
      rentDate: "2021-09-19T05:27:05Z",
      returnDate: "2021-06-02T03:27:46Z"
    }, {
      id: 16,
      userId: 3,
      movieId: 39,
      rentDate: "2021-07-15T16:39:36Z",
      returnDate: "2021-03-08T09:17:06Z"
    }, {
      id: 17,
      userId: 17,
      movieId: 31,
      rentDate: "2021-09-04T07:22:30Z",
      returnDate: "2021-04-04T16:00:57Z"
    }, {
      id: 18,
      userId: 18,
      movieId: 44,
      rentDate: "2021-01-04T12:51:25Z",
      returnDate: "2021-03-19T04:34:51Z"
    }, {
      id: 19,
      userId: 4,
      movieId: 92,
      rentDate: "2021-09-26T03:08:09Z",
      returnDate: "2021-07-29T08:18:58Z"
    }, {
      id: 20,
      userId: 16,
      movieId: 97,
      rentDate: "2021-05-30T06:23:40Z",
      returnDate: "2021-06-18T15:47:09Z"
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('orders', null, {});

  }
};
