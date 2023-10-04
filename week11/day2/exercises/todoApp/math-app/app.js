const _ = require("lodash");

const math = require("./math");

const result1 = math.add(5, 3);
const result2 = math.multiply(4, 6);
const result3 = _.capitalize("hello lodash");

console.log(`Addition Result: ${result1}`);
console.log(`Multiplication Result: ${result2}`);
console.log(`Lodash Capitalization Result: ${result3}`);
// Need to erase   "type": "module", from package.json