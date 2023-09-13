const morseJSON = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseJS = JSON.parse(morseJSON);
      if (Object.keys(morseJS).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(morseJS);
      }
    } catch (error) {
      reject("Error parsing Morse JSON");
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt("Enter a word or sentence:");
    if (!input) {
      reject("Input is empty");
      return;
    }

    const morseTranslation = [];
    for (const char of input.toLowerCase()) {
      if (char in morseJS) {
        morseTranslation.push(morseJS[char]);
      } else {
        reject(`Character "${char}" does not exist`);
        return;
      }
    }

    resolve(morseTranslation);
  });
}

function joinWords(morseTranslation) {
  const translationString = morseTranslation.join(" / ");
  document.body.innerHTML += `<p>${translationString}</p>`;
}

toJs()
  .then((morseJS) => toMorse(morseJS))
  .then((morseTranslation) => joinWords(morseTranslation))
  .catch((error) => console.error("Error:", error));
