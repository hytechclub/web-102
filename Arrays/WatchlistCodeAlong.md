# Code-Along: Movie Watchlist
Follow these instructions to build a movie watchlist website!

## Getting Started
To begin, fork [this Starter Repl project](https://replit.com/@HylandOutreach/Watchlist#index.html). It contains some HTML and CSS, but no JavaScript yet 😓

## Creating the Array
The first step is to create the array that will store the list of movies.

1. Open the **script.js** file for editing
1. At the top of the file, create a new variable named `moviesToWatch`
1. Set it equal to a new array with square brackets: `[` and `]`
1. In the array, add three string values, separated by commas:  
    - `"The Lego Movie"`
    - `"Despicable Me"`
    - `"Spider-Man: Into the Spider-Verse"`

Feel free to change up the films if desired! The code should end up looking something like this:

```js
let moviesToWatch = ["The Lego Movie", "Despicable Me", "Spider-Man: Into the Spider-Verse"];
```

## Defining the `displayList` Function
Now it's time to start making the buttons functional. In the **index.html** file, there is a `<button>` with an `onclick` set to call the `displayList` function... but it doesn't exist yet! It must be _defined_.

1. Make a new line under the existing code in the **script.js** file
1. There, define a new function named `displayList`:  
    - `function` keyword
    - Function name
    - Parentheses
    - Curly brackets
1. In the _body_ of the function (between `{` and `}`), add an `alert` statement for testing purposes

Run the project, and verify that clicking the "Display List" button properly executes the code in the newly defined function! It should look something like this:

```js
function displayList() {
  alert("Displaying List...");
}
```

## Looping Through the Array
Now that the button is hooked up to a function, we have to make sure the function actually does something! The goal is for this function to display each movie in the `moviesToWatch` array. This will be possible with a `for` loop!

1. Delete the `alert` from the body of the `displayList` function
1. In its place, create the basic `for` loop structure:  
    - `for`
    - Parentheses
    - Curly brackets
1. For the first expression of the loop in the parentheses (_init_), create a variable `i` and set it to `0`
1. For the second expression (_cond_), check if `i` is less than the length of the array
1. For the final expression (_inc_), add one to the value of `i`
1. Now, in the _body_ of the `for` loop (between `{` and `}`), create a new variable `movieTitle`
1. Set the `movieTitle` variable to be the value in the `moviesToWatch` array at the current index
1. Under that, use an `alert` to display the current `movieTitle`

Run the project, click the "Display List" button, and verify that all movie titles are displayed! The code in the body of the `displayList` function should look something like this:

```js
for (let i = 0; i < moviesToWatch.length; i++) {
  let movieTitle = moviesToWatch[i];

  alert(movieTitle);
}
```

## Displaying Movies in HTML
Showing the movies in pop-ups is functional, but the user experience could definitely be better. Use some DOM manipulation to add the array items to the HTML list instead!

### Getting the List Element
The first step will be to grab the HTML `<ul id="list"></ul>` so that we can add things to it.

1. Make a new line at the _top_ of the body of the `displayList` function
1. There, create a new variable named `listElement`
1. Set the value of `listElement` to be the HTML element with an `id` of `list`
1. Under that, set the `innerHTML` of the `listElement` variable to be empty

Nothing should change at this point, but storing the `listElement` value will make it possible to add list items for each movie! The additional JavaScript code should look something like this: 

```js
let listElement = document.querySelector("#list");
listElement.innerHTML = "";
```

### Creating the List Items
Now that the `<ul id="list"></ul>` has been attained, it will be possible to add some list items! All of this will take place in the body of the `for` loop.

1. In the body of the `for` loop (within the `displayList` function), remove the `alert` statement
1. In its place, create a new variable named `itemElement`
1. Set the value of `itemElement` to be a newly-created HTML `<li>` element
1. Under that, set the `textContent` of the `itemElement` variable to be the current movie title
1. Under that, append `itemElement` to `listElement`

Run the project, click the button, and verify that the movies are added to the page as bulleted list items! The additional code should look something like this:

```js
let itemElement = document.createElement("li");
itemElement.textContent = movieTitle;

listElement.appendChild(itemElement);
```

## Defining the `addMovie` Function
Now the basic list is all set up, but what if we want to add a new movie? There is an "Add Movie" button, but its function does not exist yet! Let's _define_ it.

1. Make a new line under the existing code in the **script.js** file
1. There, define a new function named `addMovie`:  
    - `function` keyword
    - Function name
    - Parentheses
    - Curly brackets
1. In the _body_ of the function (between `{` and `}`), add an `alert` statement for testing purposes

Run the project, and verify that clicking the "Add Movie" button properly executes the code in the newly defined function! It should look something like this:

```js
function addMovie() {
  alert("Adding Movie...");
}
```

## Getting the New Movie
Now the button has been hooked up, but the function needs to do a lot more than it's currently doing! To start, it needs to get a new movie from the user.

1. In the _body_ of the `addMovie` function, create a new variable named `movieToAdd`
1. Set the value of `movieToAdd` to be the result of a `prompt` statement
1. Set the text of the `prompt` to ask "Which movie do you want to add?"

Run the project, and verify that clicking the "Add Movie" button will now prompt the user for a new movie! The added code should look something like this:

```js
let movieToAdd = prompt("Which movie do you want to add?");
```

## Adding the New Movie
Now we have the movie they want to add, so we can add it to the array!

1. Make a new line under the `movieToAdd` variable, still in the body `addMovie`
1. Call the `push` function on the `moviesToWatch` array
1. Pass in `movieToAdd` as the argument for the function
1. Under that, call the `displayList` function to update the HTML

Run the project, and verify that a new movie can be added to the list on the page! The added code should look something like this:

```js
moviesToWatch.push(movieToAdd);
displayList();
```

The basic functionality of the Movie Watchlist should now be working as expected!

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
