/****** Objects Notes *******/

let firstObject = new Object();
console.log(firstObject);

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

console.log(person.favoriteFruits);
console.log(person['name']);
console.log(person['likes running']);
console.log(person.pet.name);

// Object Properties

// delet obj.prop
delete person.hobby;
console.log('personnnnnn', person);

// key in obj
console.log('name' in person);

// for(let key in obj)
for (let key in person) {
  //   debugger;
  console.log('the key name is: ', key);
  console.log('this key value is: ', person[key]);
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
  console.log('my animal name', animal['name']);
});

// arr.map()
let animalTypes = animals.map(animal => {
  // ['cat', 'dog', 'bird']
  //   console.log('inside the map func', animal);
  return animal.type;
});
console.log('Animal Types: ', animalTypes);

// arr.filter()
let evilAnimals = animals.filter(animal => {
  // check if isEvil property is true
  // if it is, return that animal
  return animal.isEvil === true;
});
console.log('these are the evil animals', evilAnimals);

let evilAnimalNames = animals
  .filter(animal => {
    return animal.isEvil === true;
  })
  .map(evilAnimal => {
    return evilAnimal.name;
  });

console.log('My evil animal names: ', evilAnimalNames);

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
