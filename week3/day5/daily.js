//1
// let pattern = "";
// for (let i = 1; i <= 5; i++) {
//   pattern += i + " ".repeat(i) + "\n";
// }

// console.log(pattern);

//2
let pattern = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += i + ' ';
  }
  pattern += '\n';
}

console.log(pattern);
