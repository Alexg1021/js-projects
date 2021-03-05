/*
Daily Coding Challenge: Movie List Challenge
1. Create an array of objects of your 5 favorite movies
a. Each movie object should have the following properties:
    - title, year, genre, description, imdbRating (yeah, you will need to check imdb)
b. Create a function that when called loops through your array and console.logs
the details for each of your movies
c. Create a function that will find a movie by it's title 
and then console.logs the details of the movie. 
The function should take a movieTitle parameter that lets you search by different titles
files to create: movie-list.html, movie-list.js
*/

let movies = [
  {
    id: 1,
    title: 'Kill Bill',
    description: 'Badass movie by Quentin Tarantino. Lots of blood!',
    year: 2003,
    genre: 'Action',
    imdbRating: 7.8,
    image:
      'https://m.media-amazon.com/images/M/MV5BNzM3NDFhYTAtYmU5Mi00NGRmLTljYjgtMDkyODQ4MjNkMGY2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
  {
    id: 2,
    title: 'Godzilla',
    year: '2014',
    genre: 'Action, Adventure, & Sci-Fi',
    description:
      'The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity.',
    imdb: 6.4,
  },
  {
    id: 3,
    title: 'Pacific Rim',
    year: '2013',
    genre: 'Action, Adventure, & Sci-Fi',
    description:
      'As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.',
    imdb: 6.9,
  },
  {
    id: 4,
    title: 'Avengers: Endgame',
    year: '2019',
    genre: 'Action, Adventure, & Drama',
    description:
      'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe.',
    imdb: 8.4,
  },
];
// Loop and console details
const movieDetails = () => {
  movies.forEach(m => {
    console.log(`My movie title is ${m.title} and it came out in ${m.year}`);
  });
};

movieDetails();

// Loop and find an instance by a parameter
const titleDetails = movieTitle => {
  // let foundMovie = movies.find(movie => {
  //     return movie.title === movieTitle;
  // })

  let foundMovie = movies.find(movie => movie.title === movieTitle);

  if (foundMovie) console.log(foundMovie);
  else console.log(`Could not find ${movieTitle}`);
};

titleDetails('Kill Bill');
titleDetails('Godzilla');
titleDetails('Pacific Rim00');
