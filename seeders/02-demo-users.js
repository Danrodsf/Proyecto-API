'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: "Gerald Sazio",
      email: "gsazio0@telegraph.co.uk",
      password: bcrypt.hashSync("ZED1AjEaM", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      name: "Dewie Woodger",
      email: "dwoodger1@deviantart.com",
      password: bcrypt.hashSync("DFARV9", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      name: "Westbrook Ianson",
      email: "wianson2@aol.com",
      password: bcrypt.hashSync("lNQJ4kbWJG", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 4,
      name: "Xena McElhargy",
      email: "xmcelhargy3@amazon.com",
      password: bcrypt.hashSync("WqN1PjH", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 5,
      name: "Antin Bellham",
      email: "abellham4@toplist.cz",
      password: bcrypt.hashSync("DkxIzvSCn", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 6,
      name: "Colan Storrie",
      email: "cstorrie5@dyndns.org",
      password: bcrypt.hashSync("5qVyuW", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 7,
      name: "Carolann Ioselev",
      email: "cioselev6@ocn.ne.jp",
      password: bcrypt.hashSync("XRqSeifMH3x", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 8,
      name: "Binny Seago",
      email: "bseago7@sciencedaily.com",
      password: bcrypt.hashSync("zRr15cKHb3Pz", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 9,
      name: "Zebadiah Fallens",
      email: "zfallens8@over-blog.com",
      password: bcrypt.hashSync("7PUtaN", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 10,
      name: "Tait Botfield",
      email: "tbotfield9@adobe.com",
      password: bcrypt.hashSync("ymcZJw", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 11,
      name: "Lorne Leversuch",
      email: "lleversucha@reuters.com",
      password: bcrypt.hashSync("EYQWlIA", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 12,
      name: "Glenn Balbeck",
      email: "gbalbeckb@baidu.com",
      password: bcrypt.hashSync("A9yGB1vsrm", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 13,
      name: "Dorrie Jadczak",
      email: "djadczakc@reverbnation.com",
      password: bcrypt.hashSync("lwl9gODoAgk", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 14,
      name: "Roderick Guy",
      email: "rguyd@hud.gov",
      password: bcrypt.hashSync("K41tuZhVfOx", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 15,
      name: "Rusty Stoll",
      email: "rstolle@homestead.com",
      password: bcrypt.hashSync("RweoCONyX9Om", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 16,
      name: "Calida Cleaves",
      email: "ccleavesf@state.tx.us",
      password: bcrypt.hashSync("NlGbUQmeVV", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 17,
      name: "Bernetta Tirrey",
      email: "btirreyg@scribd.com",
      password: bcrypt.hashSync("LBp67ZQMYQ", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 18,
      name: "Ingar Adelberg",
      email: "iadelbergh@bbc.co.uk",
      password: bcrypt.hashSync("dw2UQ5sEKVJc", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 19,
      name: "Valerie Cordoba",
      email: "vcordobai@blogger.com",
      password: bcrypt.hashSync("Dz798mN", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 20,
      name: "Thorstein Spinella",
      email: "tspinellaj@cafepress.com",
      password: bcrypt.hashSync("N2Ef4PTD7yA", Number.parseInt(authConfig.rounds)),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
