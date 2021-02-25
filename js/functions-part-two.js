// Guess the Number

const guessTheNumber = () => {
  let correctAnswer = 7;
  //   debugger;
  for (let i = 0; i <= 2; i++) {
    let userAnswer = prompt(
      'Guess a number between 1 and 10: you get 3 guesses'
    );
    let verified = verifyNumber(userAnswer);
    if (verified) {
      alert('That is not a number, Fool!');
    } else if (userAnswer == correctAnswer) {
      alert('Correct! You win!');
      break;
    } else {
      alert('Wrong, try again');
    }

    if (i === 2) alert('You are out of guesses. You lose!');
  }
};

const verifyNumber = userInput => {
  return isNaN(userInput);
};
