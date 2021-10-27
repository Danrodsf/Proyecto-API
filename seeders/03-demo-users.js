'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let pass = bcrypt.hashSync(password, Number.parseInt(authConfig.rounds));

    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: "Gerald Sazio",
      email: "gsazio0@telegraph.co.uk",
      password: pass("ZED1AjEaM"),
      createdAt: "2021-06-30T07:27:46Z",
      updatedAt: "2021-03-09T17:12:41Z"
    }, {
      id: 2,
      name: "Dewie Woodger",
      email: "dwoodger1@deviantart.com",
      password: pass("DFARV9"),
      createdAt: "2020-12-26T16:21:41Z",
      updatedAt: "2021-01-11T13:13:44Z"
    }, {
      id: 3,
      name: "Westbrook Ianson",
      email: "wianson2@aol.com",
      password: pass("lNQJ4kbWJG"),
      createdAt: "2021-06-08T03:09:04Z",
      updatedAt: "2021-09-06T13:36:47Z"
    }, {
      id: 4,
      name: "Xena McElhargy",
      email: "xmcelhargy3@amazon.com",
      password: pass("WqN1PjH"),
      createdAt: "2021-06-09T10:35:43Z",
      updatedAt: "2021-01-07T15:29:49Z"
    }, {
      id: 5,
      name: "Antin Bellham",
      email: "abellham4@toplist.cz",
      password: pass("DkxIzvSCn"),
      createdAt: "2021-03-02T18:06:09Z",
      updatedAt: "2021-02-23T08:10:21Z"
    }, {
      id: 6,
      name: "Colan Storrie",
      email: "cstorrie5@dyndns.org",
      password: pass("5qVyuW"),
      createdAt: "2021-04-05T11:10:14Z",
      updatedAt: "2021-09-21T06:07:21Z"
    }, {
      id: 7,
      name: "Carolann Ioselev",
      email: "cioselev6@ocn.ne.jp",
      password: pass("XRqSeifMH3x"),
      createdAt: "2021-07-19T12:27:48Z",
      updatedAt: "2021-10-20T13:42:53Z"
    }, {
      id: 8,
      name: "Binny Seago",
      email: "bseago7@sciencedaily.com",
      password: pass("zRr15cKHb3Pz"),
      createdAt: "2020-11-25T15:40:10Z",
      updatedAt: "2021-01-27T18:25:41Z"
    }, {
      id: 9,
      name: "Zebadiah Fallens",
      email: "zfallens8@over-blog.com",
      password: pass("7PUtaN"),
      createdAt: "2021-03-11T21:49:38Z",
      updatedAt: "2020-11-21T09:44:10Z"
    }, {
      id: 10,
      name: "Tait Botfield",
      email: "tbotfield9@adobe.com",
      password: pass("ymcZJw"),
      createdAt: "2021-04-18T04:26:37Z",
      updatedAt: "2021-05-19T12:52:09Z"
    }, {
      id: 11,
      name: "Lorne Leversuch",
      email: "lleversucha@reuters.com",
      password: pass("EYQWlIA"),
      createdAt: "2021-07-17T06:45:25Z",
      updatedAt: "2021-02-27T20:24:00Z"
    }, {
      id: 12,
      name: "Glenn Balbeck",
      email: "gbalbeckb@baidu.com",
      password: pass("A9yGB1vsrm"),
      createdAt: "2020-12-06T07:44:28Z",
      updatedAt: "2021-02-15T06:30:10Z"
    }, {
      id: 13,
      name: "Dorrie Jadczak",
      email: "djadczakc@reverbnation.com",
      password: pass("lwl9gODoAgk"),
      createdAt: "2021-09-12T20:28:56Z",
      updatedAt: "2021-01-31T18:17:47Z"
    }, {
      id: 14,
      name: "Roderick Guy",
      email: "rguyd@hud.gov",
      password: pass("K41tuZhVfOx"),
      createdAt: "2021-07-17T06:16:29Z",
      updatedAt: "2021-01-03T16:05:17Z"
    }, {
      id: 15,
      name: "Rusty Stoll",
      email: "rstolle@homestead.com",
      password: pass("RweoCONyX9Om"),
      createdAt: "2021-06-19T08:32:57Z",
      updatedAt: "2020-11-13T18:01:28Z"
    }, {
      id: 16,
      name: "Calida Cleaves",
      email: "ccleavesf@state.tx.us",
      password: pass("NlGbUQmeVV"),
      createdAt: "2021-10-24T10:21:18Z",
      updatedAt: "2021-09-27T23:28:39Z"
    }, {
      id: 17,
      name: "Bernetta Tirrey",
      email: "btirreyg@scribd.com",
      password: pass("LBp67ZQMYQ"),
      createdAt: "2020-12-10T16:50:15Z",
      updatedAt: "2021-09-08T20:21:26Z"
    }, {
      id: 18,
      name: "Ingar Adelberg",
      email: "iadelbergh@bbc.co.uk",
      password: pass("dw2UQ5sEKVJc"),
      createdAt: "2020-10-29T08:58:19Z",
      updatedAt: "2020-11-20T14:11:19Z"
    }, {
      id: 19,
      name: "Valerie Cordoba",
      email: "vcordobai@blogger.com",
      password: pass("Dz798mN"),
      createdAt: "2021-04-23T05:08:24Z",
      updatedAt: "2021-10-13T08:50:44Z"
    }, {
      id: 20,
      name: "Thorstein Spinella",
      email: "tspinellaj@cafepress.com",
      password: pass("N2Ef4PTD7yA"),
      createdAt: "2021-04-02T00:08:20Z",
      updatedAt: "2021-05-09T14:09:24Z"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
