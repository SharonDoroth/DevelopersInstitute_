//JAVASRIPT CONDICIONAILS
//IF
//ELSE IF
//ELSE
//SWITCH


// let x = 8;
// let y = 6;
// if (x < y ){
//     console.log('Hello condition');
// }
// else if (x !== 8){
//     console.log('equal to 8');
// }
// else if(y === 6){
//     console.log('equal to 6');
// }
// else {
//     console.log('opps')
// }
// console.log('bla bla');

// let DRIVER_AGE = 18;
// let age = prompt('What is your age?');

// if(!isNaN(age)){
//     if (age < DRIVER_AGE){
//     alert('Sorry, you are too young to drive this car. Powering off');
// } else if(age == DRIVER_AGE){
//     alert('Congratulations on your first year of driving. Enjoy the ride!');
// } else {
//     alert('Powering On. Enjoy the ride!');
// }
// }
// else{
//     alert('Please enter a valid age');
// }

//JAVASCRIPT DATA STRUTUCTRES
//---------------
//ARRAY
//Object

// let arr = []

// let user = {
//     name: 'John',
//     email: 'john@gmail.com',
//     age: 18,
//     fav: ['Apple','Banana'],
//     address: {
//         city:'Tel Aviv',
//         country: 'Israel'
//     },
//     getAge: function () {
//         alert(18);
//     },
// };

// user.name = 'Johny';
// user['email'] = 'johny@gmail.com';
// console.log(user.name);

// console.log(user);

//Exercise
let user = {
    username:'lana',
    password:'lana123'
}

let database = [user]

let newsfedd = [
    {username:'lana1', timeline:'date0'},
    {username:'lana2', timeline:'date1'},
    {username:'lana3', timeline: 'date2'},
]
console.log(user);
console.log(database);
console.log(newsfeed);