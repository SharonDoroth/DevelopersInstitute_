function kgToGramsDeclaration(weightInKg) {
  return weightInKg * 1000;
}

console.log(kgToGramsDeclaration(2.5));

const kgToGramsExpression = function(weightInKg) {
  return weightInKg * 1000;
};

console.log(kgToGramsExpression(2.5));

const kgToGramsArrow = weightInKg => weightInKg * 1000;

console.log(kgToGramsArrow(2.5)); 
