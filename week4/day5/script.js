// const myDiv = document.querySelector("div");
// console.log(myDiv);

// const myDiv1 = document.querySelector("#isId");
// console.log(myDiv1);

// const myDiv2 = document.querySelector(".isClass");
// console.log(myDiv2);

// const divList = document.querySelectorAll("div");
// console.log(divList);

// const parentDiv = document.getElementsByClassName("parent");
// console.log(parentDiv);

// const classDiv = document.getElementsByClassName("classDiv");
// console.log(classDiv);

// const divs = document.getElementsByTagName("div");
// console.log(divs);

//Exercise1
// const myDiv = document.querySelector("div");
// console.log(myDiv);

// const myDiv1 = document.getElementsByTagName("div");
// console.log(myDiv);

// const myDiv2 = document.getElementsByTagName("body")[0].firstElementChild;
// console.log(myDiv2);

// const ul = document.querySelector("ul");
// console.log(ul);

// const ul1 = document.getElementsByTagName("ul");
// console.log(ul1[0]);

// const ul = document.querySelector("ul");
// const secondChildElement = ul.querySelector(":nth-child(2)");
// console.log(secondChildElement);
const div = document.querySelector("div");
const ul = document.querySelector("ul");
const input = document.querySelector("#myInput");

function changeHtml() {
    div.innerHTML = "Fruits";
    ul.innerHTML = `
    <li>Apple</li>
    <li>Banana</li>
    <li>Durian</li>
    `;
}
// console.log(ul.innerHTML);

function addListItem() {
    const newLi = document.createElement("li"); 
    // const newTextForLi = document.createTextNode("new list item :)");
    // newLi.append(newTextForLi);
    newLi.innerHTML = input.value;
    ul.append(newLi);
    input.value = "";
}
function deleteElement() {
    ul.remove();
}

function removeFromDom() { 
    ul.style.display = "none";
}
function returnToDom() {
    ul.style.display = "block"
}
console.log(div.hasAttribute("id"));
console.log(div.getAttribute("id"));
console.log(listItem.getAttribute("style"));
listItem.removeAttribute("style");

const img = document.createElement("img")
// img.setAttribute(
//   "src",
//   "https://img.freepik.com/premium-vector/family-gathering-together_97632-723.jpg?w=2000"
// );
img.src =
  "https://img.freepik.com/premium-vector/family-gathering-together_97632-723.jpg?w=2000";
body.append(img);