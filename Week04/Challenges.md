# Function Challenges
Accomplish all of the challenges below without using `if`, `switch`, or any loops. Make sure to check the resource links if you're stuck!

Before beginning the challenges, create an HTML file and a JS file. Link the JS file from the HTML file.

Resources:
- https://www.w3schools.com/js/js_scope.asp
- https://www.w3schools.com/jsref/jsref_obj_global.asp

## Addition Calculator
Add a button to your HTML page with the text "Add". When clicked, the button should:
- Ask the user for the first number they would like to add
- Ask the user for the second number they would like to add
- Display the sum of the two numbers entered

>Hint: To make this work, you will have to convert the values into numbers before performing the addition.

### Additional operations
After creating the addition button, create three more buttons for subtraction, multiplication, and division. These buttons should work like the "Add" button, but instead of adding the two numbers, they should perform the new calculation.

## The Cat's Meow
>Note: You do not need a button for this challenge!

Add a picture of a cat to your HTML page, and have it display a message of "meow" when clicked.

## Mad Libs
Mad Libs is a phrasal template word game where one player prompts others for a list of words to substitute for blanks in a story, before reading the – often comical or nonsensical – story aloud. If you are not familiar with Mad Libs, here is an example: http://www.redkid.net/cgi-bin/madlibs/concertprogram.pl

### Story
Come up with a simple story containing at least THREE blank spots for the user to insert their own words.
- You can do this on paper or in Notepad before beginning to write any code!
- If you're having trouble coming up with your own story, you can use a nursery rhyme from here: http://www.gutenberg.org/files/23794/23794-h/23794-h.htm#Page_9.
- You can also use any other (appropriate) story you want!

### Button
Create a button in the HTML file.
- The button should have "Mad Libs" as the text
- The button should execute a JavaScript function when clicked

### Function
Define a function in the JS file.
- This function should execute when the user clicks the "Mad Libs" button.

In the body of the function:
- Prompt the user for the blank words in your story
    - Make sure to include the part of speech when you ask the user for a word
- Display the completed story, inserting the user-provided words in place of the blanks

## Go to Google
Add a button with text "Go to Google" to your HTML page that, when clicked, will:
- Display a message saying "Going to Google..."
- Redirect the browser to Google

>Hint: There are a couple different ways to do this. You should not need to use any unfamiliar JavaScript concepts!

## Button-based Calculator
>Note: This is different than the other simpler Addition Calculator challenge.

Create a button-based calculator that can perform addition, subtraction, division, and multiplication.

### Buttons
The HTML for the calculator should consist of many buttons:
- One button for each numeric digit (0-9)
- One button for open and close parenthesis: `(` and `)`
- One button for each basic math operator: `+`, `-`, `/`, and `*`
- One button to perform the final calculation: `=`

### Functionality
#### Character buttons
When any button other than the `=` button is clicked, the program should add that character to the running equation. Additionally, the program should display the current equation. For example, if the "2" button is pressed, the program should display "2". Then, if the "+" button is pressed, the program should display "2+". Then, if the "1" button is pressed, the program should display "2+1".

#### Equals button
When the `=` button is pressed, the program should:
- Display the result of the equation
    - Ex, if the equation is "2+1", display "3"
- Clear the current equation
