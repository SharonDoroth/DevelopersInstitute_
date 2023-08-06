const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function pluralize(num) {
  return num === 1 ? "bottle" : "bottles";
}

function bottlesSong(num) {
  for (let i = 0; i < num; i++) {
    const bottlesRemaining = num - i;
    const bottlesToTake = i + 1;

    console.log(
      `\n${bottlesRemaining} ${pluralize(
        bottlesRemaining
      )} of beer on the wall,`
    );
    console.log(`${bottlesRemaining} ${pluralize(bottlesRemaining)} of beer.`);
    console.log(
      `Take ${bottlesToTake} down, pass ${pluralize(bottlesToTake)} around,`
    );

    const nextBottlesRemaining = bottlesRemaining - bottlesToTake;

    if (nextBottlesRemaining === 1) {
      console.log(`We have now 1 bottle of beer on the wall.\n`);
    } else if (nextBottlesRemaining === 0) {
      console.log(`No bottle of beer on the wall.\n`);
    } else {
      console.log(
        `We have now ${nextBottlesRemaining} ${pluralize(
          nextBottlesRemaining
        )} of beer on the wall.\n`
      );
    }
  }
}

console.log("Welcome to the Bottles Song Generator!");

rl.question("Enter the starting number of bottles: ", (startingBottles) => {
  if (isNaN(startingBottles) || startingBottles < 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  bottlesSong(startingBottles);
  rl.close();
});
