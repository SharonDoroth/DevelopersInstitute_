// setTimeout
// const settimeout_id = setTimeout(function(){
//     changeBodyColor()
// },1000 * 5)

// function changeBodyColor(){
//     document.body.style.backgroundColor = "red"
// }

// function setTimeout(){
// //     clearTimeout()
//         clearInterval(setinterval_id)
//  }

// // setInterval
// let count = 0;
// const setinterval_id = setInterval(function(){
//     console.log(++count);
// }, 1000 * 2)

let animationInterval;
let currentPosition = 0;

function start() {
  animationInterval = setInterval(moveRigth, 200);
}

function stop() {
  clearInterval(animationInterval);
}

function moveRigth() {
  const innerDiv = document.querySelector(".inner");
  currentPosition += 50;
  innerDiv.style.left = currentPosition + "px";
}
