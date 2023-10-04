import { people } from "./data.js";

function calculateAverageAge(peopleArray) {
  if (peopleArray.length === 0) {
    return 0; 
  }

  const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0);
  return totalAge / peopleArray.length;
}

const averageAge = calculateAverageAge(people);
console.log(`The average age of all people is: ${averageAge}`);
