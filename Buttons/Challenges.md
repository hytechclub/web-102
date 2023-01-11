# Challenges: Functions
Accomplish all of the challenges below without using `if`, `switch`, or any loops. Make sure to check the resource links if you're stuck!

Start by creating a fork of [this starter Repl](https://replit.com/@HylandOutreach/JavaScriptStarter). Some of these are fairly challenging, but all of them are definitely possible!

**Resources**

- [JavaScript Scope](https://www.w3schools.com/js/js_scope.asp)
- [JavaScript Global Functions](https://www.w3schools.com/jsref/jsref_obj_global.asp)

## Addition Calculator
Add a button to the **index.html** file with the text "Add". When clicked, the button should:

- Ask the user for the first number they would like to add
- Ask the user for the second number they would like to add
- Display the sum of the two numbers entered

>Hint: to make this work, it will be necessary to convert the values into numbers before performing the addition.

### Additional Operations
After creating the addition button, create three more buttons for subtraction, multiplication, and division. These buttons should work like the "Add" button, but instead of adding the two numbers, they should perform the new calculation.

## The Cat's Meow
>Note: A button is not necessary for this challenge!

Add a picture of a cat to the **index.html** file, and have it display a message of "meow" when clicked.

## Mad Libs
Create a button that will generate a [mad libs](https://en.wikipedia.org/wiki/Mad_Libs) story when clicked.

### Story
Come up with a simple story containing at least THREE blank spots for the user to insert their own words. If desired, start by writing this own on paper or in a text file.

### Button
Create a button in the **index.html** file.

- The button should have "Mad Libs" as the text
- The button should execute a JavaScript function when clicked

### Function
Define a function in the **script.js** file. This function should execute when the user clicks the "Mad Libs" button.

In the body of the function:

- Prompt the user for the blank words in the story
    - Make sure to include the part of speech when asking the user for a word
- Display the completed story, inserting the user-provided words in place of the blanks

## Go to Google
Add a button with text "Go to Google" to the **index.html** page that, when clicked, will:

- Display a message saying "Going to Google..."
- Redirect the browser to Google

>Hint: there are a couple different ways to do this. It is possible to do it without using any new coding concepts!

## Button-based Calculator
>Note: this is different than the other simpler Addition Calculator challenge.

Create a button-based calculator that can perform addition, subtraction, division, and multiplication.

### Buttons
The HTML for the calculator should consist of many buttons:

- One button for each numeric digit (0-9)
- One button for open and close parenthesis: `(` and `)`
- One button for each basic math operator: `+`, `-`, `/`, and `*`
- One button to perform the final calculation: `=`

### Functionality
Each of the buttons should have a different functionality.

#### Character Buttons
When any button other than the `=` button is clicked, the program should add that character to the running equation. Additionally, the program should display the current equation. For example, if the "2" button is pressed, the program should display "2". Then, if the "+" button is pressed, the program should display "2+". Then, if the "1" button is pressed, the program should display "2+1".

#### Equals Button
When the `=` button is pressed, the program should:
- Display the result of the equation
    - Ex, if the equation is "2+1", display "3"
- Clear the current equation
