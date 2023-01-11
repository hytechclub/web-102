# Self-Paced Work: Movie Watchlist Updates
Follow these instructions to update the movie watchlist website.

## Numbered HTML List
Currently, the list displays with bullet points. Update the code in the **index.html** file to make the list display as an _ordered_ list.

## More Different Starting Movies
Currently, there should be three movies when the `moviesToWatch` array is initially created. Under that, add some new movies to the list! In addition to adding new movies, update some of the existing movies as well.

Remember, to add an item to an array, use the `push` function. It should look something like this for an array named `myArray`:

```js
myArray.push("My new item");
```

To update an existing value in an array, use the array name, square brackets, and the index of the value. It should look something like this for an array named `myArray`:

```js
myArray[1] = "My updated second item";
```

Note that the updates to the array values should _not_ happen when the array is initially created! The line below should remain the same:

```js
let moviesToWatch = ["The Lego Movie", "Despicable Me", "Spider-Man: Into the Spider-Verse"];
```

## Movie Edits
Currently, there is no way to adjust a movie once it has been added to the Watchlist. Create a button that will allow the user to do this!

### Adding a Button in HTML
The first step is to create a new HTML button element.

1. Open the **index.html** file for editing
1. Find the existing `<button>` elements (within a `<p></p>`), and make a new line under the last one
1. There, create a new `<button></button>` element
1. Set the `onclick` of the button to call a function named `editMovie`
1. Set the text of the button to say "Edit a Movie"

Run the project, and verify that a new button appears! It should not do anything yet, though.

### Hooking Up the Button in JavaScript
Now it's time to make the button run some code.

1. Open the **script.js** file for editing
1. Make a couple new lines at the bottom of the file
1. There, define a new function named `editMovie`
    - `function` keyword
    - Function name
    - Parentheses `()`
    - Curly brackets `{}`
1. In the _body_ of the function (between `{` and `}`), add an `alert` statement for testing

Run the project, and verify that a pop-up message appears when the "Edit a Movie" button is clicked!

### Getting the Index of the Value to Update
Next, grab the index of the movie from the user. Remember, to convert a string to a number, use code that looks something like this:

```js
let myString = "47";

let myNumber = Number(myString);

// myNumber will be the number 47 instead of the text "47"
```

1. Remove the `alert` from the body of the `editMovie` function
1. In its place, create a new variable named `idxString`
1. Set `idxString` to a `prompt`
1. Set the text for the `prompt` to say "Enter the index of the movie you would like to edit."
1. Under that, create a new variable named `idx`
1. Call the `Number` function on `idxString` to set the value of `idx`

Run the project, click the button, and verify that the prompt appears!

### Getting the New Value
Next, grab the new title the user would like for the given index.

1. Make a new line in the body of the `editMovie` function
1. On that line, create a new variable named `newTitle`
1. Set `newTitle` to a `prompt`
1. Set the text for the `prompt` to say "Enter a new value for the movie title."

Run the project, click the button, and verify that _two_ prompts appear!

### Setting the New Title
Now it's time to actually update the list! Remember, to set the value of an array at a certain index, use code that looks something like this:

```js
let myArray = ["Banana", "Apple"];
let myIndex = 1;

myArray[myIndex] = "Orange";

// myArray will be ["Banana", "Orange"]
```

1. Make a new line in the body of the `editMovie` function
1. On that line, value of the `moviesToWatch` array at the index of `idx` to be `newTitle`
1. Under that, call the `displayList` function to update the HTML

Run the project, and test out the "Edit a Movie" button! At this point, it should be fully functional 😎

## Challenge 1 - Item Number Instead of Index
Currently, the `editMovie` function will edit an item by its index. For example, if the user entered `1` for the index, it would edit the _second_ item in the array. Update this so that instead of using the index directly, it subtracts one from what the user enters; that way, if for example the user enters `2` for the item they want to edit, it will edit the item at index `1` (the actual _`2`nd_ element)!

## Challenge 2 - Deleting a Movie
Currently, there is no way to remove a movie from the watchlist. Add a button that allows the user to delete an item by its index!

### Creating a Button
Start by creating a new `<button>` element in the **index.html** file. Set its `onclick` attribute to _call_ a function named `deleteMovie`. Then, in the **script.js** file, _define_ the function named `deleteMovie`.

### Getting the Index
Getting the index to delete will be very similar to the `editMovie` function. Use a `prompt` to get the index string value, and then make sure to convert it to a number using the `Number` function! After this step, you should have a variable named `idx` that holds the index to delete.

>For a more friendly user experience, subtract `1` from this `idx` before using it - that way, the number will line up with the position in the displayed list.

### Removing the Value from the Array
Read through these instructions to learn how to remove the value at the `idx` index.

#### Background
Unfortunately, there is not a direct way to do this in JavaScript; however, the `splice` method generally works fairly well. Here is an [example](https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_remove), and here is some more in-depth [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice). It can end up looking something like this:

```js
let myArray = ["Planes", "Trains", "Scooters", "Automobiles"];
let indexToDelete = 2;
let numberOfElementsToDelete = 1;

myArray.splice(indexToDelete, numberOfElementsToDelete);

// myArray will be ["Planes", "Trains", "Automobiles"]
```

There are many ways to use `splice`, but if you just want to remove a value, you can pass in the index of the value to delete as the first argument, and `1` as the second argument. This will delete `1` element at that index.

#### Code to Add
For the `deleteMovie` function, use the `splice` function to remove one value at the `idx` index. Remember, `moviesToWatch` is the array name, `splice` is the function, `idx` is the first argument, and `1` is the second argument.

After the `splice`, make sure to call the `displayList` function to update the HTML on the page!

### Conclusion
At this point, the "Delete a Movie" button should be fully functional. Run the project, click on the button, enter an index, and verify that the item disappears from the list!

## Challenge 3 - Persistent Movies
This challenge will require a bit of additional research. The goal is to store the list of movies somewhere so that if a user reloads the page, it remembers what the movies were.

### Background: Local Storage
This is possible using something called [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) - it's basically a way to store data in the browser for a given user. This can make basic front-end web applications much more powerful!

`localStorage` has two main functions: storing values (setting), and retrieving values (getting).

#### Setting an Item
Setting an item looks like this:

```js
let myValue = "This will be stored";

localStorage.setItem("myValue", myValue);
```

#### Getting an Item
If an item has already been stored, you can get it like this:

```js
let myValue = localStorage.getItem("myValue");
```

### Background: JSON Strings
The `localStorage` object can only store string values - this means that we cannot directly store an array. However, it is possible to work around this using [JSON](https://en.wikipedia.org/wiki/JSON) strings. Essentially, we can convert an array to a string to store it, and then convert it back to an array when we grab it.

#### Array to String
To convert an array into a string, use `JSON.stringify` like this:

```js
let myArray = ["Sunday", "Monday", "Tuesday"];

let myString = JSON.stringify(myArray);

// myString will be the string version of the array: `["Monday","Tuesday","Wednesday"]`
```

#### String to Array
To convert a string into an array, use `JSON.parse` like this:

```js
let myString = `["Sunday","Monday","Tuesday"]`;

let myArray = JSON.parse(myString);

// myArray will be the actual array object: ["Monday", "Tuesday", "Wednesday"]
```

### Background: `localStorage` + JSON Strings
Combine these two concepts to successfully store array objects within `localStorage`! Here is a [brief explanation](https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage).

```js
// Storing myArray in localStorage
let myArray = ["Leonardo", "Raphael", "Donatello", "Michelangelo"];
let myArrayString = JSON.stringify(myArray);
localStorage.setItem("myArray", myArrayString);

// Retrieving myArray from localStorage
let myStoredArrayString = localStorage.getItem("myArray");
let myStoredArray = JSON.parse(myStoredArrayString);

// At this point, myStoredArray will contain the array object from myArray!
```

### Implementation: Updating the Movie Watchlist
After trying to grasp the concepts of `localStorage` and JSON strings, apply them to the Movie Watchlist website!

#### Storing the Movies Array
A good place to store the current movies would be in the `displayList` function.

1. Go to the bottom of the `displayList` function
1. Create a new variable named `stringToStore`
1. Call the `JSON.stringify` function on `moviesToWatch`, and store it in the `stringToStore` variable
1. Under that, call the `localStorage.setItem` function
1. Pass in `"moviesToWatch"` as the first argument, and `stringToStore` as the second argument

This should successfully store the value in `localStorage` every time the user clicks the "Display List" button. It is possible to check this out by opening up developer tools, going to the "Application" window, and clicking on the "localStorage" option. Here is a [quick example](https://stackoverflow.com/questions/9404813/how-to-view-or-edit-localstorage) - it's not necessary to look at it there, but it's pretty cool!

#### Retrieving the Movies Array
Now that the movies array has been stored, it can be retrieved! Instead of setting the `moviesToWatch` array statically at the top of the file, use `localStorage` to check if there is a stored version of the array.

1. At the very top of the file, create a new variable named `storedMoviesString`
1. Call the `localStorage.getItem` function, passing in `"moviesToWatch"` as the argument
    - Set `storedMovieString` to this value
1. Under that, create the `moviesToWatch` variable - but with no value!
1. Under that, create an `if`/`else` structure
1. For the `if` condition, simply pass in `storedMoviesString`
    - This checks if the variable has any value
1. In the body of the `if` (between `{` and `}`), set the `moviesToWatch` variable
1. Call `JSON.parse`, and pass in `storedMoviesString` - store that result inb `moviesToWatch`
1. In the body of the `else`, set the `moviesToWatch` variable to the original starter array

Now, the first time the page loads, it should set the `moviesToWatch` array to `["The Lego Movie", "Despicable Me", "Spider-Man: Into the Spider-Verse"]`. However, if the user decides to add, edit, or delete any movies, the `moviesToWatch` array should update, and persist to `localStorage`. When the page is loaded again, it should retrieve the stored movie list!
