const quotes = [
  {
    id: 0,
    author: "Albert Einstein",
    quote: "Imagination is more important than knowledge.",
  },
  {
    id: 1,
    author: "Steve Jobs",
    quote: "Your time is limited, don't waste it living someone else's life.",
  },
  {
    id: 2,
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    id: 3,
    author: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    id: 4,
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
];

let lastQuoteIndex = -1;

const quoteSection = document.getElementById("quote-section");
const quoteElement = document.getElementById("quote");
const generateButton = document.getElementById("generate-button");
const addQuoteForm = document.getElementById("add-quote-form");
const newQuoteInput = document.getElementById("new-quote");
const newAuthorInput = document.getElementById("new-author");
const characterCountButton = document.getElementById("character-count");
const characterCountNoSpacesButton = document.getElementById(
  "character-count-no-spaces"
);
const wordCountButton = document.getElementById("word-count");
const likeButton = document.getElementById("like-button");

function getRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  while (randomIndex === lastQuoteIndex) {
    randomIndex = Math.floor(Math.random() * quotes.length);
  }

  lastQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

function displayQuote() {
  const randomQuote = getRandomQuote();
  quoteElement.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;

  quoteSection.classList.add("fade-in");

  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;

  setTimeout(() => {
    quoteSection.classList.remove("fade-in");
  }, 1000);
}

addQuoteForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const newQuote = {
    id: quotes.length,
    author: newAuthorInput.value,
    quote: newQuoteInput.value,
    likes: 0,
  };
  quotes.push(newQuote);
  newQuoteInput.value = "";
  newAuthorInput.value = "";
  alert("Quote added successfully!");
});

characterCountButton.addEventListener("click", function () {
  const randomQuote = getRandomQuote();
  alert(`Character Count (with spaces): ${randomQuote.quote.length}`);
});

characterCountNoSpacesButton.addEventListener("click", function () {
  const randomQuote = getRandomQuote();
  const characterCount = randomQuote.quote.replace(/\s/g, "").length;
  alert(`Character Count (without spaces): ${characterCount}`);
});

wordCountButton.addEventListener("click", function () {
  const randomQuote = getRandomQuote();
  const wordCount = randomQuote.quote.split(" ").length;
  alert(`Word Count: ${wordCount}`);
});

likeButton.addEventListener("click", function () {
  const randomQuote = getRandomQuote();
  randomQuote.likes++;
  alert(`You liked the quote: "${randomQuote.quote}" - ${randomQuote.author}`);
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

generateButton.addEventListener("click", displayQuote);
