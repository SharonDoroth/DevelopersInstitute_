const products = require("./products");

function findProductByName(productName) {
  const product = products.find((p) => p.name === productName);
  return product;
}

const product1 = findProductByName("Product 1");
const product3 = findProductByName("Product 3");
const productNotFound = findProductByName("Non-existent Product");

if (product1) {
  console.log("Product 1 found:");
  console.log(product1);
} else {
  console.log("Product 1 not found.");
}

if (product3) {
  console.log("Product 3 found:");
  console.log(product3);
} else {
  console.log("Product 3 not found.");
}

if (productNotFound) {
  console.log("Non-existent Product found:");
  console.log(productNotFound);
} else {
  console.log("Non-existent Product not found.");
}
