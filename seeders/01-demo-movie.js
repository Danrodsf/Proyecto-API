"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "movies",
      [
        {
          title: "Venom: Let There Be Carnage",
          genre: "Action",
          cast: "Brad Pitt",
          city: "Valencia",
          overview:
            "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
          releaseDate: "2021-09-30",
          rating: 6.8,
          posterPath: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
          backdropPath: "/efuPybo8V8KTYGslQphO74LRvm0.jpg",
        },
        {
          title: "No Time to Die",
          genre: "Adventure",
          cast: "Tom Cruise",
          city: "Valencia",
          overview:
            "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
          releaseDate: "2021-09-29",
          rating: 7.5,
          posterPath: "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
          backdropPath: "/u5Fp9GBy9W8fqkuGfLBuuoJf57Z.jpg",
        },
        {
          title: "Eternals",
          genre: "Fantasy",
          cast: "Ryan Reynolds",
          city: "Valencia",
          overview:
            "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
          releaseDate: "2021-11-03",
          rating: 7.1,
          posterPath: "/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg",
          backdropPath: "/lyvszvJJqqI8aqBJ70XzdCNoK0y.jpg",
        },
        {
          title: "Dune",
          genre: "Sci-fi",
          cast: "George Clooney",
          city: "Valencia",
          overview:
            "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
          releaseDate: "2021-09-15",
          rating: 8,
          posterPath: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
          backdropPath: "/eeijXm3553xvuFbkPFkDG6CLCbQ.jpg",
        },
        {
          title: "After We Fell",
          genre: "Action",
          cast: "Brad Pitt",
          city: "Valencia",
          overview:
            "Just as Tessa's life begins to become unglued, nothing is what she thought it would be. Not her friends nor her family. The only person that she should be able to rely on is Hardin, who is furious when he discovers the massive secret that she's been keeping. Before Tessa makes the biggest decision of her life, everything changes because of revelations about her family.",
          releaseDate: "2021-09-01",
          rating: 7.3,
          posterPath: "/y0BBwpk5IIVbV655mfeR7kCNYhb.jpg",
          backdropPath: "/4vCh8R4yd6ybOmbxRAPOzaXmLTV.jpg",
        },
        {
          title: "Apex",
          genre: "Adventure",
          cast: "Tom Cruise",
          city: "Valencia",
          overview:
            "Ex-cop James Malone is serving a life sentence for a crime he didn’t commit. He is offered a chance at freedom if he can survive a deadly game of Apex, in which six hunters pay for the pleasure of hunting another human on a remote island. He accepts, and once he arrives, all hell breaks loose.",
          releaseDate: "2021-11-12",
          rating: 5.8,
          posterPath: "/cobRV6hAj8h7dRU4WZ3dkGaRQv2.jpg",
          backdropPath: "/oGC6etRRnMQaLAorTESurrHquB.jpg",
        },
        {
          title: "Free Guy",
          genre: "Fantasy",
          cast: "Ryan Reynolds",
          city: "Zaragoza",
          overview:
            "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
          releaseDate: "2021-08-11",
          rating: 7.8,
          posterPath: "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
          backdropPath: "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
        },
        {
          title: "The Harder They Fall",
          genre: "Sci-fi",
          cast: "George Clooney",
          city: "Zaragoza",
          overview:
            "Gunning for revenge, outlaw Nat Love saddles up with his gang to take down enemy Rufus Buck, a ruthless crime boss who just got sprung from prison.",
          releaseDate: "2021-10-22",
          rating: 6.6,
          posterPath: "/su9WzL7lwUZPhjH6eZByAYFx2US.jpg",
          backdropPath: "/d0mpUFKzoPwF1KsdjHpkkaYSvKm.jpg",
        },
        {
          title: "Nobody Sleeps in the Woods Tonight 2",
          genre: "Action",
          cast: "Brad Pitt",
          city: "Zaragoza",
          overview:
            "When something horrible happens to the only survivor of a bloody massacre, an insecure rookie cop must overcome his fears to stop further carnage.",
          releaseDate: "2021-10-27",
          rating: 3.9,
          posterPath: "/6QvepemlDGIiiYsVs0Y1ieFuG7N.jpg",
          backdropPath: "/icOUc1llxf2GJr1Z4dBbJYLzuvw.jpg",
        },
        {
          title: "The Addams Family 2",
          genre: "Adventure",
          cast: "Tom Cruise",
          city: "Zaragoza",
          overview:
            "The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.",
          releaseDate: "2021-10-01",
          rating: 7.3,
          posterPath: "/ld7YB9vBRp1GM1DT3KmFWSmtBPB.jpg",
          backdropPath: "/wfrfxivLOBtGMC98tIr2LSOeKSe.jpg",
        },
        {
          title: "Halloween Kills",
          genre: "Fantasy",
          cast: "Ryan Reynolds",
          city: "Zaragoza",
          overview:
            "Minutes after Laurie Strode, her daughter Karen and granddaughter Allyson left masked monster Michael Myers caged and burning in Laurie's basement, Laurie is rushed to the hospital with life-threatening injuries, believing she finally killed her lifelong tormentor. But when Michael manages to free himself from Laurie's trap, his ritual bloodbath resumes. As Laurie fights her pain and prepares to defend herself against him, she inspires all of Haddonfield to rise up against their unstoppable monster. The Strode women join a group of other survivors of Michael's first rampage who decide to take matters into their own hands, forming a vigilante mob that sets out to hunt Michael down, once and for all.",
          releaseDate: "2021-10-14",
          rating: 7,
          posterPath: "/qmJGd5IfURq8iPQ9KF3les47vFS.jpg",
          backdropPath: "/tDYwYktjFmpj92S2Qn4T3BcRgL.jpg",
        },
        {
          title: "The Vault",
          genre: "Sci-fi",
          cast: "George Clooney",
          city: "Zaragoza",
          overview:
            "When an engineer learns of a mysterious, impenetrable fortress hidden under The Bank of Spain, he joins a crew of master thieves who plan to steal the legendary lost treasure locked inside while the whole country is distracted by Spain's World Cup Final. With thousands of soccer fans cheering in the streets, and security forces closing in, the crew have just minutes to pull off the score of a lifetime.",
          releaseDate: "2021-03-03",
          rating: 7.1,
          posterPath: "/kWhXubAiIcHW0xn5GThflqaKZqh.jpg",
          backdropPath: "/eBGKU0ZLJmxtVtzESTB1mfllX1J.jpg",
        },
        {
          title: "Snake Eyes: G.I. Joe Origins",
          genre: "Action",
          cast: "Brad Pitt",
          city: "Madrid",
          overview:
            "After saving the life of their heir apparent, tenacious loner Snake Eyes is welcomed into an ancient Japanese clan called the Arashikage where he is taught the ways of the ninja warrior. But, when secrets from his past are revealed, Snake Eyes' honor and allegiance will be tested – even if that means losing the trust of those closest to him.",
          releaseDate: "2021-07-22",
          rating: 6.8,
          posterPath: "/uIXF0sQGXOxQhbaEaKOi2VYlIL0.jpg",
          backdropPath: "/2OFg5p9yarI5zZsUWKCRgBgPctj.jpg",
        },
        {
          title: "The Boss Baby: Family Business",
          genre: "Adventure",
          cast: "Tom Cruise",
          city: "Madrid",
          overview:
            "The Templeton brothers — Tim and his Boss Baby little bro Ted — have become adults and drifted away from each other. But a new boss baby with a cutting-edge approach and a can-do attitude is about to bring them together again … and inspire a new family business.",
          releaseDate: "2021-07-01",
          rating: 7.7,
          posterPath: "/uWStkK8bq9ixY3fc7y209ZleCoF.jpg",
          backdropPath: "/akwg1s7hV5ljeSYFfkw7hTHjVqk.jpg",
        },
        {
          title: "The Protégé",
          genre: "Fantasy",
          cast: "Ryan Reynolds",
          city: "Madrid",
          overview:
            "Rescued as a child by the legendary assassin Moody and trained in the family business, Anna is the world’s most skilled contract killer. When Moody, the man who was like a father to her and taught her everything she needs to know about trust and survival, is brutally killed, Anna vows revenge. As she becomes entangled with an enigmatic killer whose attraction to her goes way beyond cat and mouse, their confrontation turns deadly and the loose ends of a life spent killing will weave themselves ever tighter.",
          releaseDate: "2021-08-19",
          rating: 6.8,
          posterPath: "/o9FY8N5c8CXf22q8s4CmRRjAQJx.jpg",
          backdropPath: "/4O40vu2KOgnFfxvrZgzBG6havQ.jpg",
        },
        {
          title: "In for a Murder",
          genre: "Sci-fi",
          cast: "George Clooney",
          city: "Madrid",
          overview:
            "A stay-at-home mom and avid reader of crime stories discovers the deepest secrets of a small town's residents while investigating a woman's murder.",
          releaseDate: "2021-06-18",
          rating: 5.7,
          posterPath: "/tq5ODEgr1PUxT7HCqDT73SlDIek.jpg",
          backdropPath: "/wJrvNljE4lZDd5D7cIxi6xAVVZL.jpg",
        },
        {
          title: "Red Notice",
          genre: "Action",
          cast: "Brad Pitt",
          city: "Madrid",
          overview:
            "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
          releaseDate: "2021-11-04",
          rating: 7,
          posterPath: "/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg",
          backdropPath: "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg",
        },
        {
          title: "Clifford the Big Red Dog",
          genre: "Adventure",
          cast: "Tom Cruise",
          city: "Madrid",
          overview:
            "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.",
          releaseDate: "2021-11-10",
          rating: 8.1,
          posterPath: "/ygPTrycbMSFDc5zUpy4K5ZZtQSC.jpg",
          backdropPath: "/zBkHCpLmHjW2uVURs5uZkaVmgKR.jpg",
        },
        {
          title: "Demonic",
          genre: "Fantasy",
          cast: "Ryan Reynolds",
          city: "Valencia",
          overview:
            "A young woman unleashes terrifying demons when supernatural forces at the root of a decades-old rift between mother and daughter are ruthlessly revealed.",
          releaseDate: "2021-07-29",
          rating: 4.9,
          posterPath: "/pUK9duiCK1PKqWA5rRQ4XBMHITH.jpg",
          backdropPath: "/tFBVXnqmsmoSFR3rbltTfdGIMgV.jpg",
        },
        {
          title: "Rock Dog 2: Rock Around the Park",
          genre: "Sci-fi",
          cast: "George Clooney",
          city: "Madrid",
          overview:
            "When Bodi and his band 'True Blue' leave Snow Mountain, to tour with pop sensation, Lil' Foxy, they learn that fame comes at a price.",
          releaseDate: "2021-06-24",
          rating: 7.5,
          posterPath: "/kETYRGA15L0wkVPugSl8lKmSgFn.jpg",
          backdropPath: "/uMPJwWDojedB36iowSl3HTLmTjW.jpg",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
