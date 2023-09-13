async function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      reject("Input is not an array");
    } else if (words.every((word) => typeof word === "string")) {
      const uppercasedWords = words.map((word) => word.toUpperCase());
      resolve(uppercasedWords);
    } else {
      reject("Array contains non-string values");
    }
  });
}

async function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      reject("Input is not an array");
    } else if (words.length > 4) {
      const sortedWords = [...words].sort();
      resolve(sortedWords);
    } else {
      reject("Array length is not bigger than 4");
    }
  });
}

const wordsArray = ["apple", "pear", "banana", "melon", "kiwi"];

async function processWords() {
  try {
    const uppercasedWords = await makeAllCaps(wordsArray);
    console.log("Uppercased Words:", uppercasedWords);
    const sortedWords = await sortWords(uppercasedWords);
    console.log("Sorted Words:", sortedWords);
  } catch (error) {
    console.error("Error:", error);
  }
}

processWords();
