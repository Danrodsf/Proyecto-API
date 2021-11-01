'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('movies', [{
      title: "Seeking Asian Female",
      genre: "Sci-fi",
      cast: "Al Pacino",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Class of 1999 II: The Substitute",
      genre: "Fantasy",
      cast: "Liam Neeson",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Wild One, The",
      genre: "Fantasy",
      cast: "Jamie Foxx",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "I Could Go on Singing",
      genre: "Romance",
      cast: "Daniel Day-Lewis",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Lost Youth",
      genre: "Thriller",
      cast: "Matthew McConaughey",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Corpo Celeste",
      genre: "Crime",
      cast: "Matthew McConaughey",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Last Blitzkrieg, The",
      genre: "Adventure",
      cast: "Nicolas Cage",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Levitated Mass",
      genre: "Comedy",
      cast: "Jamie Foxx",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Complete History of My Sexual Failures, A",
      genre: "Fantasy",
      cast: "Javier Bardem",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Justice League: Throne of Atlantis",
      genre: "Comedy",
      cast: "Daniel Day-Lewis",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Simone (S1m0ne)",
      genre: "Action",
      cast: "Kevin Spacey",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Station, The (Blutgletscher)",
      genre: "Drama",
      cast: "Denzel Washington",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Wyatt Earp's Revenge",
      genre: "Action",
      cast: "Anthony Hopkins",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Three (a.k.a. 3)",
      genre: "Thriller",
      cast: "Mel Gibson",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Good Boy!",
      genre: "Sci-fi",
      cast: "Hugh Jackman",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Billy Jack",
      genre: "Crime",
      cast: "Johnny Depp",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Chocolate",
      genre: "Comedy",
      cast: "Michael Douglas",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Efectos secundarios",
      genre: "Fantasy",
      cast: "Al Pacino",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Lizard, The (Marmoulak)",
      genre: "Crime",
      cast: "Daniel Day-Lewis",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "3rd World Hero (Bayaning Third World)",
      genre: "Fantasy",
      cast: "Matt Damon",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "6 Days to Air: The Making of South Park",
      genre: "Fantasy",
      cast: "Matt Damon",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Marius and Jeanette (Marius et Jeannette)",
      genre: "Adventure",
      cast: "Al Pacino",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Lilies of the Field",
      genre: "Romance",
      cast: "Denzel Washington",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Victor and the Secret of Crocodile Mansion",
      genre: "Adventure",
      cast: "Brad Pitt",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Iron Eagle II",
      genre: "Horror",
      cast: "Kevin Spacey",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Deep Sea 3D",
      genre: "Fantasy",
      cast: "Hugh Jackman",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Far Horizons, The",
      genre: "Sci-fi",
      cast: "Christian Bale",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Up in Arms",
      genre: "Comedy",
      cast: "Marlon Brando",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Last Wave, The",
      genre: "Drama",
      cast: "Harrison Ford",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Misérables, Les",
      genre: "Action",
      cast: "John Travolta",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Together Again",
      genre: "Adventure",
      cast: "Joaquin Phoenix",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Billy's Hollywood Screen Kiss",
      genre: "Crime",
      cast: "Johnny Depp",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Thankskilling",
      genre: "Romance",
      cast: "Edward Norton",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Uninvited Guest",
      genre: "Fantasy",
      cast: "Michael Douglas",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Lost Souls",
      genre: "Crime",
      cast: "Heath Ledger",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Mansfield Park",
      genre: "Drama",
      cast: "Anthony Hopkins",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Silent Souls (Ovsyanki)",
      genre: "Horror",
      cast: "Javier Bardem",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bully",
      genre: "Fantasy",
      cast: "John Travolta",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Jauja",
      genre: "Fantasy",
      cast: "Christoph Waltz",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Caine Mutiny, The",
      genre: "Drama",
      cast: "Gene Hackman",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Thunderpants",
      genre: "Comedy",
      cast: "Christian Bale",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "S21: The Khmer Rouge Death Machine (S-21, la machine de mort Khmère rouge)",
      genre: "Horror",
      cast: "Liam Neeson",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Being Human",
      genre: "Comedy",
      cast: "Gene Hackman",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "General's Daughter, The",
      genre: "Adventure",
      cast: "Heath Ledger",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Freddy Got Fingered",
      genre: "Thriller",
      cast: "Brad Pitt",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Barbershop",
      genre: "Horror",
      cast: "Edward Norton",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bleak Moments",
      genre: "Romance",
      cast: "Christoph Waltz",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "American Me",
      genre: "Thriller",
      cast: "Jamie Foxx",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Killing Machine, The (Icarus)",
      genre: "Thriller",
      cast: "Joaquin Phoenix",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Digimon: The Movie",
      genre: "Adventure",
      cast: "Javier Bardem",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bible, The (a.k.a. Bible... In the Beginning, The)",
      genre: "Horror",
      cast: "Marlon Brando",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "My Kid Could Paint That",
      genre: "Romance",
      cast: "Matt Damon",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Alexander",
      genre: "Romance",
      cast: "Gene Hackman",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Last American Hero, The",
      genre: "Fantasy",
      cast: "Matt Damon",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Satin Rouge",
      genre: "Fantasy",
      cast: "Johnny Depp",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Pauly Shore Is Dead",
      genre: "Fantasy",
      cast: "Christoph Waltz",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Good Doctor, The",
      genre: "Crime",
      cast: "Matt Damon",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "De la servitude moderne",
      genre: "Thriller",
      cast: "Martin Sheen",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "First Deadly Sin, The",
      genre: "Crime",
      cast: "Liam Neeson",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Slaughterhouse",
      genre: "Comedy",
      cast: "Nicolas Cage",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Outpost",
      genre: "Drama",
      cast: "Gene Hackman",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Candidate, The",
      genre: "Horror",
      cast: "Edward Norton",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Night and Day",
      genre: "Romance",
      cast: "Joaquin Phoenix",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Barbie in the Nutcracker",
      genre: "Horror",
      cast: "Christoph Waltz",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Murder by Decree",
      genre: "Horror",
      cast: "Christoph Waltz",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Paths of Glory",
      genre: "Action",
      cast: "Nicolas Cage",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Firm, The",
      genre: "Comedy",
      cast: "Kirk Douglas",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "It Happens Every Spring",
      genre: "Romance",
      cast: "Kirk Douglas",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Fire Down Below",
      genre: "Romance",
      cast: "Al Pacino",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "ReGeneration",
      genre: "Thriller",
      cast: "Edward Norton",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Great White Silence, The",
      genre: "Fantasy",
      cast: "Heath Ledger",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "700 Sundays",
      genre: "Fantasy",
      cast: "Leonardo DiCaprio",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Last Command, The",
      genre: "Drama",
      cast: "Joaquin Phoenix",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Ponyo (Gake no ue no Ponyo)",
      genre: "Adventure",
      cast: "John Travolta",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Europa (Zentropa)",
      genre: "Romance",
      cast: "Anthony Hopkins",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Running Man, The",
      genre: "Action",
      cast: "Harrison Ford",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Twilight",
      genre: "Sci-fi",
      cast: "Daniel Day-Lewis",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "3 Holiday Tails (Golden Christmas 2: The Second Tail, A)",
      genre: "Adventure",
      cast: "Kevin Spacey",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dallas: War of the Ewings",
      genre: "Comedy",
      cast: "Christoph Waltz",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Strul",
      genre: "Crime",
      cast: "Clint Eastwood",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "3some (Castillos de cartón)",
      genre: "Horror",
      cast: "Michael Douglas",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Space Jam",
      genre: "Action",
      cast: "Mel Gibson",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Joan of Arc",
      genre: "Comedy",
      cast: "Christoph Waltz",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Chained",
      genre: "Action",
      cast: "Nicolas Cage",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Walking and Talking",
      genre: "Horror",
      cast: "Leonardo DiCaprio",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dumb & Dumber (Dumb and Dumber)",
      genre: "Thriller",
      cast: "Marlon Brando",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Star Wars: Episode II - Attack of the Clones",
      genre: "Action",
      cast: "Harrison Ford",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dorm Daze (National Lampoon Presents Dorm Daze)",
      genre: "Comedy",
      cast: "Mel Gibson",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bread, My Sweet, The (a.k.a. Wedding for Bella, A)",
      genre: "Comedy",
      cast: "Kevin Spacey",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Sleeping with the Enemy",
      genre: "Drama",
      cast: "John Travolta",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Enter the Phoenix (Da lao ai mei li)",
      genre: "Adventure",
      cast: "John Travolta",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Manic",
      genre: "Thriller",
      cast: "Joaquin Phoenix",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Boeing, Boeing",
      genre: "Drama",
      cast: "Kevin Spacey",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Beer for My Horses",
      genre: "Comedy",
      cast: "Jack Nicholson",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Savannah",
      genre: "Romance",
      cast: "Anthony Hopkins",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "My Name Is Bruce",
      genre: "Fantasy",
      cast: "Matt Damon",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Mía",
      genre: "Adventure",
      cast: "Al Pacino",
      city: "Zaragoza",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Lonely Man, The",
      genre: "Sci-fi",
      cast: "Kirk Douglas",
      city: "Valencia",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Thief of Hearts",
      genre: "Adventure",
      cast: "Javier Bardem",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Malice N Wonderland",
      genre: "Adventure",
      cast: "Leonardo DiCaprio",
      city: "Madrid",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('movies', null, {});

  }
};
