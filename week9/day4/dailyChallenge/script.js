const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllButton = document.getElementById("deleteAll");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchCategory = searchInput.value.trim();
  if (searchCategory !== "") {
    fetchRandomGif(searchCategory);
  }
});

deleteAllButton.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});

function fetchRandomGif(category) {
  const apiUrl = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const gifUrl = data.data.images.original.url;

      const gifDiv = document.createElement("div");
      gifDiv.classList.add("gif-item");

      const gifImg = document.createElement("img");
      gifImg.src = gifUrl;
      gifImg.alt = `GIF of ${category}`;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        gifContainer.removeChild(gifDiv);
      });

      gifDiv.appendChild(gifImg);
      gifDiv.appendChild(deleteButton);
      gifContainer.appendChild(gifDiv);
    })
    .catch((error) => {
      console.error("Error fetching GIF:", error);
    });
}
