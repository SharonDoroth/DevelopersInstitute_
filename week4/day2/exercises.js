//Exercise 1
// Part I
function infoAboutMe() {
  const name = "John";
  const age = 30;
  const hobbies = "playing guitar and reading";

  console.log(
    "My name is " +
      name +
      ", I am " +
      age +
      " years old, and my hobbies are " +
      hobbies +
      "."
  );
}

infoAboutMe();
// Part II

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log("Your name is " + personName + ", you are " + personAge + " years old, and your favorite color is " + personFavoriteColor + ".");
}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");


//Exercise 2
function calculateTip() {
  const billAmount = parseFloat(prompt("Enter the amount of the bill:"));

  let tipPercentage;
  if (billAmount < 50) {
    tipPercentage = 0.2; 
  } else if (billAmount >= 50 && billAmount <= 200) {
    tipPercentage = 0.15; p
  } else {
    tipPercentage = 0.1; 
  }

  const tipAmount = billAmount * tipPercentage;
  const totalBill = billAmount + tipAmount;

  console.log("Tip amount: $" + tipAmount.toFixed(2));
  console.log("Final bill (including tip): $" + totalBill.toFixed(2));
}

calculateTip();

//Exercisio 3
function isDivisible() {
  let sum = 0;
  let divisibleNumbers = [];

  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i);
      divisibleNumbers.push(i);
      sum += i;
    }
  }

  console.log("Sum:", sum);
}

isDivisible();

//Exercisio 4
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let totalBill = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      totalBill += prices[item];
      stock[item] -= 1;
    }
  }

  return totalBill;
}

const totalPrice = myBill();
console.log("Total:", totalPrice);

//Exercisio 5
function changeEnough(itemPrice, amountOfChange) {
  const quarters = amountOfChange[0] * 0.25;
  const dimes = amountOfChange[1] * 0.10;
  const nickels = amountOfChange[2] * 0.05;
  const pennies = amountOfChange[3] * 0.01;

  const totalChange = quarters + dimes + nickels + pennies;

  return totalChange >= itemPrice;
}

const itemPrice = 4.25;
const amountOfChange = [25, 20, 5, 0];
const canAffordItem = changeEnough(itemPrice, amountOfChange);
console.log(canAffordItem); 
//Verdadeiro

//Exercisio6
function hotelCost() {
  let numberOfNights;
  while (true) {
    numberOfNights = parseInt(
      prompt("Enter the total nigths for the hotel:")
    );
    if (!isNaN(numberOfNights)) {
      break;
    }
  }

  const hotelPricePerNight = 140;
  return numberOfNights * hotelPricePerNight;
}

function planeRideCost() {
  let destination;
  while (true) {
    destination = prompt(
      "Enter your destination (Grecia, Malta, etc):"
    );
    if (typeof destination === "string" && destination.trim() !== "") {
      break;
    }
  }

  switch (destination.toLowerCase()) {
    case "grecia":
      return 183;
    case "malta":
      return 220;
    default:
      return 300;
  }
}

function rentalCarCost() {
  let numberOfDays;
  while (true) {
    numberOfDays = parseInt(
      prompt("Number of the days that you want to rent the car:")
    );
    if (!isNaN(numberOfDays)) {
      break;
    }
  }

  const carPricePerDay = 40;
  let totalCarRentalCost = numberOfDays * carPricePerDay;

  if (numberOfDays > 10) {
    totalCarRentalCost *= 0.95; 
  }

  return totalCarRentalCost;
}

function totalVacationCost() {
  const hotelCost = hotelCost();
  const planeRideCost = planeRideCost();
  const rentalCarCost = rentalCarCost();
  const totalCost = hotelCost + planeRideCost + rentalCarCost;

  console.log(
    "The car cost: $" +
      rentalCarCost +
      ", the hotel cost: $" +
      hotelCost +
      ", the plane tickets cost: $" +
      planeRideCost +
      "."
  );
  return totalCost;
}

