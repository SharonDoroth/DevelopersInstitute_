// const numbers = [5,3,7,3,6,8,6];
// const result = Math.min(...numbers);

// console.log("The smallest distance between is: " + result);

// let arr = [1,2,3,4];

// const newArr = arr.map((item) =>{
//     // if(item === 2){
//         return item * 2;
//     //}
// });
// console.log("map=>",newArr);

// let users = ['Eli','Adam','Dan','John'];
// //["eli@gmail.com", "adam@gmail.com", "dan@gmail.com", "john@gmail.com"];
// const emails = users.map((item) => {
//     return item + "@gmail.com";
// });
// console.log(emails);

// const people = [
//     { firstName: 'John', lastName: 'Doe' },
//     { firstName: 'Jane', lastName: 'Smith' },
//     { firstName: 'Michael', lastName: 'Johnson' }
// ];

// const fullnamw = people.map(item => {
//     return item.firstName + "," + item.lastName;
// })
// //["Doe, John", "Smith,Jane","Johnson,Michael"]

// function findGreater(arr, elem) {
//     let newArr = []
//     arr.array.forEach((element) => {
//         if(element > 3){
//         newArr.push(element)
//     }
// });
// console.log(filter([0, 1, 1, 2, 3, 5, 8]));

// return newArr
// }
// let arr =[0,1,1,2,3,5,8]
// const filtered = arr.filter(item => {
//     return item > 3;
// })

// const dragons = ['Tim','Johnathan','Sandy','Sarah'];
// const filtered = dragons.filter(item => item.toLowerCase().includes("sa"));

//Exercise - Create a funtion that get an array of numbers as input and return the sum of all numbers
// function sum(numArray) {
//   let add = 0;
//   for (let a = 0; a < numArray.length; a++) {
//     let Addindex = numArray[a];
//     add += Addindex;
//   }
//   return add;
// }

// console.log(sum([2, 5, 10, 100]));

// //jeito diferente
// let arr = [2, 5, 10, 100];
// const total = arr.reduce((total, item) => {
//     return total + item
// },0)
// console.log('total=>' ,total);

// //exercicio - find the index elemente with firstName == Jane
// const people = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" },
//   { firstName: "Michael", lastName: "Johnson" },
// ];


// const index = people.find((item) => item.firstName === "Jane");
// console.log("index=>", index);

// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function calcDigit(num) {
    let arr = new String(num).split("");
    let sum = 0;
    for(x in arr) {
        sum += Number(arr[x])
    }
    if(sum < 10) return sum;
    console.log(sum)
    return calcDigit(sum)
}

function calcDigit2(num) {
    let arr = new String(num).split("");
    let sum = arr.reduce((total,n)=>{
        return total + Number(num)
    },0)
    return(sum , 10) ? sum : calcDigit2(sum)
}

console.log(calcDigit2(132189))