//Looping through an array
// const arr = [1,4,7,10];

// for (let i = 0; i < 4; i++) {
//     console.log(arr[1]);
// }


//Exercise1

// for (let i = 0; i < 16; i++) {
//     console.log(i);
//     if (i % 2 === 0) {
//         console.log(i+ " is even")
//     } else {
//         console.log(i + " is not even")
//     }
// }

//For In loop

// const person = { fname: "John", lname: "Smith", age: 25};
// for (let x in person) {
//     console.log("the key is " + x + " and the value is " + person[x]);
// }

// For of Loop - Strings and array

// const color = ["Blue", "Pink","Green","purple"];

// for (let i of color) {
//     console.log("I love the color " + i)
// }

//While Loop

// let n = 0;
// while (n < 3){
//     n++;
//     console.log(n);
// }
// let username=prompt ("What is your username?");

// while(username.length<4) {
//     username=prompt("Whats is your username?");
// }
// alert("Welcome "+ username)

//Do while loop

// let username;
// do{
//    let username = prompt("What is your username ");
// }while (username!== "daniel");

//The break keyword
// for (let i = 0; i < 10; i++) {
//     if ( i === 4) {
//         break;
//     }
//     console.log("The number is " + i)
// }

// // The continue statement
// for (let i = 0; i < 10; i++) {
//     if ( i === 3) {
//         continue;
//     }
//     console.log("The number is " + i)
// }

//Exercise 2
//1
// let names = [ "john", "sarah", 23, "Rudolf", 34];
// for ( let i = 0; i < names.length; i++ ) {
//     if (typeof names[i] !== "string") {
//         continue;
//     }
//     if (names[i][0] !== names[i][0].toUpperCase()){
//     names[i]= names[i][0].toUpperCase() + names[i].slice(1);
//     console.log(names[i]);
//     }
// }
// //2
// for (let i of names ) {
//     if (typeof i !== "string") {
//         break;
//     }
//     console.log(i);
// }

const myName = "Sharon";

for (let i = 0; i < 3; i++) {
    console.log(myName);
    if (myName === "Sharon") {
        console.log("inner condicional statment");
    }
}

//Another way easier
let name = "Lea";
let greetings = `Hello ${name}`;
console.log(greetings);