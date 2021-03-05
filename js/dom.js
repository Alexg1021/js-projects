// console.log(document);

// Selectors: Tool that allows us to grab data from our document.
// In the form of nodes, elements, etc.

// getElementById()
//let mainHeading = document.getElementById('main-heading');
// console.log(mainHeading);

// getElementsByClassName()
let rowClasses = document.getElementsByClassName('row');
// console.log(rowClasses);

// getElementsByTagName()
let divTags = document.getElementsByTagName('div');
// console.log(divTags);
let spanTags = document.getElementsByTagName('span');
// console.log(spanTags);

// querySelector()
let divContainer = document.querySelector('.container');
// console.log(divContainer);
let mainIdHeading = document.querySelector('#main-heading');
// console.log(mainIdHeading);
let spanTag = document.querySelector('span');
// console.log(spanTag);

let divTag = document.querySelector('div');
// console.log(divTag);

// querySelectorAll()
let allDivTags = document.querySelectorAll('div');
// console.log(allDivTags);

let allRowClasses = document.querySelectorAll('.row');
// console.log(allRowClasses);

let docObject = {
  html: {
    head: {},
    body: {
      nav: {},
      div: {
        div: {},
      },
      footer: {},
    },
  },
};

/*
Daily Coding Challenges
Movie List Challenges:
1. Create an array of objects of your 5 favorite movies
a. Each movie object should have the following properties:
    - title, year, genre, description, imdbRating (yeah, you will need to check imdb)
b. Create a function that when called loops through your array and console.logs
the details for each of your movie
c. Create a function that will find a movie by it's title 
and then console.logs the details of the movie. 
The function should take a movieTitle parameter that lets you find different movies

files to create: movie-list.html, movie-list.js
*/

// let paragraph = document.querySelector('#title');
// console.log(paragraph);
// let innerText = (paragraph.innerText = 'Words to live by');
// console.log(innerText);
// textContent
// let textContent = (paragraph.textContent = 'Replacing content from html doc');
// console.log(textContent);
// Can also use innerText
// paragraph.innerHT
// let divTesting = document.getElementById('testing');
// console.log(divTesting);

// let mySentence = 'A string that will be placed inside my div and strong tag';
// divTesting.innerHTML = `<strong> ${mySentence} </strong>`;

// let divTextNode = document.querySelector('#textNode');
// let textNode = document.createTextNode(
//   'This will be a text node. Add me to the doc'
// );
// divTextNode.appendChild(textNode);

let myList = document.querySelector('#my-list');
myList.className = 'list-group';

let listItem = document.createElement('li');
listItem.className = 'list-group-item';
// console.log(listItem);
listItem.textContent = 'this is my first list item';

let secondListItem = document.createElement('li');
secondListItem.className = 'list-group-item';
secondListItem.textContent = 'This is my second list item';
// let firstText = document.createTextNode('This is my first list item');
// listItem.appendChild(firstText);
myList.appendChild(listItem);
myList.appendChild(secondListItem);
