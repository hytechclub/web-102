# Challenge - Various Functions
Create a webpage where users can perform various functions on two inputs.

## Setup
### Basics
- Create a new HTML file and JavaScript file with all the basic boiler-plate starter code
- In the HTML file:
    - Create two text inputs, each with an id
    - Create a paragraph with an id
    - Create a button with the text "Add"

### First Button
- In the JavaScript file, define a function named `addNumbers`
- The `addNumbers` function should:
    - Retrieve the text values from the two text inputs in the HTML
    - Convert the text values into numbers
    - Add the two numbers together
    - Retrieve the paragraph from the HTML
    - Set the paragraph's text to be the result of the calculation
    - Clear the text input values
- In the HTML file, set the `onclick` attribute of the button to call the `addNumbers` function

### Second Button
Repeat the steps above for a new function: `multiplyNumbers`. Add a new button to the HTML, and test out both of your buttons.

## Abstracting the Functionality
So far, we are able to execute two functions on the two input values. We want to expand this to make it easier to add more functions, without repeating a lot of code.

### Simplifying functions
Our `addNumbers` and `multiplyNumbers` functions are doing too much right now. In general, functions should do as little as possible, so we don't have to repeat code.

Simplify the `addNumbers` and `multiplyNumbers` functions. They should:
- Take in the text values as _parameters_
- Convert the values to numbers
- Perform the calculation
- Return the result of the calculation (see below)

```js
// assuming the result of the calculation is stored in calcResult
return calcResult;
```

### Runner function
The next step is to create a runner function that will call all other functions as needed. Each button should be identifiable by a number. The runner function will call the corresponding function.

- In the JavaScript file, define a function named `runButton`
- The `runButton` function should:
    - Take in a numeric parameter representing which function to call
    - Retrieve the text values from the two text inputs in the HTML
    - Call the appropriate function, passing the text values as parameters
        - E.g., if the numeric parameter is `1`, add. If the numeric parameter is `2`, multiply.
    - Set the paragraph's text to the result of the function call
    - Clear the text input values

For example, let's say the "Add" button is `1`, and the "Multiply" button is `2`. Calling `runButton(1)` should perform the `addNumbers` action, and calling `runButton(2)` should perform the `multiplyNumbers`. Note that these identifiers are completely arbitrary. You could use any sort of parameter, as long as the `runButton` calls the right function!

### Updating function calls
Now, our `runButton` function should be able to handle any of our buttons! Update the `onclick` attribute for each button so that it calls `runButton` with the appropriate numeric identifier.

## Adding new buttons
Now, to add a new button and function, take these steps:
- In the JavaScript, define a new function that will take in two values, and return the result
- Call this function within the `runButton` function based on its numeric identifier (e.g., 3)
- In the HTML, create a new button that will call `runButton` with the numeric identifier as the parameter (e.g., 3)

That's all! Next, add buttons that will perform the following actions:

1. Divide the two inputs
1. Say whether or not the two inputs are equal (return a string)
1. Return the larger input
1. Return the average of the two inputs
1. Return the larger input minus the smaller input

## More functions - Single input
Try to think of possible calculations to perform on a single input. Try playing this game for inspiration: http://www.functiongame.com/