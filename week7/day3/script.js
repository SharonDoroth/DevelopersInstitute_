// //reverse a single word
// function reverseWord(str) {
//     let returnStr = '';
//     //loop in reverse order
//     for(let i = str.legth-1; i >= 0; i--){
//         returnStr += str[i]
//     }
//     return returnStr
// }

// //console.log(reverseWord('given'));
// //get words from a given string
// function reverseAll(str){
//     let arr = str.split(" ");
//     console.log(arr);
//     let returnArr = [];
//     for(let i = 0; i < arr.length; i++){
//         returnArr.push(reverseWord(arr[i]));
//     }
//     return returnArr.join(' ');

// }

// console.log(reverseAll('reverse each word in a given String'));
//explanation

// function x(){

// }

// const getName = function(name){
//     return name;
// };
// getName('John');

// //es6
// //arrow function
// const getXY = (x, y) => x * y;

// getXY(3, 4);

// //forEach

// const arr = [1,4,5,6,7];

// arr.forEach( (item,indx,newarr) => {
//     console.log(item, indx);
//     newarr[indx] = item * 2
// })

// for (x in arr) {
//   console.log("for in=>", x, arr[x]);
// }

// for (x of arr) {
//   console.log("for of=>", x);
// }

// console.log("arr=>", arr);

//exercise
// const arr = [
//   { id: 1, name: "iPhone", price: 850 },
//   { id: 2, name: "iPad", price: 750 },
//   { id: 3, name: "iWatch", price: 650 },
// ];

// arr.forEach((obj) => {
//   console.log(obj.id, obj.name, obj.price);
// });

//some
// const arr = [1,2,3,4,5,6,7,8];
// let bol = arr.some( (item) =>{
//     return item == 2
// });
// console.log('bol=>', bol);

//const words = ["wow", "hey", "bye"];
//  const words = ["wow", "hey", "bye"];
//  let hExist = words.some((item) => item.includes('x'));
//  console.log('hExist=>',hExist)

//every
// let match = arr.every((item) => {
//     return item <= 8
// })
// console.log('every=>', match

function x(a){
    function y(b) {
        return a * b;
    }
    return y;
}

let cal = x(1.17);
const VAT = 1.15
console.log('call=>', x(VAT)(100));
console.log('call=>', x(VAT)(200));
console.log('call=>', x(VAT)(300));

//currying
const sum = (a) => (b) => a + b;
console.log(sum(4)(5));