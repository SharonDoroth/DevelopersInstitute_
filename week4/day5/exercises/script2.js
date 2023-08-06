const divElement = document.querySelector("div");
divElement.style.backgroundColor = "lightblue";
divElement.style.padding = "10px";

const userList = document.querySelector("ul");
const johnLi = userList.querySelector("li:first-child");
userList.removeChild(johnLi);

const peteLi = userList.querySelector("li:last-child");
peteLi.style.border = "1px solid black";

document.body.style.fontSize = "16px";

// Bonus
const divBackgroundColor = divElement.style.backgroundColor;
if (divBackgroundColor === "lightblue") {
  const users = Array.from(userList.querySelectorAll("li")).map(
    (li) => li.textContent
  );
  alert(`Hello ${users[0]} and ${users[1]}`);
}
