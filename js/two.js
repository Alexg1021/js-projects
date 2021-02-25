/***
 * JS: Part Two
 * - Operators
 * - Control Flow
 * - Functions
 */
// Comparison Operators
let value1 = 35;
let value2 = 100;
let value3 = 500;

console.log('Does Value 1 not equal value 2? ', value1 !== value2); //true

console.log('is value 1 greater than or equal to value 2? ', value1 >= value2); //true

// Logical &&
// in order for the result to be true, all conditions must be met with true
console.log(
  'are my two conditions true or false ',
  value1 > value2 && value1 !== value2
);

// Logical ||
console.log(
  'Logical ||: Are my two conditions true or false ',
  value1 > value2 || value1 !== value2
);

// Combining Logical || and Logical &&

console.log(
  'Combining || &&:" What is the result ',
  (value1 > value2 || value1 !== value2) && value2 > value3
);

/********** Control Structures **********/

// If/Else

let numberOne = 100;
let numberTwo = 445;
let numberThree = 200;

// if (numberOne > numberTwo) {
//   alert('You are correct!');
// } else {
//   alert('Sorry its not greater than :(');
// }

// If, Else If, Else

// When first condition is met, the code pulls out and returns
// if (numberOne < numberTwo && numberOne !== numberThree) {
//   alert('You are Baws!');
// } else if (numberTwo > numberOne) {
//   alert('Two for two');
// }
//else {
//   alert('You are still Baws!');
// }

/********** Ternary *********/
// [if condition = true] ? (run this code()) : (run this code())
// [condition] ? statement1 : statement2;

let age = 25;

// age >= 21
//   ? alert(' Have fun, be safe!')
//   : alert(" Sorry come back when you're older!");

// ===== Loops
// Count up
// for (let i = 0; i < 20; i++) {
//   // Render the number 10
//   if (i === 10) {
//     console.log('THE NUMBER: ', i);
//   }
// }

// create a for loop that counts by 10 up to 100
// Console.log should start at 0 and end at 100
// for (let i = 0; i < 101; i += 10) {
//   console.log('Pravalika counts: ', i);
// }

// for (let i = 0; i < 101; i++) {
//   if (i === 10 || i === 20 || i === 30) {
//     console.log('Britt says', i);
//   }
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i * 10);
// }

// for (let i = 0; i <= 100; i++) {
//   if (i === 50) {
//     // end the loop!!
//     console.log(i);
//     break;
//   } else {
//     console.log(i);
//   }
// }

// Count down
// for (let i = 20; i > 0; i--) {
//   console.log('my downward counter: ', i);
// }

// While loop
// let i = 0;

// while (i < 10) {
//   console.log(i);
//   i++;
// }

// Do While
let j = 0;
// do {
//   console.log('this is j, ', j);
//   j++;
// } while (j < 10);

/*====== Switch Statements =======*/
let animal = 'cow';

// switch (animal) {
//   case 'dog':
//     alert("It's a dog!"); // my code
//     break;
//   case 'cat':
//     alert("It's a cat!");
//     break;
//   case 'monkey':
//     alert("it's a monkey");
//     break;
//   default:
//     alert("Doesn't match :/");
// }

/*====== Functions =======*/
function firstFunction() {
  console.log('this is my first function');
  return;
}

// firstFunction();
let i = 0;
function countDown() {
  let num1 = 15;
  let num2 = 20;
  for (i = 10; i >= 0; i--) {
    console.log('counting from inside my function! ', i);
  }
}
// countDown();

// Arrow Function Expressions
const doMath = () => {
  let num1 = 25;
  let num2 = 20;
  console.log('my sum of nums: ', num1 + num2);
};
// doMath();
// const startMath = () => {
//   let firstValue = 20;
//   let secondValue = 30;
//   sumNumbers();
// };

const sumNumbers = (bob, sue, jill) => {
  debugger;
  console.log('Sum of numbers: ', bob + sue + jill);
};

sumNumbers(100, '', 10);
