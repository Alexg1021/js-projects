/******
 * Fun with Functions
 *
 * ********/
//  Basic form
function showMyName(firstName, lastName) {
  // setting my variables
  //  concat my two parameters to form one new string
  let fullName = firstName + ' ' + lastName;

  //   use the console.log to render fullName
  console.log('You are: ', fullName);
}
// debugger;
showMyName('Alex', 'Gutierrez');

/*
Function that multiplies two nums together
*/
function multiplyTwoNumbers(firstNumber, secondNumber) {
  // take the passed in parameters and multiply
  // setting to a new variable
  let multipliedNumbers = firstNumber * secondNumber;

  // console.log the result
  console.log('These numbers are multiplied! ', multipliedNumbers);
}
multiplyTwoNumbers(15, 13);

/** Arrow Function Expression **/
// Base function syntax
function basicSyntaxFunction() {}

// Arrow funtion syntax
const countToTenFromNewStartingPoint = startingNumber => {
  // First check number to see if less than 10
  // If less than 10, start loop
  // else let user know
  //   debugger;
  if (startingNumber <= 10) {
    // create a for loop that counts to 10
    for (startingNumber; startingNumber <= 10; startingNumber++) {
      // console.log i
      //   console.log(startingNumber);
    }
  } else {
    alert('The number is larger than 10');
  }
};
countToTenFromNewStartingPoint(5);

let someVariable = 'this is a string';
const unchangeableString = 'Cant change this';
const anArrowFunction = (param1, param2) => {
  console.log(param1, param2);
};

// Function that alerts user a welcome with first and last name
const welcomeNewUser = () => {
  debugger;
  // initialize your variables
  // set name variables and welcome message
  let firstName = 'Alex';
  let lastName = 'Gutierrez';
  let welcomeMessage = 'Hey there, ';
  let fullMessage = welcomeMessage + firstName + ' ' + lastName;

  //   Alert to render the concat name with fullMessage
  alert(fullMessage);
};

// Add a button to your html page
// tied to a function
// function alerts your user with your favorite animal
const showMyFavoriteAnimal = () => {
  let animal = 'Dog';

  alert('My Favorite Animal is a ' + animal);
};

const getUserName = () => {
  // prompt the user for their name
  // bind that value to a variable
  // render a welcome message

  debugger;
  let userName = prompt("Hey, what's your name?");

  alert('Welcome, ' + userName);
};

getUserName();
