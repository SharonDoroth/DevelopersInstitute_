// Variables

//let
//const
//var

/*
JavaScript types
1.String
2.Number
3.Boolean
*/

//1.String
// let first_name = 'John';
// let last_name = 'Due';
// let full_name = first_name + " " + last_name;
// console.log(full_name);

//let long_string = "Please go out and search for me"

//String methods: 
//Length
// console.log(full_name.length)
//IndexOf
// let pos = full_name.indexOf(" ");
// console.log(pos);
//Search
// let pos = long_string.search("out and");
// console.log(pos);
//Slice
// let str = "Apple, Banana, Kiwi";
// let res = str.slice(-12,-6);
// console.log(res);
//substring
//substr
//Replace

// let str = "Please visit Microsoft";
// let new_str = str.replace("Microsoft", "Developer Institute");
// console.log(new_str);

//toUpperCase()
//toLowerCase()

//console.log(str.toLowerCase());
//console.log(str.toUpperCase());


// let txt1 = "Hello";
// let txt2 = "World";
// let txt5 = "!!!";
// let txt3 = txt1 + " " + txt2 + txt5;

// let txt4 = txt1.concat(" ",txt2,txt5);

// console.log(txt3, txt4);

//trimLeft
//trimRigth
//trim

// let str = "     Hello     ";
// console.log(str.trimLeft());
// console.log(str.trimRight());
// console.log(str.trim());

//Exercice
// let addressNumber = 2;
// let addressStreet = "Lotus Cauli";
// let country = "Netherlands";
// let globalAddress = "I live in " + addressStreet +" " + addressNumber + ","+"in " + country;
// console.log(globalAddress);

//Number
// let num1 = 6;
// let num2 = 7;
// let num3 = num1 + num2;
// console.log(num3);

//toString
// let str = num3.toString();
// console.log(num3);

// let str1 = new String(num3);
//toFixed()
//console.log(num3.toFixed(5));

//toPrecision()
//console.log(num3.toPrecision(4));

// let x = Number("12")
// parseInt("10.33") => 10.33
// parseFloat("10.33") => 10.33

//3.Boolean

//True/False
// let bol = Boolean(2>2);
// bol = false;


//JAVASCRIPT DATA STRUCTURES
//Array

// let fruit1 = "banana";
// let fruit2 = "orange";
// let fruit3 = "apple";

// let arr = [];
// let arr2 = new Array();

// let fruits = ["banana","orange","apple","mango"];
// let fruits2 = ["apple","mango"];
//let fruits4 = ["watermelon","kiwi"];

//slice
//let f = fruits.slice(0,3);

//splice
// let f =fruits.splice(1,2);
// console.log(fruits,f);

//concat
// let fruits3 = fruits.concat(fruits2,fruits4);
// console.log(fruits3);
// fruits[fruits.length] = "kiwi";
// fruits[fruits.length] = "lemon";
// fruits[0] = "watermelon";
// console.log(fruits);

//toString
// let str = fruits.toString();
// console.log(str);

//push
// fruits.push("kiwi");
// console.log(fruits);

//pop
// let f = fruits.pop();
// console.log(fruits,f);

//shift
// let f = fruits.shift();
// console.log(fruits,f);

//Exercise3
// let pets = ["cat","dog","fish","rabbit","cow"];
// let pet1 = ["horse"];
// let pet2 = pets.pop(4)
// console.log(pets,pet1);
//need to fixed

//JAVASCRIPT COMPARISONS
//