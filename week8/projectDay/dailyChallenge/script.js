function areAnagrams(str1, str2) {
  const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const charCount1 = {};
  const charCount2 = {};

  for (const char of cleanStr1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (const char of cleanStr2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

const result1 = areAnagrams("Astronomer", "Moon starer"); 
const result2 = areAnagrams("School master", "The classroom"); 
const result3 = areAnagrams("The Morse Code", "Here come dots");

console.log(result1);
console.log(result2);
console.log(result3);
