//Exercise 01
// function compareToTen(num) {
//   return new Promise((resolve, reject) => {
//     if (num <= 10) {
//       resolve(`${num} is less than or equal to 10`);
//     } else {
//       reject(`${num} is greater than 10`);
//     }
//   });
// }

// compareToTen(15)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// compareToTen(8)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));


//Exercise 02
// function delayedResolve() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("success");
//     }, 4000);
//   });
// }

// delayedResolve()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));


//Exercise 03
// const resolvedPromise = new Promise((resolve) => {
//   resolve(3);
// });

// const rejectedPromise = new Promise((_, reject) => {
//   reject("Boo!");
// });

// resolvedPromise
//   .then(result => console.log("Resolved:", result))
//   .catch(error => console.error("Error:", error));

// rejectedPromise
//   .then(result => console.log("Resolved:", result))
//   .catch(error => console.error("Error:", error));


//Exercise 04
//Not Mandatory :)