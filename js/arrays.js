/****** Arrays Notes ********/

// Strings Properties and Methods

let firstString = 'Hello World';
firstString = '  Hello Universe  ';
let wordsString = 'meow, oomf, yikes, whoa';

console.log(firstString);
console.log(firstString.length);

console.log(firstString.indexOf('o'));
console.log(firstString.trim().toLowerCase().split(' '));
console.log(firstString.toUpperCase());
console.log(firstString.toLowerCase());
console.log(firstString.substring(0, 5));
console.log(firstString.substring(6, 18));
console.log(firstString.split(' '));
console.log(wordsString.toUpperCase().split(', '));

// Arrays

let firstArray = new Array(1, 2, 3, 4); // [1, 2, 3, 4]
console.log('first array: ', firstArray);
let coolerArray = [10, 20, 30, 40];
console.log('cooler array: ', coolerArray);

let fruits = ['Apples', 'Oranges', 'Plums', 'Jackfruit'];

console.log(fruits);
console.log(fruits[1]);
console.log('I like ' + fruits[1] + ' and ' + fruits[2]);

fruits.push('Mangoes', 'Peaches');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift('Tacos');
console.log(fruits);

fruits.shift();
console.log('removing tacos', fruits);

console.log('how many items in my fruits array?', fruits.length);

let emptyArray = [];
console.log(emptyArray.length);
if (emptyArray.length !== 0) {
  console.log('No items in empty array!');
}

fruits.push('Watermelons');
fruits.unshift('Cherries');

for (let i = 0; i < fruits.length; i++) {
  //   debugger;
  console.log(fruits[i]);
}

// Create an array of your top 5 movies
// create a loop that console.logs each of those movies
// use toUpperCase() to console.log all movies in all caps
let movies = [
  'Black Dynamite',
  'Zoolander',
  'Akira',
  'Grave of the Fireflies',
  'Midsommar',
];
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].toUpperCase());
}

let alexMovies = [
  'kill bill 1/2',
  'the gentlemen',
  'Inglorious Basterds',
  'Big Hero 6',
  'The Family Stone',
];

let j = 0;
while (j < alexMovies.length) {
  console.log(alexMovies[j].toUpperCase());
  j++;
}

let alexBritMovies = alexMovies.concat(movies);
console.log(alexBritMovies);

let mixedArray = ['string', 1, false];

console.log(mixedArray);
