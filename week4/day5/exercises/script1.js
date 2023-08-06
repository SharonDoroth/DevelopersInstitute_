const containerDiv = document.getElementById("container");
console.log(containerDiv);
const listItems = document.querySelectorAll(".list li");
listItems[1].textContent = "Richard";

const secondUl = document.querySelectorAll(".list")[1];
const sarahLi = secondUl.querySelector("li:nth-child(2)");
secondUl.removeChild(sarahLi);

const yourName = "YourName";
const ulElements = document.querySelectorAll(".list");
ulElements.forEach((ul) => {
  const firstLi = ul.querySelector("li");
  firstLi.textContent = yourName;
});

ulElements.forEach((ul) => {
  ul.classList.add("student_list");
});

ulElements[0].classList.add("university", "attendance");
