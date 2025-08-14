# Code-Along: Mad Libs Redux
Create a webpage that will allow the user to enter some individual words and tell a silly story.

![](Assets/MadLibs.png)

For this activity, start with the first sentence of the text:

>Pizza was invented by a \_\_\__adjective_\_\_\_ \_\_\__nationality_\_\_\_ chef named \_\_\__person_\_\_\_.

## Part 1 - Basic Setup
Start by copying [this empty project](https://hytop.onrender.com/c/web), then follow the steps below. _Note: this is emptier than usual - sometimes it's good to practice adding the basics!_

1. Open the **index.html** file for editing
2. Add the basic elements: `<html>`, `<head>`, `<body>`
3. Create a new JavaScript file named **script.js**
4. Link the JavaScript file in the HTML file using a `<script>` element

## Part 2 - Creating the Inputs in HTML
The next step is to create some text boxes in the HTML that will appear on the webpage.

1. In the **index.html** file, create a header for the webpage that says "Pizza Pizza"
1. Under that, create a `<p>` element containing a text label that says "Adjective"
1. Within that `<p></p>` element, after the text, create an `<input />` element
    - Ensure that the `<input />` has an `id` attribute
1. Create additional `<p>` elements containing labels and inputs for "Nationality" and "Person"

At this point, the code in the **index.html** file should look something like this:

```html
<html>
    <head>
        <script src="script.js"></script>
    </head>
    <body>
        <h1>Pizza Pizza</h1>
        <p>Adjective: <input id="adjective1" /></p>
        <p>Nationality: <input id="nationality1" /></p>
        <p>Person: <input id="person1" /></p>
    </body>
</html>
```

## Part 3 - Defining the Function in JavaScript
The next step is to _define a function_ that will put the story together. At the top of the **script.js** file, define a function named `madLibs`:

1. Start with the `function` keyword
1. Next, add the function name (`madLibs`)
1. After that, add left/right parentheses
1. Finally, add left/right curly brackets

The function in the **script.js** file should look something like this:

```js
function madLibs() {

}
```

## Part 4 - Getting the Values from Inputs
Now it's time to look at what the user has entered into the text boxes, and pull the values into JavaScript!

In the _body_ of the `madLibs` function (between `{` and `}`):

1. Store the "Adjective" `<input />` element in a variable
    - Create a new variable with `let adjective1Element = `
    - Set it equal to `document.querySelector()`
    - Add quotes (`""`) within the parentheses
    - Within the quotes, add the selector for the first input (`#adjective1`)
1. Get the text from the input element
    - Create another new variable w with `let adjective1Value = `
    - Set it equal to the element `adjective1Element`...
    - But get its value with `.value`
1. Repeat the above steps for each of the remaining two inputs

After these steps, the code in the _body_ of the `madLibs` function (within **script.js**) should look something like this:

```js
let adjective1Element = document.querySelector("#adjective1");
let adjective1Value = adjective1Element.value;

let nationality1Element = document.querySelector("#nationality1");
let nationality1Value = nationality1Element.value;

let person1Element = document.querySelector("#person1");
let person1Value = person1Element.value;
```

## Part 5 - Building the Story
Now that all of the inputs have been filled, the story can be completed! It should use the variables in place of the blanks for the first sentence of the Mad Libs pizza text.

1. Create a new variable named `story` containing the full first sentence:
    - `Pizza was invented by a ___adjective___ ___nationality___ chef named ___person___.`
    - Make sure to use backticks to make it a [template literal](https://www.w3schools.com/js/js_string_templates.asp)!
1. Replace the blanks in the story with the value variables containing the text from the inputs
    - Note: these should _not_ be the element variables that hold the entire HTML elements
1. At the bottom of the function body, use an `alert` to display the story!

The additional code at the bottom of the `madLibs` function (in **script.js**) should look something like this:

```js
let story = `Pizza was invented by a ${adjective1Value} ${nationality1Value} chef named ${person1Value}.`;
alert(story);
```

## Part 6 - Hooking Up a Button
All that's left is to create a button to _call_ the function!

1. Open the **index.html** file for editing
1. Under the last `<p></p>` in the `<body></body>`, add another `<p></p>`
1. Within the `<p></p>`, create a `<button></button>`
1. Set the button text to say "Generate Mad Libs!"
1. Set the `onclick` attribute of the button to call the `madLibs` function

The added button in the **index.html** file should look something like this:

```html
<p><button onclick="madLibs()">Generate Mad Libs!</button></p>
```

Load up the page, enter some values in the text boxes, and click the button! The story should display with the words properly replaced 😊

## Final Code
At the end of the activity, the code should look something like this:

**index.html**

```html
<html>
    <head>
        <script src="script.js"></script>
    </head>
    <body>
        <h1>Pizza Pizza</h1>
        <p>Adjective: <input id="adjective1" /></p>
        <p>Nationality: <input id="nationality1" /></p>
        <p>Person: <input id="person1" /></p>
        <p><button onclick="madLibs()">Generate Mad Libs!</button></p>
    </body>
</html>
```

**script.js**

```js
function madLibs() {
    let adjective1Element = document.querySelector("#adjective1");
    let adjective1Value = adjective1Element.value;
    
    let nationality1Element = document.querySelector("#nationality1");
    let nationality1Value = nationality1Element.value;

    let person1Element = document.querySelector("#person1");
    let person1Value = person1Element.value;

    let story = `Pizza was invented by a ${adjective1Value} ${nationality1Value} chef named ${person1Value}.`;
    alert(story);
}
```
