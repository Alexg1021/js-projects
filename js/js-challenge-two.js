// Exercise 3: Verify a users age
const verifyUserAge = () => {
  const userAge = prompt('Hey there! Please enter your age to enter');

  //   debugger;
  //   if (userAge < 13) {
  //     alert("Sorry, you're not old enough to enter :(");
  //   } else {
  //     alert('Hey, welcome to the site!');
  //   }
  userAge < 13 ? alert('Sorry, not old enough') : alert('Hey, welcome!');
};

// verifyUserAge();

// Exercise 4: Celsius to Fahrenheit
const convertCelsiusToFahrenheit = () => {
  let userTemperature = prompt('Please enter a temperature in celsius');
  let tempInFahrenheit = userTemperature * 1.8 + 32;
  alert('It is ' + tempInFahrenheit + '*F outside!');
};

// convertCelsiusToFahrenheit(30);
// convertCelsiusToFahrenheit(15);
// convertCelsiusToFahrenheit(50);

// Exercise 5: guess the number

const guessTheNumber = () => {
  let correctAnswer = 7;
  //   debugger;
  for (let i = 0; i <= 2; i++) {
    let userAnswer = prompt(
      'Guess a number between 1 and 10: you get 3 guesses'
    );
    if (userAnswer == correctAnswer) {
      alert('Correct! You win!');
      break;
    } else {
      alert('Wrong, try again');
    }

    if (i === 2) alert('You are out of guesses. You lose!');
  }
};
