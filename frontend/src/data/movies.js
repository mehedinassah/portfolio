// ============================================================
// Movie library for the "suggest me a film" game.
// The library = films Mehedi has "watched". A visitor's guess
// is fuzzy-matched (case-insensitive, tolerant of typos).
//
// TO EXPAND: just append more correctly-spelled titles to the
// arrays below. Matching is automatic. Aiming long-term for
// ~1000 Hollywood / ~300 Hindi / ~200 international.
// ============================================================

export const hollywood = [
  "The Godfather", "The Godfather Part II", "The Shawshank Redemption", "The Dark Knight",
  "Pulp Fiction", "Fight Club", "Forrest Gump", "Inception", "The Matrix", "Goodfellas",
  "Schindler's List", "Interstellar", "Gladiator", "Titanic", "Avatar", "The Departed",
  "Se7en", "The Silence of the Lambs", "Saving Private Ryan", "The Green Mile",
  "Django Unchained", "The Wolf of Wall Street", "Whiplash", "The Prestige", "Memento",
  "The Lord of the Rings: The Fellowship of the Ring", "The Lord of the Rings: The Two Towers",
  "The Lord of the Rings: The Return of the King", "Star Wars", "The Empire Strikes Back",
  "Return of the Jedi", "Jurassic Park", "Terminator 2: Judgment Day", "Alien", "Aliens",
  "Blade Runner", "Blade Runner 2049", "Mad Max: Fury Road", "Joker", "Gone Girl",
  "No Country for Old Men", "There Will Be Blood", "The Big Lebowski", "Casino", "Heat",
  "Once Upon a Time in Hollywood", "Reservoir Dogs", "Kill Bill: Vol. 1", "Kill Bill: Vol. 2",
  "The Truman Show", "Eternal Sunshine of the Spotless Mind", "Requiem for a Dream",
  "American Beauty", "A Beautiful Mind", "Good Will Hunting", "The Social Network",
  "Catch Me If You Can", "Shutter Island", "The Revenant", "Birdman", "La La Land",
  "Dune", "Dune: Part Two", "Oppenheimer", "Barbie", "Top Gun: Maverick",
  "Spider-Man: Into the Spider-Verse", "Avengers: Infinity War", "Avengers: Endgame",
  "Iron Man", "The Avengers", "Black Panther", "Guardians of the Galaxy", "Deadpool",
  "Logan", "The Lion King", "Toy Story", "Toy Story 3", "Finding Nemo", "Up", "WALL-E",
  "Inside Out", "Coco", "Ratatouille", "The Incredibles", "Shrek", "Frozen",
  "Monsters, Inc.", "How to Train Your Dragon", "Back to the Future",
  "Raiders of the Lost Ark", "E.T. the Extra-Terrestrial", "Jaws", "Rocky", "Raging Bull",
  "Taxi Driver", "Apocalypse Now", "Full Metal Jacket", "The Shining", "A Clockwork Orange",
  "2001: A Space Odyssey", "Psycho", "Vertigo", "Rear Window", "Citizen Kane", "Casablanca",
  "Gone with the Wind", "Singin' in the Rain", "12 Angry Men", "One Flew Over the Cuckoo's Nest",
  "The Usual Suspects", "L.A. Confidential", "American History X", "The Pianist", "Braveheart",
  "Dead Poets Society", "The Sixth Sense", "1917", "Knives Out", "Get Out", "Us",
  "A Quiet Place", "Tenet", "Dunkirk", "The Grand Budapest Hotel", "Moonlight", "Spotlight",
  "12 Years a Slave", "The Hateful Eight", "Sicario", "Arrival", "Gravity", "Her", "Drive",
  "Nightcrawler", "Prisoners", "Hereditary", "Midsommar", "It", "The Conjuring", "John Wick",
  "Million Dollar Baby", "Unforgiven", "Gone Baby Gone", "Nomadland", "Everything Everywhere All at Once",
];

export const hindi = [
  "3 Idiots", "Sholay", "Dilwale Dulhania Le Jayenge", "Lagaan", "Gangs of Wasseypur", "PK",
  "Dangal", "Andhadhun", "Queen", "Zindagi Na Milegi Dobara", "Dil Chahta Hai",
  "Rang De Basanti", "Swades", "Taare Zameen Par", "Black", "My Name Is Khan",
  "Chak De! India", "Munna Bhai M.B.B.S.", "Lage Raho Munna Bhai", "Barfi!", "Kahaani",
  "A Wednesday", "Drishyam", "Special 26", "Talvar", "Article 15", "Pink", "Gully Boy",
  "Udaan", "Masaan", "Tumbbad", "Newton", "The Lunchbox", "Haider", "Maqbool", "Omkara",
  "Dev.D", "Paan Singh Tomar", "Bhaag Milkha Bhaag", "Raazi", "Uri: The Surgical Strike",
  "Sanju", "Padmaavat", "Bajirao Mastani", "Devdas", "Kabhi Khushi Kabhie Gham",
  "Kuch Kuch Hota Hai", "Mughal-e-Azam", "Mother India", "Guide", "Anand", "Deewaar", "Don",
  "Amar Akbar Anthony", "Hum Aapke Hain Koun..!", "Kabir Singh", "Animal", "Jawan", "Pathaan",
  "Tiger Zinda Hai", "War", "Bajrangi Bhaijaan", "Sultan", "Ek Tha Tiger", "Chennai Express",
  "Golmaal", "Hera Pheri", "Phir Hera Pheri", "Welcome", "Singham", "Simmba",
  "Sonu Ke Titu Ki Sweety", "Stree", "Bhool Bhulaiyaa", "Raees", "Highway", "Tamasha",
  "Rockstar", "Ae Dil Hai Mushkil", "Yeh Jawaani Hai Deewani", "Student of the Year",
  "2 States", "Kapoor & Sons", "Dear Zindagi", "October", "Piku", "Vicky Donor", "Badhaai Ho",
  "Shershaah", "Ludo", "Baahubali: The Beginning", "Baahubali 2: The Conclusion", "RRR", "KGF",
];

export const international = [
  "Parasite", "Roma", "Drive My Car", "All Quiet on the Western Front", "The Zone of Interest",
  "Another Round", "Crouching Tiger, Hidden Dragon", "Pan's Labyrinth", "Amour",
  "Cinema Paradiso", "Life Is Beautiful", "City of God", "Spirited Away", "Oldboy", "Burning",
  "Shoplifters", "Capernaum", "Cold War", "The Lives of Others", "A Separation",
  "The Sea Inside", "Departures", "A Fantastic Woman", "Ida", "Son of Saul", "The Salesman",
  "Portrait of a Lady on Fire", "Y Tu Mama Tambien", "Volver", "The Secret in Their Eyes",
  "Talk to Her", "Run Lola Run", "Das Boot", "Wings of Desire", "Seven Samurai", "Rashomon",
  "Tokyo Story", "Ikiru", "Yojimbo", "Bicycle Thieves", "La Dolce Vita", "8 1/2",
  "The 400 Blows", "Breathless", "Persona", "The Seventh Seal", "Andrei Rublev", "Stalker",
  "Solaris", "Battleship Potemkin", "Metropolis", "The Battle of Algiers", "Come and See",
  "Wild Strawberries", "Pather Panchali", "Aparajito", "Apur Sansar", "Charulata",
  "The Music Room", "Close-Up", "Taste of Cherry", "The White Ribbon", "Toni Erdmann",
  "The Hunt", "Force Majeure", "Incendies", "A Prophet", "Blue Is the Warmest Colour",
  "The Intouchables", "Amelie", "La Haine", "Train to Busan", "Memories of Murder",
  "The Handmaiden", "Mother", "Snowpiercer", "I Saw the Devil", "The Wailing",
  "Decision to Leave", "Past Lives", "Minari",
];

export const movieLibrary = [...hollywood, ...hindi, ...international];

// 20 randomized "I've watched it" replies. Casual, human, varied.
export const watchedMessages = [
  "Oops, already seen that one. Ngl, it was a great film.",
  "Haha yes, watched it. Solid pick, honestly.",
  "Already crossed that off the list. Loved it tbh.",
  "Seen it! That one stuck with me for a while.",
  "Oh that's a classic, watched it ages ago. Banger.",
  "Yep, done. Rewatched it more than once actually.",
  "Already watched it. Good taste, btw.",
  "Caught that one already. Genuinely enjoyed it.",
  "Seen it. Okay, we'd get along, great shout.",
  "Ahh I've seen this. Top tier, no notes.",
  "Already watched it. Finished it in one sitting.",
  "Yep, seen it. Bit underrated imo.",
  "Watched, loved, would recommend it right back to you.",
  "Already on my watched list. Great film, fr.",
  "Seen it twice actually. You've got taste.",
  "Oh I know this one. Watched and approved.",
  "Already seen it. That ending though.",
  "Yeah I've watched that. Stayed up way too late for it.",
  "Done and dusted. Great pick, honestly.",
  "Already seen it! You and I would vibe over movies.",
];

// Randomized "haven't seen it yet" replies.
export const notWatchedMessages = [
  "Dang, haven't watched it yet. Adding it to the list rn.",
  "Nope, missed that one. Will definitely give it a watch.",
  "Haven't seen it! Sounds like a weekend plan now.",
  "Not yet! Throwing it on my watchlist, thanks.",
  "Oof, slipped past me. I'll check it out for sure.",
  "Haven't caught that one. Noted, will watch soon.",
  "New to me! Appreciate the rec, adding it.",
  "Nah, not seen it yet. You might've just found my next watch.",
  "Haven't gotten to it. Will fix that soon, promise.",
  "Missed this one somehow. On the list now!",
  "Not yet, but you've got me curious. Will watch.",
  "Haven't seen it! Genuinely thanks for the suggestion.",
];

// --- fuzzy matching -----------------------------------------------------

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(new RegExp("[\\u0300-\\u036f]", "g"), "") // strip accents
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]/g, "") // drop spaces & punctuation
    .replace(/^(the|a|an)/, ""); // ignore leading article
}

const normalizedLibrary = movieLibrary.map(normalize);

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  if (Math.abs(m - n) > 3) return 99; // early bail for very different lengths
  const dp = Array.from({ length: m + 1 }, (_, i) => [i, ...Array(n).fill(0)]);
  for (let j = 0; j <= n; j += 1) dp[0][j] = j;
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[m][n];
}

// Returns true if the guess matches a film in the library (typo-tolerant).
export function isWatched(guess) {
  const q = normalize(guess);
  if (q.length < 2) return false;
  if (normalizedLibrary.includes(q)) return true;
  // allow small spelling mistakes, scaled to title length
  const tolerance = q.length <= 6 ? 1 : q.length <= 12 ? 2 : 3;
  return normalizedLibrary.some((title) => {
    if (Math.abs(title.length - q.length) > tolerance) return false;
    return levenshtein(q, title) <= tolerance;
  });
}

export function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
