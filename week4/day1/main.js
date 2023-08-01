// function showMessage(){
//     console.log('Hello Students')
// }

// showMessage();

//Exercicio1

// function myAge(age){
//     console.log(age * 2);
//     console.log(age * 2 * 1.2);
// }
// myAge(2);

// function getFullName(firstName,lastName) {
//     //console.log(firstName);
//     return firstName + " " + lastName
// }

// let name = getFullName('John', 'Due');

// console.log('name=>', name);

// let name = getFullName("John", "Due", "Tel Aviv");
// console.log("name=>", name);

// function getFullName(firstName, lastName) {
//   //   console.log(firstName);
//   /// address
//   //  let arr = []
//   //  arr.push(firstName + " " + lastName)
//   //  arr.push(address)
//   let myAddress = getAddress();

//   let obj = {
//     fullName: firstName + " " + lastName,
//     addres: myAddress,
//   };
//   return obj;
// }

// function getAddress() {
//   return 1 + 2;
// }

//Exercicio2
// function getMumAge(age){
//     return age * 2;
// }

// function getDadAge(age){
//     let mum = getMumAge(age);
//     return mum * 1.2;
// }

// function getMumDad(age){
//     let mum = getMumAge(age);
//     let dad = getDadAge(age);
//     console.log(mum,dad);
// }

// getMumDad(28);

//exercicio3
function checkAge(age) {
  if (age >= 18) {
        return true;
      } else {
        return false;
      }
    }
    let userAge = prompt('How old are you?')

    let isAge = checkAge(userAge);
    
    if(isAge){
        console.log('Access granted');
    }
    else {
        console.log('Access denied')
    }