const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const apiUnits = "metric"; 

let isCelsius = true;

function getLocationWeather() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetchWeatherByCoordinates(lat, lon);
    });
  } else {
    showError("Geolocation is not supported by your browser.");
  }
}

function fetchWeatherByCoordinates(lat, lon) {
  const unit = isCelsius ? "metric" : "imperial";
  const url = `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      showError("Failed to fetch weather data.");
    });
}

function getWeather(city) {
  const unit = isCelsius ? "metric" : "imperial";
  const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=${unit}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      showError("City not found. Please enter a valid city.");
    });
}

function displayWeather(data) {
  const weatherCard = document.getElementById("weatherCard");
  weatherCard.classList.remove("hidden");

  const cityName = data.name ? data.name : "N/A";
  const country = data.sys && data.sys.country ? data.sys.country : "N/A";
  const weatherDescription =
    data.weather && data.weather.length > 0
      ? data.weather[0].description
      : "N/A";
  const temperature = data.main && data.main.temp ? data.main.temp : "N/A";
  const humidity = data.main && data.main.humidity ? data.main.humidity : "N/A";
  const windSpeed = data.wind && data.wind.speed ? data.wind.speed : "N/A";
  const sunriseTime =
    data.sys && data.sys.sunrise
      ? new Date(data.sys.sunrise * 1000).toLocaleTimeString()
      : "N/A";
  const sunsetTime =
    data.sys && data.sys.sunset
      ? new Date(data.sys.sunset * 1000).toLocaleTimeString()
      : "N/A";

  const card = document.createElement("div");
  card.classList.add("card");

  const cardContent = `
        <h2>${cityName}, ${country}</h2>
        <p>Weather: ${weatherDescription}</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind: ${windSpeed} m/s</p>
        <p>Sunrise: ${sunriseTime}</p>
        <p>Sunset: ${sunsetTime}</p>
        <button class="deleteBtn">X</button>
    `;

  card.innerHTML = cardContent;

  weatherCard.appendChild(card);

  const deleteBtn = card.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", function () {
    card.remove();
  });
}

function showError(message) {
  alert(message);
}

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const city = document.getElementById("cityInput").value;
      getWeather(city);
      document.getElementById("cityInput").value = "";
    });

  document
    .getElementById("toggleUnitBtn")
    .addEventListener("click", toggleTemperatureUnit);

  document
    .getElementById("getLocationBtn")
    .addEventListener("click", getLocationWeather);
});

function toggleTemperatureUnit() {
  isCelsius = !isCelsius;
  const city = document.getElementById("cityInput").value;
  if (city) {
    getWeather(city);
  }
}
