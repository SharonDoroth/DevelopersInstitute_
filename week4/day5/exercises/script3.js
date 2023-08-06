const navBar = document.getElementById("navBar");
navBar.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
const newTextNode = document.createTextNode("Logout");
newLi.appendChild(newTextNode);

const ul = navBar.querySelector("ul");
ul.appendChild(newLi);

const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("First Link:", firstLi.textContent);
console.log("Last Link:", lastLi.textContent);
