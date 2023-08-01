//Exercise 1
let x = 10;
let y = 7;

if (x > y) {
  console.log("x is bigger than y");
} else if (x < y) {
  console.log("y is bigger than x");
} else {
  console.log("x and y are equal");
}


//Exercise 2
let newDog = "Chihuahua";
// console.log("Number of letters in newDog: " + newDog.length);

// console.log("Uppercase: " + newDog.toUpperCase());
// console.log("Lowercase: " + newDog.toLowerCase());

if (newDog === "Chihuahua") {
  console.log("I love Chihuahuas, it's my favorite dog breed");
} else {
  console.log("I don't care, I prefer cats");
}

//Exercise 3
let userInput = prompt("Please enter a number:");

let number = Number(userInput);

if (Number.isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else if (number % 2 === 0) {
  console.log(number + " is an even number.");
} else {
  console.log(number + " is an odd number.");
}


//Exercise 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

if (users.length === 0) {
  console.log("no one is online");
} else if (users.length === 1) {
  console.log(users[0] + " is online");
} else if (users.length === 2) {
  console.log(users[0] + " and " + users[1] + " are online");
} else {
  const aditionalUsers = users.length - 2;
  console.log(
    users[0] + ", " + users[1] + ", and " + aditionalUsers + " more are online"
  );
}
