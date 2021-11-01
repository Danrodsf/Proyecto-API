'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('movies', [{
      title: "Girl on the Bridge, The (Fille sur le pont, La)",
      genre: "Adventure",
      cast: "Daniel Day-Lewis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Too Early, Too Late (Trop tôt, trop tard)",
      genre: "Horror",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Borrowers, The",
      genre: "Horror",
      cast: "Anthony Hopkins",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Ratcatcher",
      genre: "Fantasy",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Cose da pazzi",
      genre: "Adventure",
      cast: "John Travolta",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Thin Blue Line, The",
      genre: "Action",
      cast: "Al Pacino",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "The Gang That Sold America",
      genre: "Adventure",
      cast: "Liam Neeson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Night and Day",
      genre: "Action",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Inadequate People (Neadekvatnye lyudi)",
      genre: "Romance",
      cast: "Nicolas Cage",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Wedding Belles",
      genre: "Adventure",
      cast: "Al Pacino",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Harum Scarum",
      genre: "Fantasy",
      cast: "Brad Pitt",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bugsy Malone",
      genre: "Sci-fi",
      cast: "Michael Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Copenhagen",
      genre: "Adventure",
      cast: "Mel Gibson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Marriage Material",
      genre: "Fantasy",
      cast: "Jamie Foxx",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Battle for Marjah, The",
      genre: "Horror",
      cast: "Gene Hackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Sea Inside, The (Mar adentro)",
      genre: "Drama",
      cast: "Marlon Brando",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Orca: The Killer Whale",
      genre: "Fantasy",
      cast: "Benicio Del Toro",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Collection, The",
      genre: "Comedy",
      cast: "Kirk Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Everybody Wins",
      genre: "Horror",
      cast: "Jeff Bridges",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Deck the Halls",
      genre: "Adventure",
      cast: "Gene Hackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Run If You Can",
      genre: "Drama",
      cast: "Hugh Jackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Scalphunters, The",
      genre: "Thriller",
      cast: "Christian Bale",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "The Appointments of Dennis Jennings",
      genre: "Romance",
      cast: "Jeff Bridges",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bikini Beach",
      genre: "Comedy",
      cast: "Al Pacino",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Suspect",
      genre: "Comedy",
      cast: "Nicolas Cage",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dead End",
      genre: "Adventure",
      cast: "Anthony Hopkins",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Carts of Darkness",
      genre: "Comedy",
      cast: "Harrison Ford",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "So Fine",
      genre: "Action",
      cast: "Gene Hackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Neil Young: Human Highway",
      genre: "Fantasy",
      cast: "Martin Sheen",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Short Term 12",
      genre: "Adventure",
      cast: "Christoph Waltz",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Trailer Park Boys: Live at the North Pole",
      genre: "Crime",
      cast: "Jack Nicholson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Look at Me (Comme une image)",
      genre: "Adventure",
      cast: "Al Pacino",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Excuse My Dust",
      genre: "Drama",
      cast: "Daniel Day-Lewis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Poseidon Adventure, The ",
      genre: "Romance",
      cast: "Mel Gibson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "First Monday in October",
      genre: "Crime",
      cast: "Gene Hackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Floating Skyscrapers",
      genre: "Action",
      cast: "Kevin Spacey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Story of Esther Costello, The",
      genre: "Sci-fi",
      cast: "Hugh Jackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bird of Paradise",
      genre: "Sci-fi",
      cast: "Nicolas Cage",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dirt",
      genre: "Adventure",
      cast: "Kirk Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Madagascar: Escape 2 Africa",
      genre: "Comedy",
      cast: "Kevin Spacey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Cage aux Folles, La",
      genre: "Thriller",
      cast: "Leonardo DiCaprio",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Drummer-Crab (Le Crabe-Tambour)",
      genre: "Fantasy",
      cast: "Anthony Hopkins",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dangerous Davies: The Last Detective",
      genre: "Crime",
      cast: "Michael Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Coast of Death",
      genre: "Thriller",
      cast: "Hugh Jackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "¡Alambrista! (Illegal, The)",
      genre: "Thriller",
      cast: "Gene Hackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Love in Bloom",
      genre: "Comedy",
      cast: "Marlon Brando",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Falling in Love",
      genre: "Comedy",
      cast: "Kirk Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Moving McAllister",
      genre: "Adventure",
      cast: "Gene Hackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Diary of a Cannibal",
      genre: "Crime",
      cast: "Jeff Bridges",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "The Sign of Four: Sherlock Holmes' Greatest Case",
      genre: "Fantasy",
      cast: "Jeff Bridges",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Escape from Dartmoor",
      genre: "Fantasy",
      cast: "Marlon Brando",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Sommer der Gaukler, Der",
      genre: "Comedy",
      cast: "Michael Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Night to Remember, A",
      genre: "Sci-fi",
      cast: "Marlon Brando",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Fright Night",
      genre: "Romance",
      cast: "Heath Ledger",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Santa Sangre",
      genre: "Adventure",
      cast: "Javier Bardem",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Masquerade",
      genre: "Crime",
      cast: "Jamie Foxx",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Saint Ange (House of Voices)",
      genre: "Adventure",
      cast: "Christoph Waltz",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Montana",
      genre: "Horror",
      cast: "Clint Eastwood",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Protocol",
      genre: "Drama",
      cast: "Matt Damon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Omen, The",
      genre: "Thriller",
      cast: "Matthew McConaughey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Triad Underworld (Gong wu) (Jiang Hu)",
      genre: "Comedy",
      cast: "Clint Eastwood",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Trio, The (Trio, Das)",
      genre: "Drama",
      cast: "Martin Sheen",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Black Pond",
      genre: "Horror",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Secretary",
      genre: "Sci-fi",
      cast: "Edward Norton",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Class",
      genre: "Crime",
      cast: "Harrison Ford",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Nekromantik 2",
      genre: "Thriller",
      cast: "Christoph Waltz",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Bridegroom",
      genre: "Crime",
      cast: "Heath Ledger",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Cuba",
      genre: "Drama",
      cast: "Anthony Hopkins",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "With Six You Get Eggroll",
      genre: "Adventure",
      cast: "Heath Ledger",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Gentlemen",
      genre: "Romance",
      cast: "Brad Pitt",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Cold Creek Manor",
      genre: "Crime",
      cast: "Nicolas Cage",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Mascara",
      genre: "Sci-fi",
      cast: "Jeff Bridges",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Tür, Die (Door, The)",
      genre: "Fantasy",
      cast: "Benicio Del Toro",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Dream a Little Dream",
      genre: "Drama",
      cast: "Edward Norton",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Buddy Boy",
      genre: "Action",
      cast: "Michael Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Exorcismus",
      genre: "Crime",
      cast: "Denzel Washington",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Legacy, The",
      genre: "Action",
      cast: "Marlon Brando",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Isn't She Great?",
      genre: "Thriller",
      cast: "Matt Damon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "At Midnight I'll Take Your Soul (À Meia-Noite Levarei Sua Alma)",
      genre: "Fantasy",
      cast: "Johnny Depp",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Derailed",
      genre: "Adventure",
      cast: "Al Pacino",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Acacia",
      genre: "Sci-fi",
      cast: "Kevin Spacey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Blackballed: The Bobby Dukes Story",
      genre: "Romance",
      cast: "Brad Pitt",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Throw Away Your Books, Rally in the Streets",
      genre: "Romance",
      cast: "Jack Nicholson",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Tell",
      genre: "Comedy",
      cast: "Kevin Spacey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Black Cadillac",
      genre: "Sci-fi",
      cast: "Christoph Waltz",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "DOA: Dead or Alive",
      genre: "Sci-fi",
      cast: "Harrison Ford",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Jason Goes to Hell: The Final Friday",
      genre: "Romance",
      cast: "Kirk Douglas",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Papa",
      genre: "Drama",
      cast: "John Travolta",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Escape Me Never",
      genre: "Comedy",
      cast: "Matthew McConaughey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Love and Death on Long Island",
      genre: "Action",
      cast: "Kevin Spacey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Curse of the Blair Witch",
      genre: "Comedy",
      cast: "Brad Pitt",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "General Died at Dawn, The",
      genre: "Horror",
      cast: "Matthew McConaughey",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Up in the Air",
      genre: "Action",
      cast: "Javier Bardem",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Itty Bitty Titty Committee",
      genre: "Sci-fi",
      cast: "Gene Hackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Swordfish",
      genre: "Comedy",
      cast: "Christian Bale",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Jönssonligan spelar högt",
      genre: "Thriller",
      cast: "Daniel Day-Lewis",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Stalingrad",
      genre: "Crime",
      cast: "Matt Damon",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Boot Camp",
      genre: "Crime",
      cast: "Harrison Ford",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Endangered Species",
      genre: "Adventure",
      cast: "Hugh Jackman",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Red White & Blue",
      genre: "Thriller",
      cast: "Denzel Washington",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('movies', null, {});

  }
};
