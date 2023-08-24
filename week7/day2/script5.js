const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const ordinalIndex = index + 1 <= 3 ? index + 1 : 0;
  console.log(`${index + 1}${ordinal[ordinalIndex]} choice is ${color}.`);
});
