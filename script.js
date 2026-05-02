// Anime Data
        const animeData = [
            {
                id: 1,
                title: "Attack on Titan",
                genres: ["Action", "Drama", "Fantasy"],
                rating: 9.1,
                year: 2013,
                episodes: "87",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg",
                description: "Humanity lives inside cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans. When a colossal Titan breaches the wall, the story follows Eren Yeager and his friends as they join the military to fight back."
            },
            {
                id: 2,
                title: "Death Note",
                genres: ["Thriller", "Supernatural", "Psychological"],
                rating: 8.9,
                year: 2006,
                episodes: "37",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/9/9453.jpg",
                description: "A high school student discovers a supernatural notebook that allows him to kill anyone by writing their name while picturing their face. He decides to use it to create a utopia without crime, but a mysterious detective known as L stands in his way."
            },
            {
                id: 3,
                title: "One Piece",
                genres: ["Action", "Adventure", "Comedy", "Fantasy"],
                rating: 8.8,
                year: 1999,
                episodes: "1070+",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
                description: "Monkey D. Luffy sets off on an adventure with his pirate crew to find the greatest treasure ever left by the legendary Pirate, Gold Roger. The famous mystery treasure named 'One Piece' promises unlimited riches and fame."
            },
            {
                id: 4,
                title: "Demon Slayer",
                genres: ["Action", "Fantasy", "Supernatural"],
                rating: 8.7,
                year: 2019,
                episodes: "55",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
                description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister."
            },
            {
                id: 5,
                title: "Fullmetal Alchemist: Brotherhood",
                genres: ["Action", "Adventure", "Fantasy", "Drama"],
                rating: 9.1,
                year: 2009,
                episodes: "64",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1208/94745.jpg",
                description: "Two brothers search for a Philosopher's Stone after an attempt to revive their dead mother goes wrong and leaves them in damaged physical forms. Their journey uncovers a deep government conspiracy."
            },
            {
                id: 6,
                title: "Jujutsu Kaisen",
                genres: ["Action", "Supernatural", "Thriller"],
                rating: 8.6,
                year: 2020,
                episodes: "47",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
                description: "A boy swallows a cursed finger and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself."
            },
            {
                id: 7,
                title: "Steins;Gate",
                genres: ["Sci-Fi", "Thriller", "Drama"],
                rating: 9.0,
                year: 2011,
                episodes: "24",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
                description: "After discovering time travel, a university student and his colleagues must use their knowledge to stop an evil organization and their diabolical plans."
            },
            {
                id: 8,
                title: "Hunter x Hunter",
                genres: ["Action", "Adventure", "Fantasy"],
                rating: 9.0,
                year: 2011,
                episodes: "148",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
                description: "Gon Freecss aspires to become a Hunter, an exceptional being capable of greatness. With his friends and his potential, he seeks for his father who left him when he was younger."
            },
            {
                id: 9,
                title: "Your Name",
                genres: ["Romance", "Supernatural", "Drama"],
                rating: 8.9,
                year: 2016,
                episodes: "Movie",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
                description: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?"
            },
            {
                id: 10,
                title: "Vinland Saga",
                genres: ["Action", "Adventure", "Drama"],
                rating: 8.7,
                year: 2019,
                episodes: "48",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/1500/103005.jpg",
                description: "Thorfinn pursues a journey with his father's killer in order to take revenge and end his life in a duel as an honorable warrior and pay his father a homage."
            },
            {
                id: 11,
                title: "Mob Psycho 100",
                genres: ["Action", "Comedy", "Supernatural"],
                rating: 8.6,
                year: 2016,
                episodes: "37",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/8/80356.jpg",
                description: "A psychic middle school boy tries to live a normal life and keep his growing powers in check, despite the challenges of everyday life."
            },
            {
                id: 12,
                title: "Cowboy Bebop",
                genres: ["Action", "Sci-Fi", "Drama"],
                rating: 8.9,
                year: 1998,
                episodes: "26",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
                description: "The futuristic misadventures and tragedies of an easygoing bounty hunter and his partners. Set in the year 2071, it follows the crew of the spaceship Bebop."
            },
            {
                id: 13,
                title: "My Hero Academia",
                genres: ["Action", "Comedy", "Supernatural"],
                rating: 8.2,
                year: 2016,
                episodes: "138",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/10/78745.jpg",
                description: "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero."
            },
            {
                id: 14,
                title: "Spirited Away",
                genres: ["Adventure", "Fantasy", "Supernatural"],
                rating: 8.8,
                year: 2001,
                episodes: "Movie",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/6/79597.jpg",
                description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts."
            },
            {
                id: 15,
                title: "Haikyuu!!",
                genres: ["Sports", "Comedy", "Drama"],
                rating: 8.7,
                year: 2014,
                episodes: "85",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/7/76019.jpg",
                description: "Determined to be like the volleyball championship's star player Shouyou, a short boy nicknamed 'the small giant,' joins his school's volleyball club."
            },
            {
                id: 16,
                title: "Code Geass",
                genres: ["Action", "Sci-Fi", "Drama", "Thriller"],
                rating: 8.7,
                year: 2006,
                episodes: "50",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/5/50331.jpg",
                description: "After being given a mysterious power to control others, an outcast prince becomes the masked leader of the rebellion against an all-powerful empire."
            },
            {
                id: 17,
                title: "Erased",
                genres: ["Thriller", "Supernatural", "Drama"],
                rating: 8.5,
                year: 2016,
                episodes: "12",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/10/77957.jpg",
                description: "29-year-old Satoru Fujinuma is sent back in time 18 years to prevent the events leading to his mother's death, which began with a series of kidnappings while he was in 5th grade."
            },
            {
                id: 18,
                title: "Clannad: After Story",
                genres: ["Drama", "Romance", "Slice of Life", "Supernatural"],
                rating: 8.9,
                year: 2008,
                episodes: "24",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/13/24647.jpg",
                description: "A sequel to the recently wrapped anime based on the Key Clannad franchise. After Story is a path that opens in the original visual novel after all the other paths have been opened."
            },
            {
                id: 19,
                title: "Made in Abyss",
                genres: ["Adventure", "Fantasy", "Sci-Fi", "Drama"],
                rating: 8.7,
                year: 2017,
                episodes: "25",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/6/86733.jpg",
                description: "A girl and her robot companion search for her mother, who's lost within a vast chasm known as the Abyss that is filled with mysterious creatures and relics."
            },
            {
                id: 20,
                title: "The Promised Neverland",
                genres: ["Thriller", "Sci-Fi", "Supernatural", "Drama"],
                rating: 8.5,
                year: 2019,
                episodes: "23",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1125/96929.jpg",
                description: "When three gifted kids at an isolated idyllic orphanage discover the secret and sinister purpose they have been raised for, they look for a way to escape."
            },
            {
                id: 21,
                title: "Violet Evergarden",
                genres: ["Drama", "Fantasy", "Slice of Life"],
                rating: 8.7,
                year: 2018,
                episodes: "13",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg",
                description: "In the aftermath of a great war, Violet Evergarden, a young female ex-soldier, gets a job at a writers' agency and goes on assignments to create letters that can connect people."
            },
            {
                id: 22,
                title: "One Punch Man",
                genres: ["Action", "Comedy", "Sci-Fi", "Supernatural"],
                rating: 8.5,
                year: 2015,
                episodes: "24",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/12/76049.jpg",
                description: "The story of Saitama, a hero that does it just for fun and can defeat his enemies with a single punch. However, he grows bored with his overwhelming strength."
            },
            {
                id: 23,
                title: "Toradora!",
                genres: ["Comedy", "Romance", "Slice of Life"],
                rating: 8.4,
                year: 2008,
                episodes: "25",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/13/22128.jpg",
                description: "Ryuji Takasu lives in a falling-down house with his mother, and although being a nice guy is cursed with the evil look of his father. He and Taiga Aisaka form an unlikely alliance."
            },
            {
                id: 24,
                title: "Psycho-Pass",
                genres: ["Action", "Sci-Fi", "Thriller", "Drama"],
                rating: 8.3,
                year: 2012,
                episodes: "41",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/5/43399.jpg",
                description: "Believing in humanity and order, policewoman Akane Tsunemori obeys the ruling, computerized, precognitive Sibyl System. But when she faces a criminal mastermind, she begins to question everything."
            },
            {
                id: 25,
                title: "Kaguya-sama: Love is War",
                genres: ["Comedy", "Romance", "Psychological"],
                rating: 8.7,
                year: 2019,
                episodes: "37",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1295/106551.jpg",
                description: "Two high school geniuses, Shirogane and Kaguya, can't be honest with their feelings and begin a battle of wits to make the other confess their love first."
            },
            {
                id: 26,
                title: "Re:Zero",
                genres: ["Fantasy", "Thriller", "Drama", "Supernatural"],
                rating: 8.2,
                year: 2016,
                episodes: "50",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/11/79410.jpg",
                description: "Subaru Natsuki is summoned to another world where he discovers he has the ability to return from death. He uses this power to protect those he cares about."
            },
            {
                id: 27,
                title: "Oregairu",
                genres: ["Comedy", "Drama", "Romance", "Slice of Life"],
                rating: 8.2,
                year: 2013,
                episodes: "38",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/11/49459.jpg",
                description: "A narcissistic high school student with a firm belief that joyful youth is a farce forms a club with the school's most beautiful girl to help students with their problems."
            },
            {
                id: 28,
                title: "Gintama",
                genres: ["Action", "Comedy", "Sci-Fi", "Drama"],
                rating: 9.0,
                year: 2006,
                episodes: "367",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/10/73274.jpg",
                description: "In an era where aliens have invaded and taken over feudal Tokyo, an unemployed samurai finds work however he can. The comedic adventures of Gintoki Sakata and his friends."
            },
            {
                id: 29,
                title: "A Silent Voice",
                genres: ["Drama", "Slice of Life", "Romance"],
                rating: 8.9,
                year: 2016,
                episodes: "Movie",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1122/96435.jpg",
                description: "A young man is ostracized by his classmates after he bullies a deaf girl to the point where she moves away. Years later, he sets off on a path for redemption."
            },
            {
                id: 30,
                title: "Chainsaw Man",
                genres: ["Action", "Fantasy", "Horror", "Supernatural"],
                rating: 8.6,
                year: 2022,
                episodes: "12",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/1806/126216.jpg",
                description: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. But he must hunt devils to pay off his deceased father's debt."
            },
            {
                id: 31,
                title: "Spy x Family",
                genres: ["Action", "Comedy", "Slice of Life"],
                rating: 8.6,
                year: 2022,
                episodes: "37",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/1441/122795.jpg",
                description: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife is a deadly assassin and neither knows each other's secret."
            },
            {
                id: 32,
                title: "Dr. Stone",
                genres: ["Adventure", "Comedy", "Sci-Fi"],
                rating: 8.3,
                year: 2019,
                episodes: "57",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/1613/102576.jpg",
                description: "After a mysterious phenomenon turns humanity to stone, a genius boy named Senku awakens thousands of years later and sets out to rebuild civilization with science."
            },
            {
                id: 33,
                title: "Fruits Basket",
                genres: ["Comedy", "Drama", "Romance", "Supernatural", "Slice of Life"],
                rating: 8.6,
                year: 2019,
                episodes: "63",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1447/99827.jpg",
                description: "After a family tragedy turns her life upside down, high schooler Tohru Honda takes matters into her own hands and moves out into a tent. She soon encounters the Soma family curse."
            },
            {
                id: 34,
                title: "Banana Fish",
                genres: ["Action", "Adventure", "Drama", "Thriller"],
                rating: 8.5,
                year: 2018,
                episodes: "24",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1208/90452.jpg",
                description: "Ash Lynx, a runaway brought up by the mafia don Dino Golzine, hunts for a mysterious drug called 'Banana Fish' while uncovering a conspiracy."
            },
            {
                id: 35,
                title: "March Comes in Like a Lion",
                genres: ["Drama", "Slice of Life", "Sports"],
                rating: 8.7,
                year: 2016,
                episodes: "44",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/6/82898.jpg",
                description: "A 17-year-old professional shogi player lives alone in Tokyo, estranged from his family. His life changes when he meets three sisters who help him reconnect with the world."
            },
            {
                id: 36,
                title: "Black Lagoon",
                genres: ["Action", "Adventure", "Drama", "Thriller"],
                rating: 8.1,
                year: 2006,
                episodes: "29",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1906/129049.jpg",
                description: "A Japanese businessman is abandoned by his employer and joins a mercenary group called Lagoon Company in the crime-ridden city of Roanapur."
            },
            {
                id: 37,
                title: "Anohana",
                genres: ["Drama", "Romance", "Supernatural", "Slice of Life"],
                rating: 8.4,
                year: 2011,
                episodes: "11",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/5/79697.jpg",
                description: "Six childhood friends have grown apart over the years following the death of one of them, Menma. Now the ghost of Menma appears to Jinta, asking him to fulfill her wish."
            },
            {
                id: 38,
                title: "Gurren Lagann",
                genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
                rating: 8.6,
                year: 2007,
                episodes: "27",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/4/5123.jpg",
                description: "Two friends, Simon and Kamina, become the symbols of rebellion against the powerful Spiral King, who forced mankind into subterranean villages."
            },
            {
                id: 39,
                title: "Monster",
                genres: ["Thriller", "Drama", "Mystery"],
                rating: 8.9,
                year: 2004,
                episodes: "74",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/10/18793.jpg",
                description: "A brilliant neurosurgeon living in Germany finds his life in utter turmoil after getting involved with a former patient who is revealed to be a dangerous psychopath."
            },
            {
                id: 40,
                title: "Bakuman",
                genres: ["Comedy", "Drama", "Romance", "Slice of Life"],
                rating: 8.3,
                year: 2010,
                episodes: "75",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/6/26138.jpg",
                description: "Two students dream of becoming professional manga creators and embark on a journey to create the best manga series ever published in Weekly Shonen Jump."
            },
            {
                id: 41,
                title: "Parasyte",
                genres: ["Action", "Horror", "Sci-Fi", "Supernatural"],
                rating: 8.4,
                year: 2014,
                episodes: "24",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/3/65187.jpg",
                description: "17-year-old Shinichi Izumi is partially infected by a Parasyte, monsters that butcher and consume humans. He must learn to coexist with the creature to survive."
            },
            {
                id: 42,
                title: "Nichijou",
                genres: ["Comedy", "Slice of Life"],
                rating: 8.5,
                year: 2011,
                episodes: "26",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/3/76688.jpg",
                description: "A group of students, including a robot girl, experience the absurdity of everyday high school life in this surreal comedy."
            },
            {
                id: 43,
                title: "Run with the Wind",
                genres: ["Sports", "Drama", "Slice of Life"],
                rating: 8.5,
                year: 2018,
                episodes: "23",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1936/94950.jpg",
                description: "A former elite runner and a college student recruit residents of an old apartment building to form a relay team for Japan's most prestigious university race."
            },
            {
                id: 44,
                title: "Beastars",
                genres: ["Drama", "Fantasy", "Psychological", "Slice of Life"],
                rating: 8.2,
                year: 2019,
                episodes: "24",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1234/102064.jpg",
                description: "In a world of anthropomorphic animals, a timid wolf and a dwarf rabbit form an unlikely friendship while navigating the complex social dynamics of their school."
            },
            {
                id: 45,
                title: "Odd Taxi",
                genres: ["Mystery", "Drama", "Thriller"],
                rating: 8.7,
                year: 2021,
                episodes: "13",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/1983/111436.jpg",
                description: "A walrus taxi driver becomes entangled in the mystery of a missing girl, connecting the lives of various eccentric animal characters in Tokyo."
            },
            {
                id: 46,
                title: "Ping Pong the Animation",
                genres: ["Sports", "Drama", "Psychological"],
                rating: 8.6,
                year: 2014,
                episodes: "11",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/13/62191.jpg",
                description: "Two childhood friends, one a prodigy and one naturally gifted, compete in table tennis while discovering what the sport truly means to them."
            },
            {
                id: 47,
                title: "Land of the Lustrous",
                genres: ["Action", "Drama", "Fantasy", "Sci-Fi"],
                rating: 8.5,
                year: 2017,
                episodes: "12",
                status: "Ongoing",
                image: "https://cdn.myanimelist.net/images/anime/3/88293.jpg",
                description: "In a world inhabited by immortal gem-like beings, the fragile Phosphophyllite is assigned to create an encyclopedia of natural history."
            },
            {
                id: 48,
                title: "Shouwa Genroku Rakugo Shinjuu",
                genres: ["Drama", "Slice of Life"],
                rating: 8.6,
                year: 2016,
                episodes: "25",
                status: "Completed",
                image: "https://cdn.myanimelist.net/images/anime/10/82320.jpg",
                description: "The story of a former yakuza member who becomes a rakugo storyteller, exploring the art form's history and the complex relationships between performers."
            }
        ];

        // State Management
        let currentSection = 'all';
        let currentGenre = 'all';
        let currentSort = 'popularity';
        let searchQuery = '';
        let favorites = JSON.parse(localStorage.getItem('anime_favorites') || '[]');
        let library = JSON.parse(localStorage.getItem('anime_library') || '[]');
        let watched = JSON.parse(localStorage.getItem('anime_watched') || '[]');
        let currentModalAnime = null;

        // URL Mappings
        const crunchyrollLinks = {
            1: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
            2: "https://www.crunchyroll.com/series/G6QWD3EE6/death-note",
            3: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece",
            4: "https://www.crunchyroll.com/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba",
            5: "https://www.crunchyroll.com/series/GRGGPG93R/fullmetal-alchemist-brotherhood",
            6: "https://www.crunchyroll.com/series/GRDV0019R/jujutsu-kaisen",
            7: "https://www.crunchyroll.com/series/GYWE7W5GY/steinsgate",
            8: "https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter",
            9: "https://www.crunchyroll.com/series/GY9P5K3DR/your-name",
            10: "https://www.crunchyroll.com/series/GEXH3W2G1/vinland-saga",
            11: "https://www.crunchyroll.com/series/GY190DKQR/mob-psycho-100",
            12: "https://www.crunchyroll.com/series/GYVNXMVP6/cowboy-bebop",
            13: "https://www.crunchyroll.com/series/G6NQ5DWZ6/my-hero-academia",
            14: "https://www.crunchyroll.com/series/GY5P48XEY/spirited-away",
            15: "https://www.crunchyroll.com/series/GY8VM8MWY/haikyu",
            16: "https://www.crunchyroll.com/series/GY2P9ED0Y/code-geass",
            17: "https://www.crunchyroll.com/series/GRDQD59VY/erased",
            18: "https://www.crunchyroll.com/series/GR9PVEK96/clannad",
            19: "https://www.crunchyroll.com/series/GY5PDGZY6/made-in-abyss",
            20: "https://www.crunchyroll.com/series/GYVD2K1WY/the-promised-neverland",
            21: "https://www.crunchyroll.com/series/GYQ4QXP7G/violet-evergarden",
            22: "https://www.crunchyroll.com/series/GR19V7816/one-punch-man",
            23: "https://www.crunchyroll.com/series/GR75253JY/toradora",
            24: "https://www.crunchyroll.com/series/GR2P9ZQ2Y/psycho-pass",
            25: "https://www.crunchyroll.com/series/GY5P48XEY/kaguya-sama-love-is-war",
            26: "https://www.crunchyroll.com/series/GRWEZQZ9R/rezero-starting-life-in-another-world",
            27: "https://www.crunchyroll.com/series/GY3VWXP5R/my-teen-romantic-comedy-snafu",
            28: "https://www.crunchyroll.com/series/GYQ4MKDZ6/gintama",
            29: "https://www.crunchyroll.com/series/GYQ4QXP7G/a-silent-voice",
            30: "https://www.crunchyroll.com/series/GYQ4QXP7G/chainsaw-man",
            31: "https://www.crunchyroll.com/series/GYQ4QXP7G/spy-x-family",
            32: "https://www.crunchyroll.com/series/GYQ4QXP7G/dr-stone",
            33: "https://www.crunchyroll.com/series/GYQ4QXP7G/fruits-basket",
            34: "https://www.crunchyroll.com/series/GYQ4QXP7G/banana-fish",
            35: "https://www.crunchyroll.com/series/GYQ4QXP7G/march-comes-in-like-a-lion",
            36: "https://www.crunchyroll.com/series/GYQ4QXP7G/black-lagoon",
            37: "https://www.crunchyroll.com/series/GYQ4QXP7G/anohana",
            38: "https://www.crunchyroll.com/series/GYQ4QXP7G/gurren-lagann",
            39: "https://www.crunchyroll.com/series/GYQ4QXP7G/monster",
            40: "https://www.crunchyroll.com/series/GYQ4QXP7G/bakuman",
            41: "https://www.crunchyroll.com/series/GYQ4QXP7G/parasyte-the-maxim",
            42: "https://www.crunchyroll.com/series/GYQ4QXP7G/nichijou-my-ordinary-life",
            43: "https://www.crunchyroll.com/series/GYQ4QXP7G/run-with-the-wind",
            44: "https://www.crunchyroll.com/series/GYQ4QXP7G/beastars",
            45: "https://www.crunchyroll.com/series/GYQ4QXP7G/odd-taxi",
            46: "https://www.crunchyroll.com/series/GYQ4QXP7G/ping-pong-the-animation",
            47: "https://www.crunchyroll.com/series/GYQ4QXP7G/land-of-the-lustrous",
            48: "https://www.crunchyroll.com/series/GYQ4QXP7G/showa-genroku-rakugo-shinju"
        };

        const anikaiLinks = {
            1: "https://anikai.to/anime/attack-on-titan",
            2: "https://anikai.to/anime/death-note",
            3: "https://anikai.to/anime/one-piece",
            4: "https://anikai.to/anime/demon-slayer",
            5: "https://anikai.to/anime/fullmetal-alchemist-brotherhood",
            6: "https://anikai.to/anime/jujutsu-kaisen",
            7: "https://anikai.to/anime/steins-gate",
            8: "https://anikai.to/anime/hunter-x-hunter",
            9: "https://anikai.to/anime/your-name",
            10: "https://anikai.to/anime/vinland-saga",
            11: "https://anikai.to/anime/mob-psycho-100",
            12: "https://anikai.to/anime/cowboy-bebop",
            13: "https://anikai.to/anime/my-hero-academia",
            14: "https://anikai.to/anime/spirited-away",
            15: "https://anikai.to/anime/haikyuu",
            16: "https://anikai.to/anime/code-geass",
            17: "https://anikai.to/anime/erased",
            18: "https://anikai.to/anime/clannad-after-story",
            19: "https://anikai.to/anime/made-in-abyss",
            20: "https://anikai.to/anime/the-promised-neverland",
            21: "https://anikai.to/anime/violet-evergarden",
            22: "https://anikai.to/anime/one-punch-man",
            23: "https://anikai.to/anime/toradora",
            24: "https://anikai.to/anime/psycho-pass",
            25: "https://anikai.to/anime/kaguya-sama-love-is-war",
            26: "https://anikai.to/anime/rezero-starting-life-in-another-world",
            27: "https://anikai.to/anime/my-teen-romantic-comedy-snafu",
            28: "https://anikai.to/anime/gintama",
            29: "https://anikai.to/anime/a-silent-voice",
            30: "https://anikai.to/anime/chainsaw-man",
            31: "https://anikai.to/anime/spy-x-family",
            32: "https://anikai.to/anime/dr-stone",
            33: "https://anikai.to/anime/fruits-basket",
            34: "https://anikai.to/anime/banana-fish",
            35: "https://anikai.to/anime/march-comes-in-like-a-lion",
            36: "https://anikai.to/anime/black-lagoon",
            37: "https://anikai.to/anime/anohana",
            38: "https://anikai.to/anime/gurren-lagann",
            39: "https://anikai.to/anime/monster",
            40: "https://anikai.to/anime/bakuman",
            41: "https://anikai.to/anime/parasyte",
            42: "https://anikai.to/anime/nichijou",
            43: "https://anikai.to/anime/run-with-the-wind",
            44: "https://anikai.to/anime/beastars",
            45: "https://anikai.to/anime/odd-taxi",
            46: "https://anikai.to/anime/ping-pong-the-animation",
            47: "https://anikai.to/anime/land-of-the-lustrous",
            48: "https://anikai.to/anime/showa-genroku-rakugo-shinju"
        };


        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            updateStats();
            renderAnime();
        });

        // Create floating particles
        function createParticles() {
            const container = document.getElementById('particles');
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (10 + Math.random() * 10) + 's';
                particle.style.background = ['var(--primary)', 'var(--secondary)', 'var(--neon-purple)'][Math.floor(Math.random() * 3)];
                container.appendChild(particle);
            }
        }

        // Show different sections
        function showSection(section) {
            currentSection = section;

            // Update nav buttons
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.section === section);
            });

            // Update hero text
            const titles = {
                'all': { title: 'Discover Anime', subtitle: 'Explore thousands of anime across every genre imaginable' },
                'favorites': { title: 'My Favorites', subtitle: 'Your most loved anime collection' },
                'library': { title: 'My Library', subtitle: 'Anime you plan to watch' },
                'watched': { title: 'Watched', subtitle: 'Anime you have completed' }
            };

            document.getElementById('pageTitle').textContent = titles[section].title;
            document.getElementById('pageSubtitle').textContent = titles[section].subtitle;

            // Show/hide filters based on section
            const filters = document.getElementById('filters');
            filters.style.display = section === 'all' ? 'flex' : 'none';

            renderAnime();
        }

        // Filter by genre
        function filterByGenre(genre) {
            currentGenre = genre;
            document.querySelectorAll('.filter-btn[data-genre]').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.genre === genre);
            });
            renderAnime();
        }

        // Handle search
        function handleSearch() {
            searchQuery = document.getElementById('searchInput').value.toLowerCase();
            renderAnime();
        }

        // Handle sort
        function handleSort() {
            currentSort = document.getElementById('sortSelect').value;
            renderAnime();
        }

        // Get filtered and sorted anime
        function getFilteredAnime() {
            let filtered = animeData;

            // Filter by section
            if (currentSection === 'favorites') {
                filtered = filtered.filter(a => favorites.includes(a.id));
            } else if (currentSection === 'library') {
                filtered = filtered.filter(a => library.includes(a.id));
            } else if (currentSection === 'watched') {
                filtered = filtered.filter(a => watched.includes(a.id));
            }

            // Filter by genre
            if (currentGenre !== 'all') {
                filtered = filtered.filter(a => a.genres.includes(currentGenre));
            }

            // Filter by search
            if (searchQuery) {
                filtered = filtered.filter(a => 
                    a.title.toLowerCase().includes(searchQuery) ||
                    a.genres.some(g => g.toLowerCase().includes(searchQuery))
                );
            }

            // Sort
            filtered = [...filtered];
            if (currentSort === 'rating') {
                filtered.sort((a, b) => b.rating - a.rating);
            } else if (currentSort === 'newest') {
                filtered.sort((a, b) => b.year - a.year);
            } else if (currentSort === 'title') {
                filtered.sort((a, b) => a.title.localeCompare(b.title));
            }
            // popularity is default order

            return filtered;
        }

        // Update stats
        function updateStats() {
            document.getElementById('totalCount').textContent = animeData.length;
            document.getElementById('favCount').textContent = favorites.length;
            document.getElementById('libCount').textContent = library.length;
            document.getElementById('watchCount').textContent = watched.length;
        }

        // Render anime grid
        function renderAnime() {
            const grid = document.getElementById('animeGrid');
            const filtered = getFilteredAnime();

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-ghost"></i>
                        <h3>No Anime Found</h3>
                        <p>Try adjusting your filters or search query</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = filtered.map(anime => {
                const isFav = favorites.includes(anime.id);
                const isWatch = watched.includes(anime.id);
                const isLib = library.includes(anime.id);

                const badges = [];
                if (isFav) badges.push('<span class="status-badge badge-fav">Fav</span>');
                if (isWatch) badges.push('<span class="status-badge badge-watched">Watched</span>');
                if (isLib) badges.push('<span class="status-badge badge-library">Library</span>');

                return `
                    <div class="anime-card" onclick="openModal(${anime.id})">
                        <div class="status-badges">
                            ${badges.join('')}
                        </div>
                        <div class="card-actions" onclick="event.stopPropagation()">
                            <button class="action-btn heart-btn ${isFav ? 'active' : ''}" onclick="toggleAnime(${anime.id}, 'favorite', event)" title="${isFav ? 'Remove from' : 'Add to'} Favorites">
                                <i class="fas fa-heart"></i>
                            </button>
                            <button class="action-btn watch-btn ${isWatch ? 'active' : ''}" onclick="toggleAnime(${anime.id}, 'watched', event)" title="${isWatch ? 'Unmark' : 'Mark as'} Watched">
                                <i class="fas fa-check"></i>
                            </button>
                            <button class="action-btn library-btn ${isLib ? 'active' : ''}" onclick="toggleAnime(${anime.id}, 'library', event)" title="${isLib ? 'Remove from' : 'Add to'} Library">
                                <i class="fas fa-bookmark"></i>
                            </button>
                        </div>
                        <img class="card-image" src="${anime.image}" alt="${anime.title}" loading="lazy">
                        <div class="card-content">
                            <div class="card-title">${anime.title}</div>
                            <div class="card-meta">
                                <span class="card-rating"><i class="fas fa-star"></i> ${anime.rating}</span>
                                <span>${anime.year}</span>
                            </div>
                            <span class="card-genre">${anime.genres[0]}</span>
                            <div class="external-links" onclick="event.stopPropagation()">
                                <a href="${crunchyrollLinks[anime.id] || '#' }" target="_blank" class="external-link-btn crunchyroll" title="Watch on Crunchyroll">
                                    <i class="fas fa-play-circle"></i> Crunchyroll
                                </a>
                                <a href="${anikaiLinks[anime.id] || '#' }" target="_blank" class="external-link-btn anikai" title="Watch on Anikai">
                                    <i class="fas fa-tv"></i> Anikai
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        // Toggle anime status
        function toggleAnime(id, type, event) {
            if (event) event.stopPropagation();

            let list, key, name;
            if (type === 'favorite') {
                list = favorites;
                key = 'anime_favorites';
                name = 'Favorites';
            } else if (type === 'watched') {
                list = watched;
                key = 'anime_watched';
                name = 'Watched';
            } else {
                list = library;
                key = 'anime_library';
                name = 'Library';
            }

            const index = list.indexOf(id);
            const anime = animeData.find(a => a.id === id);

            if (index > -1) {
                list.splice(index, 1);
                showToast('Removed from ' + name, 'info');
            } else {
                list.push(id);
                showToast('Added to ' + name, 'success');
            }

            localStorage.setItem(key, JSON.stringify(list));
            updateStats();
            renderAnime();

            // Update modal if open
            if (currentModalAnime && currentModalAnime.id === id) {
                updateModalButtons();
            }
        }

        // Open modal
        function openModal(id) {
            const anime = animeData.find(a => a.id === id);
            if (!anime) return;

            currentModalAnime = anime;

            document.getElementById('modalImage').src = anime.image;
            document.getElementById('modalTitle').textContent = anime.title;
            document.getElementById('modalRating').textContent = anime.rating + ' / 10';
            document.getElementById('modalYear').textContent = anime.year;
            document.getElementById('modalEpisodes').textContent = anime.episodes + ' Episodes';
            document.getElementById('modalStatus').textContent = anime.status;
            document.getElementById('modalDescription').textContent = anime.description;

            document.getElementById('modalGenres').innerHTML = anime.genres.map(g => 
                `<span class="modal-genre-tag">${g}</span>`
            ).join('');

            // Set external links
            document.getElementById('modalCrunchyrollLink').href = crunchyrollLinks[id] || '#';
            document.getElementById('modalAnikaiLink').href = anikaiLinks[id] || '#';

            updateModalButtons();
            document.getElementById('modal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Update modal buttons
        function updateModalButtons() {
            if (!currentModalAnime) return;
            const id = currentModalAnime.id;

            const isFav = favorites.includes(id);
            const isWatch = watched.includes(id);
            const isLib = library.includes(id);

            const favBtn = document.getElementById('modalFavBtn');
            const watchBtn = document.getElementById('modalWatchBtn');
            const libBtn = document.getElementById('modalLibBtn');

            favBtn.classList.toggle('active', isFav);
            document.getElementById('modalFavText').textContent = isFav ? 'In Favorites' : 'Add to Favorites';

            watchBtn.classList.toggle('active', isWatch);
            document.getElementById('modalWatchText').textContent = isWatch ? 'Watched' : 'Mark as Watched';

            libBtn.classList.toggle('active', isLib);
            document.getElementById('modalLibText').textContent = isLib ? 'In Library' : 'Add to Library';
        }

        // Toggle from modal
        function toggleFromModal(type) {
            if (!currentModalAnime) return;
            toggleAnime(currentModalAnime.id, type);
        }

        // Close modal
        function closeModal(event) {
            if (event && event.target !== event.currentTarget) return;
            document.getElementById('modal').classList.remove('active');
            document.body.style.overflow = '';
            currentModalAnime = null;
        }

        // Show toast notification
        function showToast(message, type) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'toast ' + type;

            const icons = {
                success: 'fa-check-circle',
                error: 'fa-times-circle',
                info: 'fa-info-circle'
            };

            toast.innerHTML = `
                <i class="fas ${icons[type]} toast-icon"></i>
                <span>${message}</span>
            `;

            container.appendChild(toast);

            setTimeout(() => {
                toast.remove();
            }, 3000);
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });