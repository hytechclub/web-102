# Booleans and Conditionals Challenges
First, create a new HTML file and a new JS file. The HTML file should link to the JS file. Then, complete the following challenges.

## Simple Chat Bot
Add a button to the HTML page. When clicked, ask the user to enter a message for the chat bot. Create at least 5 responses to five different messages. If the user enters a message the program does not recognize, it should display "I do not understand your message".

### Examples
If the user enters "Hello", the chatbot could respond with "Goodbye".
If the user enters "How are you?" the chatbot could respond with "I am well, thank you".

The specific messages/responses are up to you to decide!

## Quiz Me
Add a button to the HTML page. When clicked, the program should ask the user at least 3 questions that have correct answers. If the user answers all of the questions correctly, the program should display a message saying they passed. If the user does NOT answer all questions correctly, the program should display a message saying they did NOT pass.

### Additional Challenge
In addition to displaying whether the user passed or not, display their final score. For example, if they scored 2 out of 3, display "You scored 2/3".

## Five Questions
Create a simplified Twenty Questions-style game where your program will attempt to guess what object the user has in mind. For reference, it should work something like this: http://www.20q.net/

The user should click a button to start the game. Then, the program should ask at least 5 questions in attempt to determine the user's object. The user should be able to answer either "Yes" or "No". When the user answers the questions, the program should narrow down the possible answers. After 5 (or more) questions, the program should display a guess.

### Additional challenges
- Add more questions to the game, and more possible guesses
- Ask different questions based on the user's answers to the previous questions
- Instead of using `prompt` to ask the user the yes or no questions, display the question in an `alert` and then allow the user to click a "Yes" or "No" button on the HTML page to answer. Create a new HTML file for this challenge.

## Boolean Logical Operators
>Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

Simplify each of the following boolean values. The result should either be true, false, or a simplified expression including variables. If the variables get confusing, try using a truth table: https://en.wikipedia.org/wiki/Truth_table

### Examples
No variables
- Expression: `(true || false) && true`
- Simplified: `true`

Variables
- Expression: `(x || y) && (y || x)`
- Simplified: `x || y`

### Expressions
1. `(true && !(true || false)) || false`
2. `(true && x) || (false && x)`
3. `!(false && x) || (!x && !false)`
4. `!(false && true && true) && (false || true)`
5. `!(x || y)`
6. `!(!x || !y)`

## Ternary Conditionals
>Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

Convert all of your conditionals into ternary statements. For example, if you had

```javascript
var message;
if (x === 5) {
    message = "x is 5";
} else {
    message = "x is not 5";
}

alert(message);
```

you would convert it to

```javascript
var message = x === 5 ? "x is 5" : "x is not 5";

alert(message);
```