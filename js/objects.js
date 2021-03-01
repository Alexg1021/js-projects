/****** Objects Notes *******/

let firstObject = new Object();
// console.log(firstObject);

let person = {
  name: 'LizBest',
  hobby: 'Coding',
  age: 21,
  isAwesome: true,
  favoriteFruits: ['jackfruit', 'oranges', 'bananas'],
  'likes running': 'no not really',
  pet: {
    type: 'cat',
    name: 'Mittens',
    age: 2,
  },
};

// console.log(person.favoriteFruits);
// console.log(person['name']);
// console.log(person['likes running']);
// console.log(person.pet.name);

// Object Properties

// delet obj.prop
delete person.hobby;
// console.log('personnnnnn', person);

// key in obj
// console.log('name' in person);

// for(let key in obj)
for (let key in person) {
  //   debugger;
  // console.log('the key name is: ', key);
  // console.log('this key value is: ', person[key]);
}

let alertArray = ['first val', 'second val', 'third val'];

// alert(person.name + ' ' + person.age);

// Arrays and Objects

let animals = [
  {
    type: 'Cat',
    name: 'Mr. Bojangles',
    isEvil: true,
  },
  {
    type: 'Dog',
    name: 'Bob',
    isEvil: false,
  },
  {
    type: 'Bird',
    name: 'Doug',
    isEvil: true,
  },
];

// Higher Order array Methods
// forEach()
animals.forEach(function (animal) {
  //   debugger;
  // console.log('my animal name', animal['name']);
});

// arr.map()
let animalTypes = animals.map(animal => {
  // ['cat', 'dog', 'bird']
  //   console.log('inside the map func', animal);
  return animal.type;
});
// console.log('Animal Types: ', animalTypes);

// arr.filter()
let evilAnimals = animals.filter(animal => {
  // check if isEvil property is true
  // if it is, return that animal
  return animal.isEvil === true;
});
// console.log('these are the evil animals', evilAnimals);

let evilAnimalNames = animals
  .filter(animal => {
    return animal.isEvil === true;
  })
  .map(evilAnimal => {
    return evilAnimal.name;
  });

// console.log('My evil animal names: ', evilAnimalNames);

// create a for loop that iterates through the animals array
//  and console logs each animal name

// console.log('name in animals');
// for (let key in animals) {
//   console.log('====the key name is: ', key);
//   console.log('====this key value is ', animals[key].name);
// }

// for (let key in animals) {
//   console.log('>>>>>>>>this key value is ', animals[key].name);
// }

// for (let i = 0; i < animals.length; i++) {
//   console.log('+++++++', animals[i].name);
// }

// MORNING CHALLENGE: ARRAY METHODS
let items = [
  { name: 'Huffy X27', price: 100, category: 'fitness' },
  { name: 'The Alchemist', price: 15, category: 'books' },
  { name: 'Snuggy', price: 10, category: 'home' },
  { name: 'Macbook Pro', price: 1500, category: 'technology' },
  { name: 'Peloton', price: 2000, category: 'fitness' },
  { name: 'iPad Pro', price: 800, category: 'technology' },
  { name: 'Ember Coffee Mug', price: 80, category: 'home' },
  { name: 'Electric Wine Bottle Opener', price: 20, category: 'home' },
];
// - Loop through the items, console.log the price with a concatenated string that let’s the user know the total price
// - Create a new array using the map method, that returns all the names of each item
// - Create a new array using the filter method that returns all the items that are less than 100
// - Using the find method loop through the array and return the laptop item setting it to a variable
// - Chaining the filter and map method together, loop through the items, filter by items that are more than 100, then using the map method, create a new array of the names of those items

// For Each Method
items.forEach(item => {
  // console.log('The total for the ' + item.name + ' is: $' + item.price);
});
items.forEach(item => {
  // console.log(`The backtic total for the ${item.name} is: $${item.price}`);
});

// Challenge Two: Map Method
const itemNames = items.map(item => {
  return item.name;
});
console.log(itemNames);

const itemNames2 = items.map(item => item.name);
console.log(itemNames2);

// Filter Method
const cheapItems = items.filter(item => {
  return item.price < 100;
});

const cheapItems2 = items.filter(item => item.price < 100);

console.log(cheapItems);
console.log(cheapItems2);

// Find Method
const foundItem = items.find(item => {
  return item.name === 'Macbook Pro';
});
console.log(foundItem);

// Chaining Methods
const expensiveItems = items
  .filter(item => {
    return item.price > 100;
  })
  .map(exp => {
    // debugger;
    return exp.name;
  });

const expensiveItems2 = items
  .filter(item => item.price > 100)
  .map(ex => {
    return { price: ex.price, name: ex.name };
  });

console.log(expensiveItems);
console.log(expensiveItems2);
