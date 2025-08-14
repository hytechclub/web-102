# Challenges: Various Functions
Create a webpage where users can perform various functions on two inputs.

## Setup
Start by forking [this empty project](https://glitch.com/edit/#!/emptyweb101), then follow the steps below.

[StackBlitz Mirror](https://stackblitz.com/edit/web-platform-oitfrwv3?file=index.html)

### Basics
Do some initial setup to begin.

1. Create a new **script.js** file
1. Update the **index.html** file with the basic starter code
    - `<html>`, `<body>`, `<head>`, `<script>`
1. Also in the **index.html** file:
    - Create two text `<inputs />`, each with a unique `id`
    - Create a `<p>` with a unique id
    - Create a `<button>` with the text "Add"

### First Button
Make the button add the two numbers from the inputs together, and display the result on the page.

1. In the **script.js** file, define a function named `addNumbers`
1. In the body of the `addNumbers` function:
    - Retrieve the text values from the two text `<inputs />` in the HTML
    - Convert the text values into numbers
    - Add the two numbers together
    - Retrieve the `<p>` from the HTML
    - Set the paragraph's text to be the result of the calculation
    - Clear the text `<input />` values
1. In the **index.html** file, set the `onclick` attribute of the button to call the `addNumbers` function

### Second Button
Repeat the steps above for a new function: `multiplyNumbers`. Add a new `<button>` to the HTML, and test out both of the buttons.

## Abstracting the Functionality
So far, it has been possible to execute two functions on the two input values. Expand this to make it easier to add more functions, without repeating a lot of code.

### Simplifying Functions
The `addNumbers` and `multiplyNumbers` functions are doing too much right now. In general, functions should do as little as possible, so repeated code is not necessary.

Simplify the `addNumbers` and `multiplyNumbers` functions. They should:
- Take in the text values as _parameters_
- Convert the values to numbers
- Perform the calculation
- Return the result of the calculation

### Runner Function
The next step is to create a runner function that will call all other functions as needed. Each button should be identifiable by a number. The runner function will call the corresponding function.

1. In the **script.js** file, define a function named `runButton`
1. In the body of the `runButton` function:
    - Take in a numeric _parameter_ representing which function to call
    - Retrieve the text values from the two text `<input />`s in the HTML
    - Call the appropriate function, passing the text values as _parameters_
        - E.g., if the numeric parameter is `1`, call `addNumbers`. If the numeric parameter is `2`, call `multiplyNumbers`.
    - Set the paragraph's text to the result of the function call
    - Clear the text input values

For example, say the "Add" button is `1`, and the "Multiply" button is `2`. Calling `runButton(1)` should perform the `addNumbers` action, and calling `runButton(2)` should perform the `multiplyNumbers`. Note that these identifiers are completely arbitrary. Any sort of parameter works, as long as the `runButton` calls the right function!

### Updating Function Calls
Now, the `runButton` function should be able to handle any of the buttons! Update the `onclick` attribute for each button so that they each call `runButton` with the appropriate numeric identifier.

## Adding New Buttons
Now, it should be possible to add a new buttons for new calculations.

To add a new button and function:

- In the **script.js** file, define a new function that will take in two values as parameters, and return the result
- Call this function within the `runButton` function based on its numeric identifier (e.g., `3`)
- In the **index.html** file, create a new button that will call `runButton` with the numeric identifier as the parameter (e.g., `3`)

That's all! Try to create buttons that will perform the following actions:

1. Divide the two inputs
1. Say whether or not the two inputs are equal (return a string)
1. Return the larger input
1. Return the average of the two inputs
1. Return the larger input minus the smaller input

## More Functions - Single Input
Try to think of possible calculations to perform on a single input. Try playing [this function game](https://functiongame.com/) for inspiration.
