const apiUrl =
  "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const xhr = new XMLHttpRequest();

xhr.open("GET", apiUrl, true);

xhr.onload = function () {
  if (xhr.status === 200) {

    const response = JSON.parse(xhr.responseText);
    console.log(response);
  } else {

    console.error("Failed to fetch data from the API.");
  }
};


xhr.send();
