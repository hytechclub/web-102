# Code-Along: Movie Watchlist
Follow these instructions to build a movie watchlist website!

## Final Code
By the end of the activity, the JavaScript code in the **script.js** file should look something like this:

```js
let moviesToWatch = ["The Lego Movie", "Despicable Me", "Spider-Man: Into the Spider-Verse"];

function displayList() {
  let listElement = document.querySelector("#list");
  listElement.innerHTML = "";

  for (let i = 0; i < moviesToWatch.length; i++) {
    let movieTitle = moviesToWatch[i];

    let itemElement = document.createElement("li");
    itemElement.textContent = movieTitle;

    listElement.appendChild(itemElement);
  }
}

function addMovie() {
  let movieToAdd = prompt("Which movie do you want to add?");
  moviesToWatch.push(movieToAdd);
  displayList();
}
```
