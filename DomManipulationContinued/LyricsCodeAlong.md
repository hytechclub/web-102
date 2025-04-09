# Code-Along: Lyrics Builder
The goal of this activity is to create a webpage that will allow the user to enter lyrics into a text box line-by-line, and then display them in a nice container. At the end, it should look something like this:

![lyrics builder](Assets/LyricsBuilder.png)

Start with the HTML, and then add some JavaScript to make the "Add" button create a new paragraph and add it to the container! Remix [this project](https://glitch.com/edit/#!/remix/javascriptstarter) to begin. Then, follow the instructions below!

[StackBlitz Mirror](https://stackblitz.com/edit/web-platform-oitfrwv3?file=index.html)

## Part 1 - Adding Content Tags
First, add the elements that will make up the page. Open up the **index.html** file, and add each of these elements within the `<body></body>`:

1. An `<h2>` for "Lyrics"
1. A `<div>` for the container where the lyrics will go
1. Another `<h2>` for "Add Line"
1. Finally, another `<div>` containing:
    1. A text `<input />`
    1. A `<button>` that says "Add"

The code between `<body>` and `</body>` should look something like this:

```html
<h2>Lyrics</h1>
<div></div>
<h2>Add Line</h2>
<div>
    <input type="text" />
    <button>Add</button>
</div>
```

## Part 2 - Adding IDs
It will be necessary to provide `id` attributes for the HTML elements that are to be manipulated in JavaScript. These elements are the lyrics container `<div>` and the text box `<input />`.

| Element | `id` attribute value |
|-|-|
| Lyrics Container `<div>` | `lyrics-container` |
| Add Line `<input />` | `line-text` |

The updated code in the `<body>` in **index.html** should look something like this:

```html
<h2>Lyrics</h1>
<div id="lyrics-container"></div>
<h2>Add Line</h2>
<div>
    <input type="text" id="line-text" />
    <button>Add</button>
</div>
```

## Part 3 - Styling the Lyrics Box
Currently, the `<div>` that will contain the lyrics doesn't have any content, so it won't show up on the page. Add some CSS to select the `<div>` and style it so it appears!

1. Open the **style.css** file for editing
1. Create a new ruleset, and select the Lyrics Container by its `id` value
    - `#lyrics-container { }`
1. Set some properties within the ruleset:
    - `border: 1px dotted black;`
    - `height: 500px;`
    - `width: 500px;`
    - `padding: 10px`

The code in the **style.css** file should look something like this:

```css
#lyrics-container {
    border: 1px dotted black;
    height: 500px;
    width: 500px;
    padding: 10px;
}
```

Run the program, and verify that the `<div>` now appears with a dotted black outline!

## Part 4 - Button Function
Now that the HTML is setup, the only thing left to do is make it work! Start by hooking up the button.

### JavaScript
In the **script.js** file, _define_ a function that will execute when the user clicks our "Add" button. The function should be named `addLine`. There are four pieces of a basic function definition:

1. `function` keyword
1. Function name `addLine`
1. Parentheses (left/right)
1. Curly brackets (left/right)

The code in the **script.js** file should look something like this:

```js
function addLine() {

}
```

### HTML
Next, in the **index.html** file, add an `onclick` attribute to the `<button>` that will _call_ the `addLine` function. The code should look something like this:

```html
<button onclick="addLine();">Add</button>
```

Now when the user clicks the "Add" button on the page, the code within the `addLine` function will run!

## Part 5 - Getting Text from the `<input />`
Whenever the user clicks "Add", the program should look at the text within the `line-text` input.

1. Open the **script.js** file for editing
1. In the body of the `addLine` function, create a new variable named `lineTextInput`
1. Set the variable to be a call to `document.querySelector("")`
1. For the selector string, select the Line Text input by its `id` value (`line-text`)

Creating this variable should look something like this in JavaScript:

```js
let lineTextInput = document.querySelector("#line-text");
```

Notice the selector string used here: `"#line-text"`. After the `<input />` element is stored in a variable, it will be necessary to use `.value` to retrieve the text that has been entered into the field.

1. Make a new line under the `lineTextInput` variable
1. Create a new variable named `lineText`
1. Set it equal to the `.value` of the `lineTextInput` variable

Creating this variable should look something like this:

```js
let lineText = lineTextInput.value;
```

Now, the text the user entered will be stored in the `lineText` variable!

## Part 6 - Creating the New `<p>` Element
Now that the text has been retrieved, it will be possible to create a new paragraph and place the text in it.

1. At the bottom of the `addLine` function, make a couple new lines
1. Create a new variable named `nextLine`
1. Set the variable to be a call to `document.createElement("")`
1. Pass in `p` for the tag name string

Creating this variable should look something like this:

```js
let nextLine = document.createElement("p");
```

Next, properly set the _text value_ of this new paragraph element. This is possible with `.textContent`:

```js
nextLine.textContent = lineText;
```

The new element has been created and fully formed!

## Part 7 - Inserting the New `<p>` Element into the `<div>`
The new paragraph exists, but it will not appear on the webpage until it is inserted somewhere. It should go in the Lyrics Container `<div>`.

1. At the bottom of the `addLine` function, make some new lines
1. create a new variable named `lyricsContainer`
1. Set the variable to be a call to `document.querySelector("")`
1. For the selector string, select the Line Text input by its `id` value (`lyrics-container`)

The code to store this HTML element should look something like this:

```js
let lyricsContainer = document.querySelector("#lyrics-container");
```

Notice the selector string used here: `"#lyrics-container"`. Now that the `<div>` element is stored in the `lyricsContainer` variable, it will be possible to insert the newly-created paragraph element into it! This is possible with `.appendChild`:

```js
lyricsContainer.appendChild(nextLine);
```

Now, the button on the page is clicked, it should create a new paragraph using the text from the text box and add it to the Lyrics Container!

## Part 8 - Clearing the Input
The last thing needed is to clear out the value of the `<input>` after a line has been added. To accomplish this, set `.value` of the `<input>` to the empty string (`""`):

```js
lineTextInput.value = "";
```

And that's it! At this point, the Lyrics Builder should be fully functional! Test it out to make sure everything is working.

## Final Code
The final code should look something like this:

**index.html**

```html
<html>
    <head>
        <link href="style.css" rel="stylesheet" type="text/css" />
        <script src="script.js"></script>
    </head>
    <body>
        <h2>Lyrics</h1>
        <div id="lyrics-container"></div>
        <h2>Add Line</h2>
        <div>
            <input type="text" id="line-text" />
            <button onclick="addLine();">Add</button>
        </div>
    </body>
</html>
```

**script.js**

```js
function addLine() {
    let lineTextInput = document.querySelector("#line-text");
    let lineText = lineTextInput.value;
    let nextLine = document.createElement("p");
    nextLine.textContent = lineText;

    let lyricsContainer = document.querySelector("#lyrics-container");
    lyricsContainer.appendChild(nextLine);

    lineTextInput.value = "";
}
```
