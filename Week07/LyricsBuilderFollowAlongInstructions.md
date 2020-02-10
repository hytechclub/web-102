# Lyrics Builder
We want to create a webpage that will allow us to enter lyrics into a text box line-by-line, and then display them in a nice container. When we're done, it should look something like this:

![lyrics builder](https://i.imgur.com/wOv6a01.png)

We'll start with the HTML, and then add some JavaScript to make the "Add" button create a new paragraph and add it to the container!

## Basic HTML
Start with the basic tags: `html`, `head`, `body`, and `style`

```html
<html>
    <head>
        <style>
        </style>
    </head>
    <body>
    </body>
<html>
```

## Adding content Tags
Next, add in the tags that make up the page: an `<h2>` for "Lyrics", a `<div>` for the container where the lyrics will go, another `<h2>` for "Add Line", and finally, another `<div>` containing the text input and the "Add" button:

```html
<html>
    <head>
        <style>
        </style>
    </head>
    <body>
        <h2>Lyrics</h1>
        <div></div>
        <h2>Add Line</h2>
        <div>
            <input type="text">
            <button>Add</button>
        </div>
    </body>
</html>
```

## Adding IDs
We will also need to provide `id` attributes for the HTML elements we want to manipulate in JavaScript. We will need the lyrics container `<div>`, and the text `<input>`:

```html
<html>
    <head>
        <style>
        </style>
    </head>
    <body>
        <h2>Lyrics</h1>
        <div id="lyricsContainer"></div>
        <h2>Add Line</h2>
        <div>
            <input type="text" id="lineText">
            <button>Add</button>
        </div>
    </body>
</html>
```

## Styling the Lyrics box
Currently, the `<div>` that will contain the lyrics doesn't have any content, so it won't show up on our page. We want to add a border, a height, a width, and some padding to the box. This `<div>` already has an `id` attribute, so we can use that to select it in CSS in the `<style></style>` tag (`#lyricsContainer`):

```html
<html>
    <head>
        <style>
            #lyricsContainer {
                border: 1px dotted black;
                height: 500px;
                width: 500px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h2>Lyrics</h1>
        <div id="lyricsContainer"></div>
        <h2>Add Line</h2>
        <div>
            <input type="text" id="lineText">
            <button>Add</button>
        </div>
    </body>
</html>
```

## Adding Interactivity with JavaScript
Now that we have our HTML all set up, the only thing left to do is make it work! We can start by creating a new JavaScript file called "LyricsBuilder.js". Then, we can link the file to our HTML page in a `<script>` tag:

```html
<html>
    <head>
        <script src="LyricsBuilder.js"></script>
        <style>
            #lyricsContainer {
                border: 1px dotted black;
                height: 500px;
                width: 500px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h2>Lyrics</h1>
        <div id="lyricsContainer"></div>
        <h2>Add Line</h2>
        <div>
            <input type="text" id="lineText">
            <button>Add</button>
        </div>
    </body>
</html>
```

### Button Function
Once we have a linked JavaScript file, we can use it to define a function that will execute when the user clicks our "Add" button. We will name our function `addLine`:

#### JavaScript File

```js
function addLine() {

}
```

#### HTML File

```html
<html>
    <head>
        <script src="LyricsBuilder.js"></script>
        <style>
            #lyricsContainer {
                border: 1px dotted black;
                height: 500px;
                width: 500px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h2>Lyrics</h1>
        <div id="lyricsContainer"></div>
        <h2>Add Line</h2>
        <div>
            <input type="text" id="lineText">
            <button onclick="addLine();">Add</button>
        </div>
    </body>
</html>
```

Now when the user clicks the "Add" button on our HTML page, the code within the `addLine` function will run!

### Getting text from the `<input>`
Whenever the user clicks "Add", we want to look at the text within the `lineText` input. First, we need to use `document.querySelector` to find the `<input>` element and store it in a variable:

```javascript
function addLine() {
    var lineTextInput = document.querySelector("#lineText");
}
```

Notice the selector we are using here: "#lineText". After we have the `<input>` element stored in a variable, we want to use `.value` to retrieve the text that has been entered into the field:

```javascript
function addLine() {
    var lineTextInput = document.querySelector("#lineText");
    var lineText = lineTextInput.value;
}
```

Now, the text the user entered will be stored in the `lineText` variable!

### Creating the new `<p>` element
Now that we have the text, we can create a new paragraph and place the text in it. To create a new element and store it in a variable, we will use `document.createElement`:

```javascript
function addLine() {
    var lineTextInput = document.querySelector("#lineText");
    var lineText = lineTextInput.value;

    var nextLine = document.createElement("p");
}
```

Next, we want to set the text of this new paragraph (stored in the `nextLine` variable) to the value of our `lineText` variable, using `.textContent`:

```javascript
function addLine() {
    var lineTextInput = document.querySelector("#lineText");
    var lineText = lineTextInput.value;
    
    var nextLine = document.createElement("p");
    nextLine.textContent = lineText;
}
```

Now we have a brand new paragraph!

### Inserting the new `<p>` element into the `<div>`
We have created a new paragraph, but it still won't appear on our webpage until we insert it somewhere. We want to place it in the lyrics box, our `lyricsContainer` div. The first thing we need to do is find that `<div>` element and store it in a variable:

```javascript
function addLine() {
    var lineTextInput = document.querySelector("#lineText");
    var lineText = lineTextInput.value;
    
    var nextLine = document.createElement("p");
    nextLine.textContent = lineText;

    var lyricsContainer = document.querySelector("#lyricsContainer");
}
```

Notice the selector we are using here: "#lyricsContainer". Now that we have our `<div>` element stored in the `lyricsContainer` variable, we can insert the paragraph into it! To do that, we use `.appendChild`:

```javascript
function addLine() {
    var lineTextInput = document.querySelector("#lineText");
    var lineText = lineTextInput.value;
    
    var nextLine = document.createElement("p");
    nextLine.textContent = lineText;

    var lyricsContainer = document.querySelector("#lyricsContainer");
    lyricsContainer.appendChild(nextLine);
}
```

Now, when we click our button, it should create a new paragraph and add it to the lyrics container!

### Clearing the Input
The last thing we need to do is clear out the value of our `<input>` after a line has been added. To accomplish this, we simply set `.value` of the `<input>` to the empty string (`""`):

```javascript
function addLine() {
    var lineTextInput = document.querySelector("#lineText");
    var lineText = lineTextInput.value;
    
    var nextLine = document.createElement("p");
    nextLine.textContent = lineText;

    var lyricsContainer = document.querySelector("#lyricsContainer");
    lyricsContainer.appendChild(nextLine);

    lineTextInput.value = "";
}
```

Now our Lyrics Builder is fully functional!

## Final Product
#### HTML
```html
<html>
    <head>
        <script src="LyricsBuilder.js"></script>
        <style>
            #lyricsContainer {
                border: 1px dotted black;
                height: 500px;
                width: 500px;
                padding: 10px;
            }
        </style>
    </head>
    <body>
        <h2>Lyrics</h1>
        <div id="lyricsContainer"></div>
        <h2>Add Line</h2>
        <div>
            <input type="text" id="lineText">
            <button onclick="addLine();">Add</button>
        </div>
    </body>
</html>
```

#### JavaScript (LyricsBuilder.js)
```javascript
function addLine() {
    var lineTextInput = document.querySelector("#lineText");
    var lineText = lineTextInput.value;
    var nextLine = document.createElement("p");
    nextLine.textContent = lineText;

    var lyricsContainer = document.querySelector("#lyricsContainer");
    lyricsContainer.appendChild(nextLine);

    lineTextInput.value = "";
}
```