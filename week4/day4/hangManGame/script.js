const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayWord(word, guessedLetters) {
  let displayed = "";
  for (const letter of word) {
    if (guessedLetters.includes(letter)) {
      displayed += letter;
    } else {
      displayed += "*";
    }
  }
  return displayed;
}

function playHangman(player1Word) {
  let guessedLetters = [];
  let incorrectGuesses = 0;

  console.log("\nWord to guess:");
  let currentDisplay = displayWord(player1Word, guessedLetters);
  console.log(currentDisplay);

  rl.on("line", (input) => {
    const player2Guess = input.toLowerCase();

    if (player2Guess.length !== 1) {
      console.log("Please enter a single letter.");
      return;
    }

    if (guessedLetters.includes(player2Guess)) {
      console.log("You've already guessed that letter.");
      return;
    }

    guessedLetters.push(player2Guess);

    if (player1Word.includes(player2Guess)) {
      currentDisplay = displayWord(player1Word, guessedLetters);
      console.log(currentDisplay);

      if (!currentDisplay.includes("*")) {
        console.log("\nCONGRATS! Player 2 wins! The word was:", player1Word);
        rl.close();
        return;
      }
    } else {
      incorrectGuesses++;
      console.log(
        `Incorrect guess. You have ${10 - incorrectGuesses} chances left.`
      );

      if (incorrectGuesses === 10) {
        console.log("\nSorry, Player 2. You lose. The word was:", player1Word);
        rl.close();
        return;
      }
    }

    console.log("\nGuesses so far:", guessedLetters);
  });
}

console.log("Welcome to Hangman!");

rl.question(
  "Player 1, please enter a word with a minimum of 8 letters: ",
  (player1Word) => {
    if (player1Word.length < 8) {
      console.log("Word must have a minimum of 8 letters.");
      rl.close();
      return;
    }

    playHangman(player1Word);
  }
);
