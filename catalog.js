
// exports

//imports
// const library = require('library.js');

// importing catalog item modules
// const movies = require('./movies.js');
// const Film = movies.Movies;





// console.log(martian, fellowshipOfTheRing);

window.addEventListener('DOMContentLoaded', event => {
    class CatalogItem {
        constructor(type, title, genre, rating, what, review, catalogNumber) {
            this.type = type;
            this.title = title;
            this.genre = genre;
            this.rating = rating;
            this.what = what;
            this.review = review;
            this.catalogNumber = catalogNumber;
        }
    }

    // ******* Move to new file/module

    class Movies extends CatalogItem {
        constructor(type, title, genre, rating, what, review, catalogNumber, director, releaseYear, series) {
            super(type, title, genre, rating, what, review, catalogNumber);
            this.director = director;
            this.releaseYear = releaseYear;
            this.series = series;
        }
    }

    // catalog movie objects

    const martian = new Movies(
        'movie',
        'Martian',
        ['Sci-Fi'],
        10,
        'This is a film about an astronaut who is mistakingly left for dead by the rest of his crew. He must then find his way with limited resources on the planet mars.',
        'I really enjoyed the journey ...blah blah blah',
        83758,
        'Ridley Scott',
        2015,
        'This film was not in a series'
        );

    const fellowshipOfTheRing = new Movies(
        'movie',
        'The Fellowship Of The Ring',
        ['Fantasy', 'Adventure'],
        10,
        'This film marks the beginning of a grand adventure',
        'I really enjoyed the journey ...blah blah blah',
        45656,
        'Peter Jackson',
        2001,
        'Lord Of The Rings'
    )

    const marsbutton = document.getElementById('mars');
    const ringbutton = document.getElementById('ring');
    const itemInfo = document.getElementById('item-info');

    function movieInfo(name) {
        let genres = name.genre;
        if (name.genre.length > 1) {
            genres = name.genre.join('-');
        }
        console.log(genres);

        itemInfo.innerHTML = `Series: ${name.series};  The movie ${name.title}, is great. It was directed by ${name.director}. It is in the ${genres} genre, and is one of my favorites. I give it a ${name.rating} out of 10!! ${name.what} ${name.review}`;
    }

    marsbutton.addEventListener('click', event => {
        movieInfo(martian);
    });

    ringbutton.addEventListener('click', event => {
        movieInfo(fellowshipOfTheRing);
    })
});



// ********  TO BE CATALOGED  *********
// movies
    //star wars, marvel, back to the future, martian, intersteller, the other guys, shawshank redemption, solo, luke cage, cheers, frasier, indiana jones, monty python, leap year, national lampoons, the men who stare at goats, professor marston and the wonder women, as simple favor, fun with dick and jane, meet joe black, heart breakers, fantastic four, james bond, liar liar, the closet, wedding crashers, gentlemen prefer blondes, four weddings and a funeral, gi joe, shanghai knights, lord of the rings, wyatt earp, 9 to 5, matrix, the hitman's bodyguard, view from the top, harry potter, arrival, star trek, robocop, chappie,

// books
    //martian, magic 2.0, witch is when, atomic habits, space team, damaged detective, binti, souless, dr anarchy's, dungeon born, post apoocalyptic, dan deadman, jane austen, what I know for sure, black privilege, artemis, artemis fowl, gregor the underlander, around the way girl, code breakers, I can't make this up, the rules of supervillainy, 14, warp, waistcoats and weaponry, the power of habit, the 5 second rule, ready player one, the pumpkin plan, the richest man in babylon, the 7 habits of highly effective people

// tvshows
    //star trek, king of queens, arrested development, santa clarita diet, ozark, altered carbon, sherlock, elementary, another life, travelers, arrow, the flash, aggretsuko, shameless, handmaid's tale, happyish, the umbrella academy, sense 8, silicon valley, zoo, agents of shield, the magicians, sick note, living with yourself, the it crowd, blacklist, portlandia, the last man on earth, dark matter, schitts creek, tudors, vikings, 3%, comedians in cars getting coffee, the sound of your heart, stranger things, the walking dead, a series of unfortunate events, jonathan strange and mr norrell, great news, rilakkuma and kaoru, boys over flowers, baker king, penny dreadful, kantaro-the sweet tooth salaryman, colony, secret garden drama, chappelle show, miss panda and mr hedgehog, momo salon, breaking bad, scrubs, bobs burgers, my name is earl, malcolm in the middle, modern family, mr bean, the mick, blackish, SGU, golan the insatiable, 30rock, timeless, brooklyn 99, alone, cloak and dagger, dirk gently, workaholics, better off ted, future man, claws, ruys royal love in the palace, siren, superstore, the good place, the orville, good eats, ap bio, ballers, little britain, the young pope, insecure, battlestar galactica, inhumans, stitchers,

// plays
    //the importance of being earnest, a woman of no importance


// comedy specials
    // ellen degeneres-relatable, ali wong-baby cobra, ronny chieng-asian comedian,

// crafts
    //crochet
    //knit
    //misc
