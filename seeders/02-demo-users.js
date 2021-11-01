'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [{
      name: "Daniel Rodriguez",
      email: "danrodsf@movieapp.com",
      password: bcrypt.hashSync("pass", Number.parseInt(authConfig.rounds)),
      city: "Zaragoza",
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Dewie Woodger",
      email: "dwoodger1@deviantart.com",
      password: bcrypt.hashSync("DFARV9", Number.parseInt(authConfig.rounds)),
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Westbrook Ianson",
      email: "wianson2@aol.com",
      password: bcrypt.hashSync("lNQJ4kbWJG", Number.parseInt(authConfig.rounds)),
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Xena McElhargy",
      email: "xmcelhargy3@amazon.com",
      password: bcrypt.hashSync("WqN1PjH", Number.parseInt(authConfig.rounds)),
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Antin Bellham",
      email: "abellham4@toplist.cz",
      password: bcrypt.hashSync("DkxIzvSCn", Number.parseInt(authConfig.rounds)),
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Colan Storrie",
      email: "cstorrie5@dyndns.org",
      password: bcrypt.hashSync("5qVyuW", Number.parseInt(authConfig.rounds)),
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Carolann Ioselev",
      email: "cioselev6@ocn.ne.jp",
      password: bcrypt.hashSync("XRqSeifMH3x", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Binny Seago",
      email: "bseago7@sciencedaily.com",
      password: bcrypt.hashSync("zRr15cKHb3Pz", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Zebadiah Fallens",
      email: "zfallens8@over-blog.com",
      password: bcrypt.hashSync("7PUtaN", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Tait Botfield",
      email: "tbotfield9@adobe.com",
      password: bcrypt.hashSync("ymcZJw", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Lorne Leversuch",
      email: "lleversucha@reuters.com",
      password: bcrypt.hashSync("EYQWlIA", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Glenn Balbeck",
      email: "gbalbeckb@baidu.com",
      password: bcrypt.hashSync("A9yGB1vsrm", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Dorrie Jadczak",
      email: "djadczakc@reverbnation.com",
      password: bcrypt.hashSync("lwl9gODoAgk", Number.parseInt(authConfig.rounds)),
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Roderick Guy",
      email: "rguyd@hud.gov",
      password: bcrypt.hashSync("K41tuZhVfOx", Number.parseInt(authConfig.rounds)),
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Rusty Stoll",
      email: "rstolle@homestead.com",
      password: bcrypt.hashSync("RweoCONyX9Om", Number.parseInt(authConfig.rounds)),
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Calida Cleaves",
      email: "ccleavesf@state.tx.us",
      password: bcrypt.hashSync("NlGbUQmeVV", Number.parseInt(authConfig.rounds)),
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Bernetta Tirrey",
      email: "btirreyg@scribd.com",
      password: bcrypt.hashSync("LBp67ZQMYQ", Number.parseInt(authConfig.rounds)),
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Ingar Adelberg",
      email: "iadelbergh@bbc.co.uk",
      password: bcrypt.hashSync("dw2UQ5sEKVJc", Number.parseInt(authConfig.rounds)),
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Valerie Cordoba",
      email: "vcordobai@blogger.com",
      password: bcrypt.hashSync("Dz798mN", Number.parseInt(authConfig.rounds)),
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "Thorstein Spinella",
      email: "tspinellaj@cafepress.com",
      password: bcrypt.hashSync("N2Ef4PTD7yA", Number.parseInt(authConfig.rounds)),
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('users', null, {});

  }
};
