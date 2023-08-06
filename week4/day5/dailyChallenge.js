const planetsData = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 79 },
  { name: "Saturn", color: "gold", moons: 83 },
  { name: "Uranus", color: "lightblue", moons: 27 },
  { name: "Neptune", color: "darkblue", moons: 14 },
];

const listPlanets = document.querySelector(".listPlanets");

planetsData.forEach((planetData) => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet", `planet-${planetData.name.toLowerCase()}`);
  planetDiv.style.backgroundColor = planetData.color;
  planetDiv.textContent = planetData.name;

  if (planetData.moons > 0) {
    const moonDivContainer = document.createElement("div");
    moonDivContainer.classList.add("moon-container");

    for (let i = 0; i < planetData.moons; i++) {
      const moonDiv = document.createElement("div");
      moonDiv.classList.add("moon");
      moonDivContainer.appendChild(moonDiv);
    }

    planetDiv.appendChild(moonDivContainer);
  }

  listPlanets.appendChild(planetDiv);
});
