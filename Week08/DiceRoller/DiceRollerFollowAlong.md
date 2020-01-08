# Functions Follow-Along: Dice Roller
We currently have a webpage ([DiceRoller.html](DiceRoller.html)) that can simulate a 6-sided die roll on the click of a button. Our task is to add buttons so that we can roll other types of dice as well!

## Background information - Random Number generation
Random numbers can be an extremely useful tool when creating games. Any time there is any sort of probability in a game, it's probably using random numbers!

### `Math.random`
In Javascript, you can use `Math.random()` to generate a random decimal number between 0 and 1.

### Expanding the range
To make the `Math.random()` number a little more usable, we first multiply it by however many options we'd like. For example, `Math.random()*5` would give you a random decimal number between 0 and 5, `Math.random()*100` would give you a random decimal number between 0 and 100, and so on. A regular die has 6 sides, so we want to multiply the number by 6.

### Limiting the numbers to integers with `Math.ceil`
In our case, we want to generate integers. A die has a certain number of integer sides, so decimals do not really make sense. To round up a decimal number, we use `Math.ceil()`. "ceil" here is short for ceiling, and it will round any decimal number UP to the nearest whole number. For example, given `0.01`, it would return `1`. Given `11.9`, it would return `12`. Given `5.0`, it would return `5`, because 5 is already a whole number.

When applied to our randomly-generated number from a given range, we can get all the sides for a die! Now, let's make some updates to our code to make good use of these random numbers.

## A 4-sided Die Roll
Start by creating another button, labeled "D4", next to the "D6" button. As with any button that should execute JavaScript, we want to set its `onclick` attribute. We are also going to define a new function in the [DiceRoller.js](DiceRoller.js) file. Use the `rollD6` function as a template, because the `rollD4` function will be very similar.

#### HTML

```html
<button onclick="rollD4();">D4</button>
```

#### JS

```javascript
function rollD4() {
	var randomDecimal = Math.random();
	var randomDecimalRange = randomDecimal * 4;
	var randomDiceRoll = Math.ceil(randomDecimalRange);
	alert("You rolled a " + randomDiceRoll + "!");
}
```

## A D8 roll
Let's add another button/function for an 8-sided die. This time, we can simply copy and paste the code for D4. We only have to change a few  things: the function name, the factor multiplied by `randomDecimal`, and of course, the button text.

#### HTML

```html
<button onclick="rollD8();">D8</button>
```

#### JS

```javascript
function rollD8() {
	var randomDecimal = Math.random();
	var randomDecimalRange = randomDecimal * 8;
	var randomDiceRoll = Math.ceil(randomDecimalRange);
	alert("You rolled a " + randomDiceRoll + "!");
}
```

You may notice that this is becoming a little tedious. If we needed to do this for many other types of dice, our code would start to become pretty difficult to manage. Luckily, there is a better way: function parameters!

## Function Parameters
Since there is only one small part of the functions that differ for different dice rolls, we can use a single function and a _parameter_ instead! This allows us to cut down on repeated code, and makes it easier for us to change the mechanics for all dice rolls.

### Updating the function definition
To add a parameter, we need to place a new variable name within the parenthesis of the function definition, like this:

```javascript
function rollD8(sides)
```

After that, we can use the `sides` variable inside of the body of our function. The value of the `sides` variable will be whatever is passed when the function is called. Replace the `8` in the function body with `sides`. We should also change the name of this function to reflect that it can handle any number of sides. Change it to simply `rollD`:

```javascript
function rollD(sides) {
	var randomDecimal = Math.random();
	var randomDecimalRange = randomDecimal * sides;
	var randomDiceRoll = Math.ceil(randomDecimalRange);
	alert("You rolled a " + randomDiceRoll + "!");
}
```

### Updating the function call
Now that we've updated our function definition, we need to fix how it is called. In the HTML file, update the `onclick` attribute for the D8 button so that it calls the correct function, and passes in the correct parameter:

```html
<button onclick="rollD(8);">D8</button>
```

### Updating the function calls for the other dice
The big benefit of these parameters is that we can update our other function calls too! Update the `onclick` for both the D6 and D4 buttons to call the new `rollD` function. After doing that, we can even remove the additional functions from our JavaScript file, so we only have `rollD`.

```html
<button onclick="rollD(6);">D6</button>
<button onclick="rollD(4);">D4</button>
<button onclick="rollD(8);">D8</button>
```

### Adding D20
It is now incredibly easy to add a new die. We can simply create a new button, and call the `rollD` function with the appropriate parameter. Add a D20 button to the page too:

```html
<button onclick="rollD(20);">D20</button>
```

Notice that we don't have to update anything in our JavaScript file; the parameter makes our code flexible enough to work with new values.

## Using DOM Manipulation to display the dice roll
We want to update our function so that instead of using `alert` to show the roll result to the user, it updates the text of a paragraph on the HTML page. If we had multiple functions for each die, we would have to update all of those functions individually. Lucky for us, we only need to update one function!

Follow these steps to update the webpage:
- In the HTML, create a new `p` element under the buttons
    - Give the `p` a unique `id` attribute
- In the JavaScript, remove the `alert` from the `rollD` function
- Use `document.querySelector` to store the `p` element in a JavaScript variable
- Set the text of the `p` element to the message using `.textContent`

#### HTML

```html
<p id="myParagraph"></p>
```

#### JavaScript

```javascript
var paragraphElement = document.querySelector("#myParagraph");
paragraphElement.textContent = "You rolled a " + randomDiceRoll + "!";
```

Now, when the user clicks any of the dice roll buttons, the code should update the `p` text on the page!

### Adding D120
Again, it is incredibly easy to add an additional button. All we have to do is add a new button in the HTML that calls the `rollD` function with `120` as the parameter value! You can do this with a die having any number of sides.

## Final Result

#### HTML

```html
<html>
	<head>
		<style>
			body {
				background-color: red;
				text-align: center;
			}

			h1 {
				color: black;
			}
		</style>
		<script src="DiceRoller.js"></script>
	</head>
	<body>
	<img src="https://i.imgur.com/XvxwZTp.jpg">
	<h1>Dice</h1>
		<button onclick="rollD(6);">D6</button>
		<button onclick="rollD(4);">D4</button>
		<button onclick="rollD(8);">D8</button>
		<button onclick="rollD(20);">D20</button>
        <button onclick="rollD(120);">D120</button>
        <p id="myParagraph"></p>
	</body>
</html>
```

#### JavaScript

```javascript
function rollD(sides) {
	var randomDecimal = Math.random();
	var randomDecimalRange = randomDecimal * sides;
    var randomDiceRoll = Math.ceil(randomDecimalRange);
    
    var paragraphElement = document.querySelector("#myParagraph");
    paragraphElement.textContent = "You rolled a " + randomDiceRoll + "!";
}
```