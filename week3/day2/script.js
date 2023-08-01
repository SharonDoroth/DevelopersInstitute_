//exercise1
const favoriteFood = "Pizza";
const favoriteMeal = "dinner";

console.log("I eat " + favoriteFood + " at every " + favoriteMeal + ".");


//exercise2
var myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// 1
var myWatchedSeriesLength = myWatchedSeries.length;

// 2
var myWatchedSeriesSentence = myWatchedSeries.join(", ");

// 3
console.log(
  "I watched " + myWatchedSeriesLength + " series: " + myWatchedSeriesSentence
);
//PART ||
// 4
var indexOfBigBangTheory = myWatchedSeries.indexOf("the big bang theory");
if (indexOfBigBangTheory !== -1) {
  myWatchedSeries[indexOfBigBangTheory] = "friends";
}

// 5
myWatchedSeries.push("breaking bad");

// 6
myWatchedSeries.unshift("game of thrones");

// 7
var indexOfBlackMirror = myWatchedSeries.indexOf("black mirror");
if (indexOfBlackMirror !== -1) {
  myWatchedSeries.splice(indexOfBlackMirror, 1);
}

// 8
var indexOfMoneyHeist = myWatchedSeries.indexOf("money heist");
if (indexOfMoneyHeist !== -1 && myWatchedSeries[indexOfMoneyHeist].length >= 3) {
  var thirdLetter = myWatchedSeries[indexOfMoneyHeist][2];
  console.log("Third letter of \"money heist\" is: " + thirdLetter);
}

// 9
console.log(myWatchedSeries);


//Exercise 3
var celsiusTemperature = 25;
var fahrenheitTemperature = (celsiusTemperature / 5) * 9 + 32;

console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F.");


//Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a + b); 

a = 2;

console.log(a + b); 

//Exercise 5
typeof(15)
// Prediction: "number"
// Actual: "number"

typeof(5.5)
// Prediction: "number"
// Actual: "number"

typeof(NaN)
// Prediction: "number"
// Actual: "number"

typeof("hello")
// Prediction: "string"
// Actual: "string"

typeof(true)
// Prediction: "boolean"
// Actual: "boolean"

typeof(1 != 2)
// Prediction: "boolean"
// Actual: "boolean"

"hamburger" + "s"
// Prediction: "hamburgers"
// Actual: "hamburgers"

"hamburgers" - "s"
// Prediction: NaN
// Actual: NaN

"1" + "3"
// Prediction: "13"
// Actual: "13"

"1" - "3"
// Prediction: -2
// Actual: -2

"johnny" + 5
// Prediction: "johnny5"
// Actual: "johnny5"

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false



//Exercise 6
5 + "34"
// Prediction: "534" 
// Actual: "534"

5 - "4"
// Prediction: 1 
// Actual: 1

10 % 5
// Prediction: 0 
// Actual: 0

5 % 10
// Prediction: 5 
// Actual: 5

"Java" + "Script"
// Prediction: "JavaScript" 
// Actual: "JavaScript"

" " + " "
// Prediction: "  " 
// Actual: "  "

" " + 0
// Prediction: " 0" 
// Actual: " 0"

true + true
// Prediction: 2 
// Actual: 2

true + false
// Prediction: 1 
// Actual: 1

false + true
// Prediction: 1 
// Actual: 1

false - true
// Prediction: -1 
// Actual: -1

!true
// Prediction: false 
// Actual: false

3 - 4
// Prediction: -1 
// Actual: -1

"Bob" - "bill"
// Prediction: NaN 
// Actual: NaN
