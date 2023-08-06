const allBooks = [
  {
    title: "Twilight",
    author: "Stephenie Meyer",
    image:
      "https://www.twilightlexicon.com/wp-content/repsaj/2011/03/Robert-Pattinson-next-movie.jpg",
    alreadyRead: false,
  },
  {
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    image:
      "https://i1.wp.com/www.pintswithjack.com/wp-content/uploads/2021/02/Blog-Post-LWW-Cartoon.png?fit=1440%2C760&ssl=1",
    alreadyRead: true,
  },
];

function renderBooks() {
  const listBooksDiv = document.querySelector(".listBooks");
  const table = document.createElement("table");

  allBooks.forEach((book) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.textContent = `${book.title} written by ${book.author}`;
    cell2.innerHTML = `<img src="${book.image}" alt="${book.title}" width="100">`;

    if (book.alreadyRead) {
      cell1.style.color = "red";
      cell2.style.color = "red";
    }
  });

  listBooksDiv.appendChild(table);
}

renderBooks();
