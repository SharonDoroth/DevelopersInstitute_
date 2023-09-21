document.addEventListener("DOMContentLoaded", function () {
  const characterInfo = document.getElementById("character-info");
  const characterName = document.getElementById("character-name");
  const characterHeight = document.getElementById("character-height");
  const characterGender = document.getElementById("character-gender");
  const characterBirthyear = document.getElementById("character-birthyear");
  const characterHomeworld = document.getElementById("character-homeworld");
  const loadingMessage = document.getElementById("loading");
  const errorMessage = document.getElementById("error");
  const getCharacterBtn = document.getElementById("get-character-btn");

  getCharacterBtn.addEventListener("click", getRandomCharacter);

function getRandomCharacter() {
  loadingMessage.style.display = "block";
  errorMessage.style.display = "none";
  characterInfo.style.display = "none";

  const randomCharacterId = Math.floor(Math.random() * 83) + 1; // Generate a new random ID

  const apiUrl = `https://swapi.dev/api/people/${randomCharacterId}`;

  const fetchTimeout = setTimeout(() => {
    loadingMessage.style.display = "none";
    errorMessage.style.display = "block";
    errorMessage.textContent = "Request timed out. Please try again.";
  }, 10000); // 10-second timeout (adjust as needed)

  fetch(apiUrl)
    .then((response) => {
      clearTimeout(fetchTimeout); // Clear the timeout if the request succeeds
      if (!response) {
        throw new Error("No response from the server");
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (!data) {
        throw new Error("Character data not found");
      }
      characterName.textContent = data.name || "Unknown";
      characterHeight.textContent = data.height || "Unknown";
      characterGender.textContent = data.gender || "Unknown";
      characterBirthyear.textContent = data.birth_year || "Unknown";

      const homeworldUrl = data.homeworld;
      if (homeworldUrl) {
        return fetch(homeworldUrl);
      } else {
        characterHomeworld.textContent = "Unknown";
        loadingMessage.style.display = "none";
        characterInfo.style.display = "block";
      }
    })
    .then((response) => {
      if (!response) {
        throw new Error("No response from the server");
      }
      if (!response.ok) {
        throw new Error("Homeworld data not found");
      }
      return response.json();
    })
    .then((homeworld) => {
      characterHomeworld.textContent = homeworld.name || "Unknown";
      loadingMessage.style.display = "none";
      characterInfo.style.display = "block";
    })
    .catch((error) => {
      if (error.message !== "No response from the server") {
        errorMessage.textContent = "Oh no! That person isn't available";
        errorMessage.style.display = "block";
      }
      console.error("Error:", error);
    });
}
})