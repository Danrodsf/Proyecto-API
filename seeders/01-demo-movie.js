'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('movies', [{
      title: "Easy Money 2 (Snabba cash II)",
      genre: "Action|Crime|Drama",
      cast: "Jeff Bridges",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Carol Channing: Larger Than Life",
      genre: "Comedy|Documentary|Musical",
      cast: "Daniel Day-Lewis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Cars 2",
      genre: "Adventure|Animation|Children|Comedy|IMAX",
      cast: "Liam Neeson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Great Ziegfeld, The",
      genre: "Drama|Musical",
      cast: "Mel Gibson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Traffic",
      genre: "Crime|Drama|Thriller",
      cast: "John Travolta",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "The Casino Murder Case",
      genre: "Action|Drama|Mystery",
      cast: "Brad Pitt",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "The Magic Crystal",
      genre: "Adventure|Animation|Children|Comedy|Fantasy",
      cast: "Leonardo DiCaprio",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Oscar",
      genre: "Comedy|Crime|Mystery|Romance",
      cast: "Mel Gibson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dakota",
      genre: "Western",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Firewall",
      genre: "Crime|Drama|Thriller",
      cast: "Joaquin Phoenix",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "No One Writes to the Colonel (El coronel no tiene quien le escriba)",
      genre: "Drama",
      cast: "Liam Neeson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Treasure Island",
      genre: "Adventure",
      cast: "Hugh Jackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Back to Bataan",
      genre: "Drama|War",
      cast: "Heath Ledger",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "King of Texas, The",
      genre: "Documentary",
      cast: "Michael Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Swept from the Sea",
      genre: "Drama|Romance",
      cast: "Heath Ledger",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Broken Wings (Knafayim Shvurot)",
      genre: "Drama",
      cast: "Denzel Washington",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Travels with My Aunt",
      genre: "Adventure|Comedy|Drama",
      cast: "Liam Neeson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Blast from the Past",
      genre: "Comedy|Romance",
      cast: "Jack Nicholson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "FDR: American Badass!",
      genre: "Action|Comedy",
      cast: "Clint Eastwood",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Shamus",
      genre: "Crime|Mystery",
      cast: "Edward Norton",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bye Bye Braverman",
      genre: "Comedy|Drama",
      cast: "Liam Neeson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bullfighter and the Lady",
      genre: "Action|Drama|Romance",
      cast: "Gene Hackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Tarzan",
      genre: "Adventure|Animation|Children|Drama",
      cast: "Heath Ledger",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Carmen Jones",
      genre: "Drama|Musical",
      cast: "Kirk Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Urusei Yatsura Movie 2: Beautiful Dreamer (Urusei Yatsura 2: Byûtifuru dorîmâ)",
      genre: "Animation|Comedy|Fantasy",
      cast: "Brad Pitt",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Intimidation",
      genre: "Crime|Drama|Mystery",
      cast: "Anthony Hopkins",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Reivers, The",
      genre: "Comedy|Drama",
      cast: "Leonardo DiCaprio",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Billy Bathgate",
      genre: "Crime|Drama",
      cast: "Martin Sheen",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Oxford Murders, The",
      genre: "Crime|Mystery|Romance|Thriller",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Santa Fe",
      genre: "Action|Romance|Western",
      cast: "Clint Eastwood",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Food of the Gods II",
      genre: "Horror|Sci-Fi",
      cast: "Nicolas Cage",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "King of the Ants",
      genre: "Crime|Horror",
      cast: "Leonardo DiCaprio",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Azumi 2: Death or Love",
      genre: "Action|Adventure",
      cast: "Jamie Foxx",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Sorority Babes in the Slimeball Bowl-O-Rama",
      genre: "Comedy|Horror",
      cast: "Denzel Washington",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Two English Girls (Les deux anglaises et le continent)",
      genre: "Drama|Romance",
      cast: "Michael Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Barren Lives (Vidas Secas)",
      genre: "Drama",
      cast: "Christian Bale",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "5,000 Fingers of Dr. T, The",
      genre: "Children|Fantasy|Musical",
      cast: "Daniel Day-Lewis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Strange Case of Dr. Jekyll and Mr. Hyde, The",
      genre: "Drama|Horror|Sci-Fi|Thriller",
      cast: "Gene Hackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Year and a Half in the Life of Metallica, A",
      genre: "Documentary|Musical",
      cast: "Liam Neeson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "The Last Farm",
      genre: "Drama",
      cast: "Javier Bardem",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "5,000 Fingers of Dr. T, The",
      genre: "Children|Fantasy|Musical",
      cast: "Jeff Bridges",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Yankee Doodle Dandy",
      genre: "Drama|Musical",
      cast: "Kirk Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Strip-tease",
      genre: "Drama",
      cast: "Mel Gibson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "How to Eat Fried Worms",
      genre: "Children|Drama",
      cast: "Mel Gibson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "New Kids Turbo",
      genre: "Action|Comedy",
      cast: "Jamie Foxx",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Marilyn Hotchkiss' Ballroom Dancing & Charm School",
      genre: "Comedy|Drama|Romance",
      cast: "Joaquin Phoenix",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Fireman, The",
      genre: "Comedy",
      cast: "Leonardo DiCaprio",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Queen of the Damned",
      genre: "Fantasy|Horror",
      cast: "Clint Eastwood",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Lady Takes a Chance, A",
      genre: "Comedy|Romance|Western",
      cast: "Liam Neeson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Inherit the Wind",
      genre: "Drama",
      cast: "Liam Neeson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Human Resources (Ressources humaines)",
      genre: "Drama",
      cast: "Marlon Brando",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Gospel, The",
      genre: "Drama",
      cast: "Denzel Washington",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Petrified Forest, The",
      genre: "Crime|Drama|Romance",
      cast: "Kirk Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Miami Blues",
      genre: "Comedy|Crime|Drama",
      cast: "Brad Pitt",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Gospa",
      genre: "Drama",
      cast: "Harrison Ford",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Sex and Lucia (Lucía y el sexo)",
      genre: "Drama|Romance",
      cast: "Daniel Day-Lewis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Flamingo Kid, The",
      genre: "Comedy|Drama",
      cast: "Benicio Del Toro",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Capricious Summer (Rozmarné léto)",
      genre: "Comedy",
      cast: "Edward Norton",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bourne Identity, The",
      genre: "Action|Mystery|Thriller",
      cast: "Christian Bale",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Door in the Floor, The",
      genre: "Drama",
      cast: "Matthew McConaughey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Red Riding: 1983",
      genre: "Crime|Drama|Mystery",
      cast: "Leonardo DiCaprio",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Neon Genesis Evangelion: The End of Evangelion (Shin seiki Evangelion Gekijô-ban: Air/Magokoro wo, kimi ni)",
      genre: "Action|Animation|Drama|Fantasy|Sci-Fi",
      cast: "Jeff Bridges",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "This Filthy World",
      genre: "Comedy|Documentary",
      cast: "Benicio Del Toro",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "LOL",
      genre: "Comedy|Drama",
      cast: "Matthew McConaughey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Tae Guk Gi: The Brotherhood of War (Taegukgi hwinalrimyeo)",
      genre: "Action|Drama|War",
      cast: "Kirk Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Gung Ho! (Gung Ho!: The Story of Carlson's Makin Island Raiders)",
      genre: "Drama|War",
      cast: "Michael Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Ball of Fire",
      genre: "Comedy|Romance",
      cast: "Javier Bardem",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Spy Game",
      genre: "Action|Crime|Drama|Thriller",
      cast: "Kirk Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Your Friend the Rat",
      genre: "Animation",
      cast: "Matt Damon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Joan of Arc",
      genre: "Action|Drama|War",
      cast: "Marlon Brando",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dinner Rush",
      genre: "Drama",
      cast: "Christoph Waltz",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "All That Heaven Allows",
      genre: "Drama|Romance",
      cast: "Kevin Spacey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Failure to Launch",
      genre: "Comedy|Romance",
      cast: "Matt Damon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Broadway Damage",
      genre: "Comedy",
      cast: "Matt Damon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Cowboy and the Lady, The",
      genre: "Comedy|Drama|Romance|Western",
      cast: "Brad Pitt",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Planes, Trains & Automobiles",
      genre: "Comedy",
      cast: "Jamie Foxx",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Doomsday Prophecy",
      genre: "Action|Sci-Fi|Thriller",
      cast: "Martin Sheen",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Horror Business",
      genre: "Documentary",
      cast: "Jamie Foxx",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Cold Light of Day, The",
      genre: "Drama|Thriller",
      cast: "Christian Bale",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Lady Be Good",
      genre: "Comedy|Musical",
      cast: "Matt Damon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "One Man Against the Organization",
      genre: "(no genres listed)",
      cast: "Matthew McConaughey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Exit",
      genre: "Drama|Mystery|Thriller",
      cast: "Al Pacino",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Predator 2",
      genre: "Action|Sci-Fi|Thriller",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Honey, We Shrunk Ourselves",
      genre: "Action|Adventure|Children|Comedy|Sci-Fi",
      cast: "Benicio Del Toro",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Doctor Dolittle",
      genre: "Adventure|Children|Musical",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Season of Monsters (Szörnyek évadja) ",
      genre: "Drama",
      cast: "Christoph Waltz",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Go Get Some Rosemary (Daddy Longlegs)",
      genre: "Comedy|Drama",
      cast: "John Travolta",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Little City",
      genre: "Comedy|Romance",
      cast: "Daniel Day-Lewis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Xtro 3: Watch the Skies",
      genre: "Horror|Sci-Fi",
      cast: "Kevin Spacey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Orlando",
      genre: "Drama|Fantasy|Romance",
      cast: "Christian Bale",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Black Balloon, The",
      genre: "Drama",
      cast: "Jack Nicholson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "And God Created Woman (Et Dieu... créa la femme)",
      genre: "Drama",
      cast: "Mel Gibson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Continental Divide",
      genre: "Comedy|Romance",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Christmas Memory, A (Truman Capote's 'A Christmas Memory')",
      genre: "Children|Drama",
      cast: "Mel Gibson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Tarzan the Ape Man",
      genre: "Action|Adventure",
      cast: "Daniel Day-Lewis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Angel Dog",
      genre: "Children|Drama",
      cast: "Anthony Hopkins",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "The Trial of Lee Harvey Oswald",
      genre: "Drama",
      cast: "Christoph Waltz",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Vertical Ray of the Sun, The (Mua he chieu thang dung)",
      genre: "Drama",
      cast: "Hugh Jackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Temptations, The",
      genre: "Drama|Musical",
      cast: "Harrison Ford",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Chain of Fools",
      genre: "Comedy|Crime",
      cast: "Al Pacino",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('movies', null, {});

  }
};
