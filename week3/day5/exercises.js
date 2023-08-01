const people = ["Greg", "Mary", "Devon", "James"];

// Part I 

// 1
const indexOfGreg = people.indexOf("Greg");
if (indexOfGreg !== -1) {
  people.splice(indexOfGreg, 1);
}

// 2
const indexOfJames = people.indexOf("James");
if (indexOfJames !== -1) {
  people[indexOfJames] = "Jason";
}

// 3
const yourName = "Yourname";
people.push(yourName);

// 4
const indexOfMary = people.indexOf("Mary");
console.log("Mary's index:", indexOfMary);

// 5
const copyOfPeople = people.slice(1, -1);

// 6
const indexOfFoo = people.indexOf("Foo");
console.log("Index of Foo:", indexOfFoo);

// 7
const last = people[people.length - 1];
console.log("The last element of the array:", last);

const people = ["Greg", "Mary", "Devon", "James"];

const people = ["Greg", "Mary", "Devon", "James"];

// Part II - Loops

// 1
console.log("Iterating through the people array:");
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2
console.log('Iterating through the people array and exiting after "Devon":');
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

//Exercise 2
const colors = ["blue", "red", "green", "purple", "yellow"];
for (let i = 0; i < colors.length; i++) {
  let suffix;
  switch (i + 1) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
      suffix = "th";
  }
  console.log("My " + (i + 1) + suffix + " choice is " + colors[i]);
}


//Exercise 3
let userInput;
do {
  userInput = prompt("Enter a Number:");
} while (typeof userInput !== "number" || userInput < 10);


//Exercise 4
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log("Number of floors in the building:", building.numberOfFloors);

console.log(
  "Number of apartments on the first floor:",
  building.numberOfAptByFloor.firstFloor
);
console.log(
  "Number of apartments on the third floor:",
  building.numberOfAptByFloor.thirdFloor
);

const secondTenant = building.nameOfTenants[1];
console.log("Second tenant's name:", secondTenant);
console.log(
  "Number of rooms in his apartment:",
  building.numberOfRoomsAndRent[secondTenant][0]
);

const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];
const totalSarahDavidRent = sarahRent + davidRent;

if (totalSarahDavidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log("Dan's rent has been increased to 1200.");
}

//Exercise 5
const family = {
  padre: "Juan",
  madre: "Maria",
  hijo1: "Luis",
  hijo2: "Ana",
};

console.log("Keys of the object:");
for (let key in family) {
  console.log(key);
}

console.log("Values of the object:");
for (let key in family) {
  console.log(family[key]);
}

//Exercise 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
};

let message = '';

for (let key in details) {
  message += details[key] + ' ';
}

console.log(message.trim()); 

//Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const firstLetters = names.map(name => name[0]);
firstLetters.sort();

const secretSocietyName = firstLetters.join('');

console.log(secretSocietyName); 


