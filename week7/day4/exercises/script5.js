// Part I
function makeJuice(size) {
  function addIngredients(first, second, third) {
    const sentence = `The client wants a ${size} drink juice, containing ${first}, ${second}, ${third}.`;
    document.getElementById("output").textContent = sentence;
  }

  addIngredients("apple", "orange", "banana");
}

makeJuice("medium");

// Part II
function makeJuice(size) {
  const ingredients = [];

  function addIngredients(first, second, third) {
    ingredients.push(first, second, third);
  }

  addIngredients("apple", "orange", "banana");
  addIngredients("strawberry", "mango", "pineapple");

  function displayJuice() {
    const sentence = `The client wants a ${size} drink juice, containing ${ingredients.join(
      ", "
    )}.`;
    document.getElementById("output").textContent = sentence;
  }

  displayJuice();
}

makeJuice("large"); 
