//Exercise1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
 
fruits.shift()

fruits.sort();

fruits.push('Kiwi');

let index = fruits.indexOf('Apple');
fruits.splice(index,1);

fruits.reverse();

console.log(fruits);

//Exercise2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let x = moreFruits[0];
console.log(x);

let y = moreFruits[1][1][0];
console.log(y);
