# Code-Along: Dice Roller
There is currently [a webpage](https://dicerollerstart.hylandoutreach.repl.co/) that can simulate a 6-sided die roll on the click of a button. The task at hand is to add buttons so that it is possible to roll other types of dice as well.

## Background Information - Random Number Generation
Random numbers can be an extremely useful tool when creating games. Any time there is any sort of probability in a game, it's probably using random numbers!

### `Math.random()`
In JavaScript, `Math.random()` is used to generate a random decimal number between `0` and `1`.

### Expanding the Range
To make the `Math.random()` number a little more usable, it can be multiplied by however many options are desired For example, `Math.random() * 5` would return a random decimal number between `0` and `5`, `Math.random() * 100` would return a random decimal number between `0` and `100`, and so on. A regular die has 6 sides, so initially, the number should be multiplied by `6`.

### Limiting the Numbers to Integers with `Math.floor()`
In this case, the goal is to generate integers. A die has a certain number of integer sides, so decimals do not really make sense. To round down a decimal number, `Math.floor()` can be used. This function will round any decimal number DOWN to the nearest whole number. For example, given `0.01`, it would return `0`. Given `11.9`, it would return `11`. Given `5.0`, it would return `5`, because 5 is already a whole number.

After rounding the number down, it is necessary to add `1`; this shifts the range from `0` through `5` to `1` through `6` (inclusive).

When applied to the randomly-generated number from a given range, it is possible to reach all the sides for a die! Now, make some updates to our code to make good use of these random numbers.

## Part 1 - Getting Started
Begin by forking [this starter project](https://replit.com/@HylandOutreach/DiceRollerStart).

## Part 2 - A 4-sided Die Roll
Now it's time to start expanding this application. The first thing to do is add another die - this time, one with four sides. Add a button in the HTML, and make it call a JavaScript function that displays a random number between `1` and `4`.

### HTML - Adding a Button
Start by updating the HTML.

1. Open the **index.html** file for editing
1. Above the existing `<button>` in the `<body></body>`, add another `<button>`
1. Make the text for this new button say `D4`
1. Set the `onclick` attribute of the new button to _call_ a function named `rollD4`
    - This function has yet to be _defined_ - that's next!

The additional HTML should look something like this:

```html
<button onclick="rollD4();">D4</button>
```

### JavaScript - Button Functionality
Next, it's time to define the function in JavaScript.

1. Open the **script.js** file for editing
1. Under the existing function definition, define a _new_ function named `rollD4`
    - `function` keyword
		- Function name: `rollD4`
		- Parentheses (left/right)
		- Curly brackets (left/right)
1. In the _body_ of the new function (between `{` and `}`), type out the statements from the `rollD6` function
    - This function will be very similar...
1. Change the `randomDecimalRange` variable so that it multiplies the `randomDecimal` by `4` instead of `6`
    - This will allow for a range between `1` and `4`

The new function should look something like this:

```js
function rollD4() {
  let randomDecimal = Math.random();
  let randomDecimalRange = randomDecimal * 4;
  let randomIntegerFloored = Math.floor(randomDecimalRange);
  let randomDiceRoll = randomIntegerFloored + 1;
	let message = `You rolled a ${randomDiceRoll}!`;

  alert(message);
}
```

Load up the page, and click the new "D4" button a few times to make sure it is working properly!

## Part 3 - A D8 Roll
Next, add another button and function for an 8-sided die. This should be very similar to the steps above! Copy the HTML `<button>` code with different text and a different function call, and then copy the `rollD4` function and change the name and `randomDecimalRange` multiplication factor.

The HTML should look something like this:

```html
<button onclick="rollD8();">D8</button>
```

And the JavaScript should look something like this:

```js
function rollD8() {
  let randomDecimal = Math.random();
  let randomDecimalRange = randomDecimal * 8;
  let randomIntegerFloored = Math.floor(randomDecimalRange);
  let randomDiceRoll = randomIntegerFloored + 1;
	let message = `You rolled a ${randomDiceRoll}!`;

  alert(message);
}
```

Try out the "D8" button, and make sure it works!

It should be function, but it is evident that this is becoming a little tedious. If there were a bunch of different types of dice, the code would become pretty difficult to manage. Luckily, there is a better way: function parameters!

## Part 4 - Function Parameters
Since there is only one small part of the functions that differ for different dice rolls, it will be possible to use a single function and a _parameter_ instead! This allows the project to cut down on repeated code, and makes it easier for anyone to change the mechanics for all dice rolls.

### Updating the Function Definition
To add a parameter, place a new variable name _within_ the parentheses of the function definition, like this:

```js
function rollD8(sides) { /* ... */ }
```

After that, the `sides` variable will be accessible inside of the body of the function. The value of the `sides` variable will be whatever is passed when the function is called (the _argument_). That can be used to determine the multiplication factor for the roll range.

1. Open the **script.js** file for editing
1. Add the `sides` parameter to the `rollD8` function definition
    - Add `sides` within the parentheses right after the function name
1. In the body of the `rollD8` function, replace the `8` with `sides`
    - The range of the die roll will be based on this instead of just `8`!
1. To reflect the new functionality, change the name of the function to simply `rollD`

At this point, the function definition should look something like this:

```js
function rollD(sides) {
  let randomDecimal = Math.random();
  let randomDecimalRange = randomDecimal * sides;
  let randomIntegerFloored = Math.floor(randomDecimalRange);
  let randomDiceRoll = randomIntegerFloored + 1;
	let message = `You rolled a ${randomDiceRoll}!`;

  alert(message);
}
```

### Updating the Function Call
Now that the function _definition_ has been updated, the function _call_ to `rollD8` will be broken! In the HTML file, update the "D8" button so that it works.

1. Open the **index.html** file for editing
1. Find the `<button>` for `D8`
1. In the `onclick` attribute, update the function name
    - Instead of `rollD8`, it should simply be `rollD`
1. Within the function call parentheses, pass in the number of sides
    - This should be `8`

The updated button in the HTML should look something like this:

```html
<button onclick="rollD(8);">D8</button>
```

### Updating the Function Calls for Other Dice
The big benefit of this new parameter is that it is now possible to update the other function calls too!

For each button in the **index.html** file:

1. Update the function name within the `onclick` attribute so it is simply `rollD`
1. Between the function call parentheses, pass in the appropriate number of sides
    - e.g., `6` for the `D6` button

The HTML should end up looking something like this:

```html
<button onclick="rollD(4);">D4</button>
<button onclick="rollD(6);">D6</button>
<button onclick="rollD(8);">D8</button>
```

It should now be possible to remove all the other function definitions from the **script.js** file; all that is needed is the generic `rollD` function! Once this is done, test out all the buttons to make sure they still work.

### Adding a D20
It is now incredibly easy to add a new die. Simply create a new button, and call the `rollD` function with the appropriate parameter. Add a D20 button to the page!

1. Open the **index.html** file for editing
1. Under the last `<button>` in the `<body></body>`, add another `<button>`
1. Set the text of the `<button>` to be `D20`
1. Set the `onclick` of the `<button>` to call the `rollD` function
1. Pass in `20` as the argument between the parentheses

The new HTML button should look something like this:

```html
<button onclick="rollD(20);">D20</button>
```

Test out the D20 button, and make sure it works as intended! Notice that no JavaScript updates are necessary; the parameter makes the code flexible enough to work with new values.

## Part 5 - Using DOM Manipulation to Display the Dice Roll
Next, it's time to update our function so that instead of using an `alert` to show the roll result to the user, it updates the text of a paragraph on the HTML page. If there were multiple functions for each die, it would be necessary to update all of those functions individually. Luckily, because of function parameters, only one function definition will need updating!

### HTML - Adding a Paragraph
The first step will be to add a new paragraph that will be able to hold the roll result.

1. Open the **index.html** file for editing
1. Under the last `<button>` in the `<body></body>`, add a `<p>`
1. Give the `<p>` a unique `id` attribute: `display-roll`

The added HTML should look something like this:

```html
<p id="display-roll"></p>
```

Note that the paragraph should be empty at this point, and will not display anything... yet!

### JavaScript - Setting the Paragraph Text
Now that the paragraph exists in the HTML, it will be necessary to set its text programmatically, based on the result of the randomized dice roll.

1. Open the **script.js** file for editing
1. In the body of the `rollD` function, remove the `alert`
1. Make a new line in the body, and create a variable named `displayPara`
1. Set the `displayPara` variable to be a call to `document.querySelector("")`
    - Between the quotes, pass in the `id` selector for the paragraph: `#display-roll`
1. On the next line, set the `.textContent` of the `displayPara` element
    - It should be set to the `message` variable value

The JavaScript replacing the `alert` statement should look something like this:

```js
let displayPara = document.querySelector("#display-roll");
displayPara.textContent = message;
```

Load up the page, click the buttons, and verify that the new functionality works as intended. The code should update the text directly on the page!

### Adding D120
Again, it is now much simpler to add an additional die roll button. For a D120, just add a new `<button>` in the HTML that calls the `rollD` function with `120` as the argument value! It is possible to add a die with any number of sides.

## Final Result
At the end of this activity, the code should look something like this:

**index.html**

```html
<html>
	<head>
		<link href="style.css" rel="stylesheet" type="text/css" />
		<script src="script.js"></script>
	</head>
	<body>
	<img src="DungeonsAndDragons.jpg">
	<h1>Dice</h1>
		<button onclick="rollD(4);">D4</button>
		<button onclick="rollD(6);">D6</button>
		<button onclick="rollD(8);">D8</button>
		<button onclick="rollD(20);">D20</button>
    <button onclick="rollD(120);">D120</button>
    <p id="display-roll"></p>
	</body>
</html>
```

**script.js**

```js
function rollD(sides) {
  let randomDecimal = Math.random();
  let randomDecimalRange = randomDecimal * sides;
  let randomIntegerFloored = Math.floor(randomDecimalRange);
  let randomDiceRoll = randomIntegerFloored + 1;
	let message = `You rolled a ${randomDiceRoll}!`;

  let displayPara = document.querySelector("#display-roll");
	displayPara.textContent = message;
}
```
