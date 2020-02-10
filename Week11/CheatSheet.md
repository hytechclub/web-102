# Cheat Sheet

## HTML
### Link a JavaScript file
```html
<script src="JavaScriptFile.js"></script>
```

### Create a button that calls a function
```html
<button onclick="myFunction()">My Function</button>
```

### Create a text input
```html
<input type="text" id="myInput">
```

### Create an image
```html
<img src="http://example.com/urlToImage.png">
```

## JavaScript
### Define a function
```js
function myFunction() {

}
```

### Call a function
```js
myFunction()
```

### Declare a variable
```js
var x;
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
>Assume `count1`, `count2`, and `count3` are all numeric variables

```js
var maximumCount = Math.max(count1, count2, count3);
```

### Generate a random number between 1 and any number (like 10)
```js
// replace 10 with the desired number
var random = Math.ceil(Math.random()*10);
```

### Display a message to the user
```js
alert("This is a message");
```

### Make a string with linebreaks
```js
// "\n" will add a new line in your string
alert("Hello \n This is a new line \n this is too");
```

### Ask a question to the user
```js
var answer = prompt("This is a question");
```

### Do something if a condition is true
>Assume `answer` is a variable with a value

```js
if (answer === "Answer") {
    alert("Do something");
}
```

### Do something if a condition is false
>Assume `answer` is a variable with a value

```js
if (answer === "Answer1") {
    alert("Do something");
} else if (answer === "Answer2") {
    alert("Do something else if");
} else {
    alert("Do something else");
}
```

### Get the value from an HTML text input
```js
var textInput = document.querySelector("#myInput");
var textValue = textInput.value;
```

### Create a new HTML element
```js
var newParagraph = document.createElement("p");
```

### Insert an HTML element into the `body` of the page
>Assume `newParagraph` is a variable containing a newly created HTML paragraph

```js
document.body.appendChild(newParagraph);
```

### Insert an HTML element into another element
>Assume `newParagraph` is a variable containing a newly created HTML paragraph

```js
var myDiv = document.querySelector("#myDiv");
myDiv.appendChild(newParagraph);
```

### Set the text content of an HTML element
>Assume `myParagraph` is a variable containing an HTML paragraph

```js
myParagraph.textContent = "New Text Content";
```

### Set a CSS property of an HTML element
>Assume `myParagraph` is a variable containing an HTML paragraph

```js
myParagraph.style.color = "red";
```

### Change the background color of the whole page
```js
document.body.style.background = "red";
```