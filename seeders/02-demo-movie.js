'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('movies', [{
      id: 1,
      title: "Last Night",
      genre: "Drama|Romance",
      cast: [
        "Leonardo DiCaprio",
        "Jeff Bridges",
        "Anthony Hopkins"
      ],
      createdAt: "2021-10-10T01:32:03Z",
      updatedAt: "2021-02-12T11:50:40Z"
    }, {
      id: 2,
      title: "Mr. Bean's Holiday",
      genre: "Comedy",
      cast: [
        "Anthony Hopkins",
        "Denzel Washington",
        "Liam Neeson"
      ],
      createdAt: "2021-05-01T17:59:06Z",
      updatedAt: "2020-12-25T21:46:30Z"
    }, {
      id: 3,
      title: "Undefeated, The",
      genre: "Documentary",
      cast: [
        "Kevin Spacey",
        "Daniel Day-Lewis",
        "Matthew McConaughey"
      ],
      createdAt: "2021-07-24T20:25:34Z",
      updatedAt: "2021-09-09T15:55:36Z"
    }, {
      id: 4,
      title: "Trojan War",
      genre: "Comedy",
      cast: [
        "Martin Sheen",
        "Denzel Washington",
        "Leonardo DiCaprio"
      ],
      createdAt: "2021-02-11T05:28:38Z",
      updatedAt: "2020-11-22T02:22:52Z"
    }, {
      id: 5,
      title: "Unknown Known, The",
      genre: "Documentary",
      cast: [
        "Marlon Brando",
        "Leonardo DiCaprio",
        "Jamie Foxx"
      ],
      createdAt: "2021-10-20T19:12:03Z",
      updatedAt: "2021-03-06T08:51:23Z"
    }, {
      id: 6,
      title: "Hot Fuzz",
      genre: "Action|Comedy|Crime|Mystery",
      cast: [
        "Mel Gibson",
        "Martin Sheen",
        "Harrison Ford"
      ],
      createdAt: "2021-10-10T04:25:03Z",
      updatedAt: "2021-08-02T15:46:15Z"
    }, {
      id: 7,
      title: "Cooler, The",
      genre: "Comedy|Drama|Romance",
      cast: [
        "Denzel Washington",
        "Heath Ledger",
        "Jamie Foxx"
      ],
      createdAt: "2020-11-21T08:06:15Z",
      updatedAt: "2021-06-02T20:49:55Z"
    }, {
      id: 8,
      title: "Interview with a Hitman",
      genre: "Action|Thriller",
      cast: [
        "Harrison Ford",
        "Benicio Del Toro",
        "Christian Bale"
      ],
      createdAt: "2020-12-30T02:04:47Z",
      updatedAt: "2020-12-31T01:46:07Z"
    }, {
      id: 9,
      title: "You've Got Mail",
      genre: "Comedy|Romance",
      cast: [
        "Benicio Del Toro",
        "Leonardo DiCaprio",
        "Jack Nicholson"
      ],
      createdAt: "2021-03-22T19:59:34Z",
      updatedAt: "2021-03-06T22:34:05Z"
    }, {
      id: 10,
      title: "Angels Fall",
      genre: "Drama|Romance|Thriller",
      cast: [
        "Harrison Ford",
        "Matthew McConaughey",
        "Johnny Depp"
      ],
      createdAt: "2020-12-18T23:57:53Z",
      updatedAt: "2021-01-07T11:40:45Z"
    }, {
      id: 11,
      title: "Lies and Illusions",
      genre: "Action|Comedy|Thriller",
      cast: [
        "Benicio Del Toro",
        "Harrison Ford",
        "Kirk Douglas"
      ],
      createdAt: "2021-03-18T05:21:39Z",
      updatedAt: "2021-10-05T07:24:35Z"
    }, {
      id: 12,
      title: "Citizen Ruth",
      genre: "Comedy|Drama",
      cast: [
        "Brad Pitt",
        "Jeff Bridges",
        "Nicolas Cage"
      ],
      createdAt: "2021-02-05T04:45:49Z",
      updatedAt: "2021-06-13T05:02:12Z"
    }, {
      id: 13,
      title: "Mountains of the Moon",
      genre: "Adventure",
      cast: [
        "John Travolta",
        "Liam Neeson",
        "Al Pacino"
      ],
      createdAt: "2021-10-06T18:28:47Z",
      updatedAt: "2021-04-04T12:47:28Z"
    }, {
      id: 14,
      title: "We Still Kill the Old Way",
      genre: "Crime",
      cast: [
        "Daniel Day-Lewis",
        "Jeff Bridges",
        "Liam Neeson"
      ],
      createdAt: "2021-05-21T03:40:46Z",
      updatedAt: "2021-06-15T14:29:16Z"
    }, {
      id: 15,
      title: "What to Expect When You're Expecting",
      genre: "Comedy|Drama|Romance",
      cast: [
        "Kirk Douglas",
        "Daniel Day-Lewis",
        "Al Pacino"
      ],
      createdAt: "2021-01-11T18:04:26Z",
      updatedAt: "2021-10-02T05:45:19Z"
    }, {
      id: 16,
      title: "Night They Raided Minsky's, The (Night They Invented Striptease, The)",
      genre: "Comedy",
      cast: [
        "Matt Damon",
        "Martin Sheen",
        "Marlon Brando"
      ],
      createdAt: "2020-12-06T15:02:09Z",
      updatedAt: "2021-06-18T21:00:06Z"
    }, {
      id: 17,
      title: "Blues in the Night",
      genre: "Drama|Film-Noir|Musical",
      cast: [
        "Kevin Spacey",
        "Kirk Douglas",
        "Jamie Foxx"
      ],
      createdAt: "2020-12-03T22:40:36Z",
      updatedAt: "2021-04-30T06:16:53Z"
    }, {
      id: 18,
      title: "Two Much",
      genre: "Comedy|Romance",
      cast: [
        "Denzel Washington",
        "Gene Hackman",
        "Heath Ledger"
      ],
      createdAt: "2020-11-04T15:42:16Z",
      updatedAt: "2020-12-09T13:42:39Z"
    }, {
      id: 19,
      title: "Sparks",
      genre: "Action|Fantasy|Mystery|Sci-Fi|Thriller",
      cast: [
        "Kirk Douglas",
        "Martin Sheen",
        "Hugh Jackman"
      ],
      createdAt: "2021-02-07T21:01:46Z",
      updatedAt: "2021-06-26T13:40:16Z"
    }, {
      id: 20,
      title: "Doll, The (Lalka)",
      genre: "Drama|Romance",
      cast: [
        "Clint Eastwood",
        "Denzel Washington",
        "Jeff Bridges"
      ],
      createdAt: "2021-06-19T18:49:41Z",
      updatedAt: "2021-07-02T23:56:52Z"
    }, {
      id: 21,
      title: "The Dust Bowl",
      genre: "Documentary",
      cast: [
        "Marlon Brando",
        "Michael Douglas",
        "Leonardo DiCaprio"
      ],
      createdAt: "2021-08-30T02:48:00Z",
      updatedAt: "2020-12-20T08:53:26Z"
    }, {
      id: 22,
      title: "April Showers",
      genre: "Drama",
      cast: [
        "Anthony Hopkins",
        "Mel Gibson",
        "Johnny Depp"
      ],
      createdAt: "2021-08-02T14:30:47Z",
      updatedAt: "2020-11-30T05:03:56Z"
    }, {
      id: 23,
      title: "Lola and Billy the Kid (Lola + Bilidikid)",
      genre: "Drama",
      cast: [
        "Kevin Spacey",
        "Johnny Depp",
        "Kevin Spacey"
      ],
      createdAt: "2021-05-30T20:35:24Z",
      updatedAt: "2021-01-02T23:52:31Z"
    }, {
      id: 24,
      title: "Bad 25",
      genre: "Documentary",
      cast: [
        "Brad Pitt",
        "Jeff Bridges",
        "Anthony Hopkins"
      ],
      createdAt: "2021-03-27T14:32:40Z",
      updatedAt: "2021-10-04T06:34:57Z"
    }, {
      id: 25,
      title: "The Secret of Convict Lake",
      genre: "Western",
      cast: [
        "Benicio Del Toro",
        "Marlon Brando",
        "Javier Bardem"
      ],
      createdAt: "2020-12-28T21:29:09Z",
      updatedAt: "2021-02-24T02:13:20Z"
    }, {
      id: 26,
      title: "Zoot Suit",
      genre: "Drama|Musical",
      cast: [
        "Javier Bardem",
        "Al Pacino",
        "Martin Sheen"
      ],
      createdAt: "2021-03-28T01:00:21Z",
      updatedAt: "2021-06-21T21:21:22Z"
    }, {
      id: 27,
      title: "Women Without Men (Zanan-e bedun-e mardan)",
      genre: "Drama",
      cast: [
        "Benicio Del Toro",
        "Mel Gibson",
        "Jack Nicholson"
      ],
      createdAt: "2021-05-23T12:17:17Z",
      updatedAt: "2021-10-19T04:44:25Z"
    }, {
      id: 28,
      title: "Immensee",
      genre: "Drama",
      cast: [
        "Denzel Washington",
        "Heath Ledger",
        "Javier Bardem"
      ],
      createdAt: "2020-11-13T15:34:30Z",
      updatedAt: "2021-05-01T16:49:12Z"
    }, {
      id: 29,
      title: "Asterix and the Gauls (Astérix le Gaulois)",
      genre: "Action|Adventure|Animation|Children|Comedy",
      cast: [
        "Matt Damon",
        "Christian Bale",
        "Jeff Bridges"
      ],
      createdAt: "2021-10-06T09:43:42Z",
      updatedAt: "2021-04-28T13:42:21Z"
    }, {
      id: 30,
      title: "Daughter of Dr. Jeckyll",
      genre: "Horror",
      cast: [
        "Christian Bale",
        "Daniel Day-Lewis",
        "Johnny Depp"
      ],
      createdAt: "2021-10-09T17:34:02Z",
      updatedAt: "2021-03-09T14:55:28Z"
    }, {
      id: 31,
      title: "Secrets & Lies",
      genre: "Drama",
      cast: [
        "Brad Pitt",
        "Daniel Day-Lewis",
        "Liam Neeson"
      ],
      createdAt: "2021-03-04T01:42:21Z",
      updatedAt: "2021-01-24T11:15:18Z"
    }, {
      id: 32,
      title: "Edge of Darkness",
      genre: "Drama|War",
      cast: [
        "Matt Damon",
        "Daniel Day-Lewis",
        "Anthony Hopkins"
      ],
      createdAt: "2021-02-22T04:44:49Z",
      updatedAt: "2020-10-30T07:01:40Z"
    }, {
      id: 33,
      title: "The Police Serve the Citizens?",
      genre: "Action|Crime",
      cast: [
        "Mel Gibson",
        "Javier Bardem",
        "Kevin Spacey"
      ],
      createdAt: "2021-07-31T15:37:45Z",
      updatedAt: "2020-12-29T17:09:12Z"
    }, {
      id: 34,
      title: "Power and Terror: Noam Chomsky in Our Times",
      genre: "Documentary",
      cast: [
        "Jeff Bridges",
        "Mel Gibson",
        "Jack Nicholson"
      ],
      createdAt: "2021-02-11T08:45:44Z",
      updatedAt: "2021-08-13T05:38:29Z"
    }, {
      id: 35,
      title: "Manchurian Candidate, The",
      genre: "Thriller",
      cast: [
        "Johnny Depp",
        "Christoph Waltz",
        "Liam Neeson"
      ],
      createdAt: "2021-01-21T04:29:08Z",
      updatedAt: "2020-12-16T17:33:02Z"
    }, {
      id: 36,
      title: "Puff, Puff, Pass",
      genre: "Comedy",
      cast: [
        "Brad Pitt",
        "Christian Bale",
        "Javier Bardem"
      ],
      createdAt: "2021-04-30T15:54:28Z",
      updatedAt: "2021-10-11T09:31:53Z"
    }, {
      id: 37,
      title: "Scream 3",
      genre: "Comedy|Horror|Mystery|Thriller",
      cast: [
        "Jack Nicholson",
        "Harrison Ford",
        "Michael Douglas"
      ],
      createdAt: "2021-09-26T22:01:42Z",
      updatedAt: "2020-10-31T17:17:08Z"
    }, {
      id: 38,
      title: "Plumm Summer, A",
      genre: "Adventure",
      cast: [
        "Gene Hackman",
        "Denzel Washington",
        "Benicio Del Toro"
      ],
      createdAt: "2021-02-05T10:21:50Z",
      updatedAt: "2021-08-10T13:11:04Z"
    }, {
      id: 39,
      title: "Officer's Ward (chambre des officiers, La)",
      genre: "Drama|Romance|War",
      cast: [
        "Daniel Day-Lewis",
        "Hugh Jackman",
        "Daniel Day-Lewis"
      ],
      createdAt: "2021-08-27T17:32:50Z",
      updatedAt: "2020-11-10T22:56:11Z"
    }, {
      id: 40,
      title: "3 Ninjas Knuckle Up",
      genre: "Action|Children",
      cast: [
        "Jeff Bridges",
        "Hugh Jackman",
        "Joaquin Phoenix"
      ],
      createdAt: "2021-10-09T23:52:16Z",
      updatedAt: "2021-08-31T14:49:45Z"
    }, {
      id: 41,
      title: "Walk Hard: The Dewey Cox Story",
      genre: "Comedy|Musical",
      cast: [
        "Denzel Washington",
        "Brad Pitt",
        "Jeff Bridges"
      ],
      createdAt: "2021-08-31T05:10:43Z",
      updatedAt: "2021-08-13T17:09:35Z"
    }, {
      id: 42,
      title: "Suburbans, The",
      genre: "Drama",
      cast: [
        "Leonardo DiCaprio",
        "Jamie Foxx",
        "Jack Nicholson"
      ],
      createdAt: "2021-10-08T08:37:45Z",
      updatedAt: "2021-10-10T20:56:58Z"
    }, {
      id: 43,
      title: "What Price Glory",
      genre: "Drama|War",
      cast: [
        "Martin Sheen",
        "Javier Bardem",
        "Clint Eastwood"
      ],
      createdAt: "2021-03-15T18:42:14Z",
      updatedAt: "2020-11-06T23:24:02Z"
    }, {
      id: 44,
      title: "Pine Flat",
      genre: "Drama",
      cast: [
        "Liam Neeson",
        "Martin Sheen",
        "Clint Eastwood"
      ],
      createdAt: "2021-05-02T04:55:01Z",
      updatedAt: "2021-08-29T09:58:00Z"
    }, {
      id: 45,
      title: "Loose Cannons (Mine vaganti)",
      genre: "Comedy|Drama",
      cast: [
        "Joaquin Phoenix",
        "Mel Gibson",
        "Kirk Douglas"
      ],
      createdAt: "2021-02-18T03:12:56Z",
      updatedAt: "2021-06-06T04:38:48Z"
    }, {
      id: 46,
      title: "Last Bolshevik, The (Tombeau d'Alexandre, Le)",
      genre: "Documentary",
      cast: [
        "Daniel Day-Lewis",
        "Harrison Ford",
        "Al Pacino"
      ],
      createdAt: "2021-08-04T04:25:39Z",
      updatedAt: "2021-09-22T23:20:57Z"
    }, {
      id: 47,
      title: "Safe",
      genre: "Thriller",
      cast: [
        "Marlon Brando",
        "Jack Nicholson",
        "Denzel Washington"
      ],
      createdAt: "2021-06-11T03:29:37Z",
      updatedAt: "2021-06-19T20:38:18Z"
    }, {
      id: 48,
      title: "I Live My Life",
      genre: "Comedy|Romance",
      cast: [
        "Clint Eastwood",
        "Matt Damon",
        "Kirk Douglas"
      ],
      createdAt: "2021-09-14T12:16:20Z",
      updatedAt: "2021-03-23T07:27:12Z"
    }, {
      id: 49,
      title: "Destroyer",
      genre: "Adventure|Drama|War",
      cast: [
        "Clint Eastwood",
        "Matt Damon",
        "Martin Sheen"
      ],
      createdAt: "2020-12-04T10:21:43Z",
      updatedAt: "2021-07-18T13:27:44Z"
    }, {
      id: 50,
      title: "And Then There Were None",
      genre: "Crime|Mystery",
      cast: [
        "Al Pacino",
        "Anthony Hopkins",
        "Jeff Bridges"
      ],
      createdAt: "2020-12-25T10:16:01Z",
      updatedAt: "2021-06-29T17:02:40Z"
    }, {
      id: 51,
      title: "Love Is Colder Than Death (Liebe ist kälter als der Tod)",
      genre: "Comedy|Crime|Romance",
      cast: [
        "Christoph Waltz",
        "Benicio Del Toro",
        "Hugh Jackman"
      ],
      createdAt: "2021-02-27T17:19:17Z",
      updatedAt: "2021-10-14T18:10:00Z"
    }, {
      id: 52,
      title: "Singing Nun, The",
      genre: "Comedy|Drama",
      cast: [
        "Martin Sheen",
        "Michael Douglas",
        "Denzel Washington"
      ],
      createdAt: "2020-12-12T22:56:25Z",
      updatedAt: "2021-02-03T03:36:38Z"
    }, {
      id: 53,
      title: "Temptress Moon (Feng Yue)",
      genre: "Romance",
      cast: [
        "Christoph Waltz",
        "Marlon Brando",
        "Clint Eastwood"
      ],
      createdAt: "2021-07-27T19:50:26Z",
      updatedAt: "2020-11-13T19:38:11Z"
    }, {
      id: 54,
      title: "The Returned",
      genre: "Drama|Horror|Thriller",
      cast: [
        "Clint Eastwood",
        "John Travolta",
        "Martin Sheen"
      ],
      createdAt: "2021-03-30T00:53:34Z",
      updatedAt: "2020-11-07T18:43:24Z"
    }, {
      id: 55,
      title: "Lonely Man, The",
      genre: "Western",
      cast: [
        "Jack Nicholson",
        "Javier Bardem",
        "Heath Ledger"
      ],
      createdAt: "2020-12-03T07:48:13Z",
      updatedAt: "2021-10-23T08:55:32Z"
    }, {
      id: 56,
      title: "Open Range",
      genre: "Western",
      cast: [
        "Leonardo DiCaprio",
        "Daniel Day-Lewis",
        "Christian Bale"
      ],
      createdAt: "2020-12-14T02:14:25Z",
      updatedAt: "2020-12-07T12:19:52Z"
    }, {
      id: 57,
      title: "Mr. Holland's Opus",
      genre: "Drama",
      cast: [
        "Matthew McConaughey",
        "Nicolas Cage",
        "Marlon Brando"
      ],
      createdAt: "2021-01-21T18:12:44Z",
      updatedAt: "2020-11-13T11:54:30Z"
    }, {
      id: 58,
      title: "Ghost",
      genre: "Comedy|Drama|Fantasy|Romance|Thriller",
      cast: [
        "Anthony Hopkins",
        "Martin Sheen",
        "Leonardo DiCaprio"
      ],
      createdAt: "2020-11-17T20:48:21Z",
      updatedAt: "2021-09-02T13:25:33Z"
    }, {
      id: 59,
      title: "Combien Tu M'aimes? (How Much Do You Love Me?)",
      genre: "Comedy|Romance",
      cast: [
        "Liam Neeson",
        "Leonardo DiCaprio",
        "Anthony Hopkins"
      ],
      createdAt: "2021-08-14T05:13:59Z",
      updatedAt: "2021-07-02T10:00:34Z"
    }, {
      id: 60,
      title: "Quiet Duel, The (Shizukanaru ketto)",
      genre: "Drama",
      cast: [
        "Al Pacino",
        "Anthony Hopkins",
        "Brad Pitt"
      ],
      createdAt: "2021-04-29T04:36:22Z",
      updatedAt: "2021-05-05T01:38:06Z"
    }, {
      id: 61,
      title: "First Deadly Sin, The",
      genre: "Thriller",
      cast: [
        "Matt Damon",
        "Marlon Brando",
        "Harrison Ford"
      ],
      createdAt: "2021-01-31T01:23:04Z",
      updatedAt: "2021-06-11T18:05:20Z"
    }, {
      id: 62,
      title: "Bad News Bears Go to Japan, The",
      genre: "Comedy",
      cast: [
        "Christian Bale",
        "Christoph Waltz",
        "Christian Bale"
      ],
      createdAt: "2020-12-06T23:41:29Z",
      updatedAt: "2021-02-24T10:36:34Z"
    }, {
      id: 63,
      title: "Witness",
      genre: "Drama|Romance|Thriller",
      cast: [
        "Al Pacino",
        "Daniel Day-Lewis",
        "Denzel Washington"
      ],
      createdAt: "2021-02-16T19:30:13Z",
      updatedAt: "2021-05-13T02:26:16Z"
    }, {
      id: 64,
      title: "Tales from the Crypt Presents: Demon Knight",
      genre: "Horror|Thriller",
      cast: [
        "Benicio Del Toro",
        "Kevin Spacey",
        "Joaquin Phoenix"
      ],
      createdAt: "2020-11-21T12:22:14Z",
      updatedAt: "2021-07-27T03:07:13Z"
    }, {
      id: 65,
      title: "Saving Private Ryan",
      genre: "Action|Drama|War",
      cast: [
        "Johnny Depp",
        "Brad Pitt",
        "Al Pacino"
      ],
      createdAt: "2021-05-02T17:57:09Z",
      updatedAt: "2021-10-22T07:24:46Z"
    }, {
      id: 66,
      title: "Chasing Beauty",
      genre: "Documentary",
      cast: [
        "Denzel Washington",
        "Javier Bardem",
        "Christian Bale"
      ],
      createdAt: "2021-02-26T19:37:04Z",
      updatedAt: "2021-04-18T11:51:56Z"
    }, {
      id: 67,
      title: "Macario",
      genre: "Drama|Fantasy|Mystery",
      cast: [
        "Marlon Brando",
        "Heath Ledger",
        "Johnny Depp"
      ],
      createdAt: "2021-07-20T04:28:27Z",
      updatedAt: "2021-04-23T23:17:51Z"
    }, {
      id: 68,
      title: "Anthropophagus: The Grim Reaper (Antropophagus) (Man Beast) (Savage Island, The) (Zombie's Rage, The)",
      genre: "Horror",
      cast: [
        "Liam Neeson",
        "Heath Ledger",
        "Matt Damon"
      ],
      createdAt: "2021-08-20T20:17:44Z",
      updatedAt: "2020-11-28T17:45:59Z"
    }, {
      id: 69,
      title: "Diaries of Vaslav Nijinsky, The",
      genre: "Documentary|Drama",
      cast: [
        "Brad Pitt",
        "Javier Bardem",
        "Jeff Bridges"
      ],
      createdAt: "2021-04-28T17:18:48Z",
      updatedAt: "2021-07-27T11:00:10Z"
    }, {
      id: 70,
      title: "Honky Tonk Freeway",
      genre: "Comedy",
      cast: [
        "Harrison Ford",
        "Joaquin Phoenix",
        "Mel Gibson"
      ],
      createdAt: "2021-02-23T03:50:23Z",
      updatedAt: "2020-11-24T10:17:00Z"
    }, {
      id: 71,
      title: "The Wayward Girl",
      genre: "Drama",
      cast: [
        "Jamie Foxx",
        "Edward Norton",
        "Matt Damon"
      ],
      createdAt: "2021-06-08T19:45:15Z",
      updatedAt: "2021-07-11T06:52:36Z"
    }, {
      id: 72,
      title: "Reds",
      genre: "Drama|Romance",
      cast: [
        "Clint Eastwood",
        "Christoph Waltz",
        "Heath Ledger"
      ],
      createdAt: "2021-05-12T03:13:01Z",
      updatedAt: "2020-12-04T11:09:59Z"
    }, {
      id: 73,
      title: "Shout",
      genre: "Drama",
      cast: [
        "Clint Eastwood",
        "Johnny Depp",
        "Brad Pitt"
      ],
      createdAt: "2021-10-15T02:15:11Z",
      updatedAt: "2021-01-12T04:52:09Z"
    }, {
      id: 74,
      title: "After the Wedding (Efter brylluppet)",
      genre: "Drama",
      cast: [
        "Edward Norton",
        "Joaquin Phoenix",
        "Clint Eastwood"
      ],
      createdAt: "2021-04-21T15:29:14Z",
      updatedAt: "2021-09-14T12:10:22Z"
    }, {
      id: 75,
      title: "Silent Action",
      genre: "Action|Crime|Drama",
      cast: [
        "Javier Bardem",
        "Denzel Washington",
        "Marlon Brando"
      ],
      createdAt: "2020-11-20T01:43:56Z",
      updatedAt: "2021-03-29T03:25:34Z"
    }, {
      id: 76,
      title: "Primary Colors",
      genre: "Comedy|Drama",
      cast: [
        "Kevin Spacey",
        "Daniel Day-Lewis",
        "Christian Bale"
      ],
      createdAt: "2021-02-17T22:11:43Z",
      updatedAt: "2021-10-20T09:23:13Z"
    }, {
      id: 77,
      title: "Never Back Down",
      genre: "Action",
      cast: [
        "Kirk Douglas",
        "Mel Gibson",
        "Leonardo DiCaprio"
      ],
      createdAt: "2021-08-07T22:53:10Z",
      updatedAt: "2021-08-27T04:00:45Z"
    }, {
      id: 78,
      title: "Zatoichi",
      genre: "Action|Drama",
      cast: [
        "Brad Pitt",
        "John Travolta",
        "Anthony Hopkins"
      ],
      createdAt: "2021-01-16T10:38:08Z",
      updatedAt: "2020-11-23T00:54:38Z"
    }, {
      id: 79,
      title: "Stoning of Soraya M., The",
      genre: "Crime|Drama",
      cast: [
        "Javier Bardem",
        "Martin Sheen",
        "Kirk Douglas"
      ],
      createdAt: "2021-09-14T10:45:46Z",
      updatedAt: "2021-04-15T13:37:08Z"
    }, {
      id: 80,
      title: "Late Bloomers",
      genre: "Comedy",
      cast: [
        "Nicolas Cage",
        "Jack Nicholson",
        "Brad Pitt"
      ],
      createdAt: "2020-11-26T02:49:39Z",
      updatedAt: "2021-04-08T15:16:02Z"
    }, {
      id: 81,
      title: "It's a Great Feeling",
      genre: "Comedy",
      cast: [
        "Martin Sheen",
        "Gene Hackman",
        "Javier Bardem"
      ],
      createdAt: "2021-03-12T14:01:50Z",
      updatedAt: "2021-08-03T19:14:05Z"
    }, {
      id: 82,
      title: "BloodRayne",
      genre: "Action|Fantasy",
      cast: [
        "Harrison Ford",
        "Liam Neeson",
        "Joaquin Phoenix"
      ],
      createdAt: "2021-05-25T04:15:48Z",
      updatedAt: "2020-11-16T23:12:25Z"
    }, {
      id: 83,
      title: "South Shaolin Master, The (Nan quan wang)",
      genre: "Action|Adventure|Drama",
      cast: [
        "Joaquin Phoenix",
        "Matthew McConaughey",
        "Clint Eastwood"
      ],
      createdAt: "2020-11-12T01:28:33Z",
      updatedAt: "2021-09-26T23:50:57Z"
    }, {
      id: 84,
      title: "Chouchou",
      genre: "Comedy",
      cast: [
        "Martin Sheen",
        "Heath Ledger",
        "Johnny Depp"
      ],
      createdAt: "2021-03-04T17:32:54Z",
      updatedAt: "2021-09-23T04:51:12Z"
    }, {
      id: 85,
      title: "Design for Living",
      genre: "Comedy|Romance",
      cast: [
        "Denzel Washington",
        "Daniel Day-Lewis",
        "Liam Neeson"
      ],
      createdAt: "2020-11-12T10:54:18Z",
      updatedAt: "2020-11-06T01:01:43Z"
    }, {
      id: 86,
      title: "Lost World: Jurassic Park, The",
      genre: "Action|Adventure|Sci-Fi|Thriller",
      cast: [
        "Jack Nicholson",
        "Matthew McConaughey",
        "Denzel Washington"
      ],
      createdAt: "2021-07-12T20:41:09Z",
      updatedAt: "2021-08-21T08:04:26Z"
    }, {
      id: 87,
      title: "Alvin and the Chipmunks",
      genre: "Children|Comedy",
      cast: [
        "Johnny Depp",
        "Christian Bale",
        "Martin Sheen"
      ],
      createdAt: "2021-01-07T03:19:26Z",
      updatedAt: "2021-01-10T06:56:54Z"
    }, {
      id: 88,
      title: "Making Plans for Lena (Non ma fille, tu n'iras pas danser)",
      genre: "Drama",
      cast: [
        "Nicolas Cage",
        "John Travolta",
        "Harrison Ford"
      ],
      createdAt: "2021-05-05T04:42:35Z",
      updatedAt: "2021-04-02T18:29:06Z"
    }, {
      id: 89,
      title: "Perils of Gwendoline in the Land of the Yik Yak, The",
      genre: "Adventure|Romance",
      cast: [
        "Martin Sheen",
        "Denzel Washington",
        "Joaquin Phoenix"
      ],
      createdAt: "2021-08-19T05:29:56Z",
      updatedAt: "2020-11-05T21:13:24Z"
    }, {
      id: 90,
      title: "Sleeping Dogs Lie (a.k.a. Stay)",
      genre: "Comedy|Drama|Romance",
      cast: [
        "Mel Gibson",
        "Denzel Washington",
        "Clint Eastwood"
      ],
      createdAt: "2021-07-15T12:25:19Z",
      updatedAt: "2021-08-13T19:10:45Z"
    }, {
      id: 91,
      title: "Armour of God (Long xiong hu di)",
      genre: "Action|Adventure|Comedy",
      cast: [
        "Joaquin Phoenix",
        "Brad Pitt",
        "Kirk Douglas"
      ],
      createdAt: "2021-04-04T03:59:45Z",
      updatedAt: "2021-10-21T19:05:43Z"
    }, {
      id: 92,
      title: "Megaforce",
      genre: "Action|Sci-Fi",
      cast: [
        "Nicolas Cage",
        "Hugh Jackman",
        "Johnny Depp"
      ],
      createdAt: "2021-05-08T09:50:49Z",
      updatedAt: "2021-05-31T19:19:44Z"
    }, {
      id: 93,
      title: "Slaying the Badger",
      genre: "Documentary",
      cast: [
        "Hugh Jackman",
        "Harrison Ford",
        "Jack Nicholson"
      ],
      createdAt: "2021-07-05T05:28:17Z",
      updatedAt: "2020-12-09T06:10:52Z"
    }, {
      id: 94,
      title: "It Is Written in the Stars, Inspector Palmu (Tähdet kertovat, komisario Palmu)",
      genre: "Crime|Mystery",
      cast: [
        "Heath Ledger",
        "Liam Neeson",
        "Anthony Hopkins"
      ],
      createdAt: "2020-11-02T19:51:28Z",
      updatedAt: "2020-12-09T08:46:35Z"
    }, {
      id: 95,
      title: "Duck, You Sucker (a.k.a. Fistful of Dynamite, A) (Giù la testa)",
      genre: "Action|Adventure|War|Western",
      cast: [
        "Liam Neeson",
        "Christoph Waltz",
        "Mel Gibson"
      ],
      createdAt: "2021-07-27T02:16:10Z",
      updatedAt: "2021-03-09T11:21:55Z"
    }, {
      id: 96,
      title: "Roman de gare",
      genre: "Drama",
      cast: [
        "Daniel Day-Lewis",
        "Javier Bardem",
        "Denzel Washington"
      ],
      createdAt: "2021-03-18T11:15:10Z",
      updatedAt: "2021-05-15T17:30:05Z"
    }, {
      id: 97,
      title: "Battle of the Sexes, The",
      genre: "Comedy",
      cast: [
        "Hugh Jackman",
        "Christian Bale",
        "Harrison Ford"
      ],
      createdAt: "2021-08-31T05:59:25Z",
      updatedAt: "2020-12-27T15:57:36Z"
    }, {
      id: 98,
      title: "Pokrajina St.2",
      genre: "Thriller",
      cast: [
        "Clint Eastwood",
        "Christoph Waltz",
        "Martin Sheen"
      ],
      createdAt: "2021-08-25T08:56:25Z",
      updatedAt: "2021-01-18T07:59:21Z"
    }, {
      id: 99,
      title: "Company You Keep, The",
      genre: "Thriller",
      cast: [
        "Kirk Douglas",
        "Brad Pitt",
        "Hugh Jackman"
      ],
      createdAt: "2021-02-25T22:39:32Z",
      updatedAt: "2021-06-10T04:36:18Z"
    }, {
      id: 100,
      title: "Shooting War",
      genre: "Documentary",
      cast: [
        "Leonardo DiCaprio",
        "Johnny Depp",
        "Christoph Waltz"
      ],
      createdAt: "2021-10-12T01:34:07Z",
      updatedAt: "2021-10-11T19:49:33Z"
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('movies', null, {});

  }
};
