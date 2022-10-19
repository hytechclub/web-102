# Cheat Sheet

## HTML
### Link a JavaScript file
```html
<script src="script.js"></script>
```

### Create a button that calls a function
```html
<button onclick="myFunction()">My Function</button>
```

### Create a text input
```html
<input type="text" id="my-input" />
```

### Create an image
```html
<img src="http://example.com/urlToImage.png" />
```

## JavaScript
### Define a function
```js
function myFunction(parameter1, parameter2...) {

}
```

### Call a function
```js
myFunction(argument1, argument2...);
```

### Create a variable
```js
let x = "new variable";
```

### Set a variable
```js
x = 5;
```

### Increment the value of a variable by 1
```js
x++;
```

### Increment the value of a variable by any number (like 10)
```js
// replace 10 with the desired number
x += 10;
```

### Find the maximum of some variables
```js
let count1 = 5;
let count2 = 9;
let count3 = 4;

let maximumCount = Math.max(count1, count2, count3);
```

### Generate a random number between 1 and any number
```js
let random = Math.ceil(Math.random()*10);
```

### Display a message to the user
```js
alert("This is a message");
```

### Make a string with embedded expressions and linebreaks
```js
let adjective = "good";
let noun = "statement";

let myMessage = `this is
a very ${adjective} message.
and it is a ${noun}.`;

alert(myMessage);
```

Will print:

```
this is
a very good message.
and it is a statement.
```

### Ask a question to the user
```js
let answer = prompt("This is a question");
```

### Do something if a condition is true
```js
let answer = "question";

if (answer === "Answer") {
    alert("Do something");
}
```

Will print nothing; condition is not met.

### Do something if a condition is false
```js
let answer = "Answer2";

if (answer === "Answer1") {
    alert("Do something");
} else if (answer === "Answer2") {
    alert("Do something else if");
} else {
    alert("Do something else");
}
```

Will print:

```
Do something else if
```

### Get the value from an HTML text input
#### HTML
```html
<input id="my-input" />
```

#### JavaScript
```js
let textInput = document.querySelector("#my-input");
let textValue = textInput.value;
```

### Create a new HTML element
```js
let newParagraph = document.createElement("p");
```

### Insert an HTML element into the `body` of the page
```js
document.body.appendChild(newParagraph);
```

### Insert an HTML element into another element
```js
let myDiv = document.querySelector("#my-div");
myDiv.appendChild(newParagraph);
```

### Set the text content of an HTML element
```js
myParagraph.textContent = "New Text Content";
```

### Set a CSS property of an HTML element
```js
myParagraph.style.color = "red";
```

### Change the background color of the whole page
```js
document.body.style.background = "red";
```

### Repeat code a certain number of times
```js
// replace 10 with the desired number
for (let i = 0; i < 10; i++) {
    alert("Repeat");
}
```

### Create a new array
```js
let myArray = ["Item One", "Item Two", "Item Three"];
```

### Access an array element by index
```js
let myFirstElement = myArray[0];
```

### Set an array element by index
```js
myArray[0] = "New Item One";
```

### Add an item to an array
```js
myArray.push("Item Four");
```

### Get the number of items in an array
```js
let elementsCount = myArray.length;
```

### Loop through each item in an array
```js
for (let i = 0; i < myArray.length; i++) {
    let currentItem = myArray[i];
    alert(currentItem);
}
```
