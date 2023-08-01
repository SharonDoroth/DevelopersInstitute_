// let arr = ['a','b','c','d'];

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// let x = 0;
// while (x < arr.length) {
//     console.log(x, arr[x]);
//     x++;
// }
// let greterThanTen = true
// do {
//   const num = prompt('number')
//   if (!isNaN(num) && num > 10) {
//     if (num > 10) {
//       greterThanTen = false;
//     }
//   }
// } while (greterThanTen)
//     let star = ''
//     for(let j = 0; j <= i; j++) {
//         star = star +'*'
//     }
//     console.log(star);
// }

// let obj = {
//     one: 'a',
//     two: 'b',
//     three:'c'
// }

// for (x in obj) {
//     console.log (x, obj[x]);
// }

// for (x of arr) {
//     console.log(x);
// }

const names = ['Jack','Phillip','Sarah','Amanda','Bernad','Kyle'];

let newArr = [];
names = names.sort();

for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element[0]);
    newArr.push(element[0])
}
console.log(names);