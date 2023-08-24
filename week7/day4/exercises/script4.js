(function (userName) {
  const userInfoDiv = document.getElementById("user-info");

  const userDiv = document.createElement("div");
  userDiv.classList.add("nav-item", "text-light", "ml-2");

  const profileImg = document.createElement("img");
  profileImg.src = "monkey.png"; 
  profileImg.alt = "Profile Picture";
  profileImg.classList.add("rounded-circle", "user-profile");

  profileImg.style.width = "60px"; 

  const userNameElement = document.createElement("span");
  userNameElement.textContent = `Welcome, ${userName}`;

  userDiv.appendChild(profileImg);
  userDiv.appendChild(userNameElement);

  userInfoDiv.appendChild(userDiv);
})("Lilo");
