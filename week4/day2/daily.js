function createFrame(words) {
  const maxLength = Math.max(...words.map((word) => word.length));

  const border = "*".repeat(maxLength + 4);
  console.log(border);

  for (const word of words) {
    const spaces = " ".repeat(maxLength - word.length);
    console.log(`* ${word}${spaces} *`);
  }

  console.log(border);
}

const userInput = prompt("Enter several words separated by commas:");
const wordsArray = userInput.split(",").map((word) => word.trim());

console.log("The words in the frame:");
createFrame(wordsArray);
