//#1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`funcOne: ${a}`);
}
funcOne()  // Predicted: 3

//#1.2 If declared with const: Error, can't change 'a' after setting.

//#2
let a = 0;
function funcTwo() {
    a = 5;
}
function funcThree() {
    alert(`funcThree: ${a}`);
}
funcThree()  // Predicted: 0
funcTwo()
funcThree()  // Predicted: 5

//#2.2 If declared with const: Error, 'a' can't be changed after let.

//#3
function funcFour() {
    window.a = "hello";
}
function funcFive() {
    alert(`funcFive: ${a}`);
}
funcFour()
funcFive()  // Predicted: hello

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`funcSix: ${a}`);
}
funcSix()  // Predicted: test

//#4.2 If declared with const: No change, works the same.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`if block: ${a}`);
}
alert(`outside if: ${a}`);  // Predicted: 2

//#5.2 If declared with const: No change, works the same.