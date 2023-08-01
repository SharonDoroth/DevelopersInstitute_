function compareNumbers(userNumber, computerNumber) {
  if (userNumber === computerNumber) {
    alert("WINNER");
  } else if (userNumber > computerNumber) {
    alert("Your number is bigger than the computer's, guess again");
  } else {
    alert("Your number is smaller than the computer's, guess again");
  }
}

function playTheGame() {
  const play = confirm("Do you want to play the game?");
  if (!play) {
    alert("No problem, Goodbye ;(");
    return;
  }

  let userNumber;
  while (true) {
    const userInput = prompt("Enter a number between 0 and 10:");
    userNumber = parseInt(userInput);

    if (isNaN(userNumber)) {
      alert("Sorry, Not a number. Goodbye :-");
      return;
    }

    if (userNumber >= 0 && userNumber <= 10) {
      break;
    } else {
      alert("Sorry, it's not a good number. Goodbye u-u");
      return;
    }
  }

  const computerNumber = Math.floor(Math.random() * 11);

  let guessCount = 0;
  while (guessCount < 3) {
    guessCount++;
    if (compareNumbers(userNumber, computerNumber)) {
      break;
    }
    userNumber = parseInt(prompt("Enter a new number between 0 and 10:"));
  }

  if (guessCount === 3) {
    alert("Out of chances @-@");
  }
}
