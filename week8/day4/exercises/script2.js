function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}

const fullName = displayStudentInfo({ first: "Elie", last: "Schoppik" });
console.log(fullName); 
