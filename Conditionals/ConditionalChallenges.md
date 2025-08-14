# Challenges
First, create a new project by [copying this one](https://hytop.onrender.com/c/js). Then, complete the following challenges.

## Quiz Me
Add a button to the **index.html** file. When clicked, the program should ask the user at least _three_ questions that have correct answers. If the user answers all of the questions correctly, the program should display a message saying they passed. If the user does NOT answer all questions correctly, the program should display a message saying they did NOT pass.

### Additional Challenge
In addition to displaying whether the user passed or not, display their final score. For example, if they scored 2 out of 3, display "You scored 2/3".

## Five Questions
Create a simplified [Twenty Questions](https://en.wikipedia.org/wiki/20Q)-style game where your program will attempt to guess what object the user has in mind.

The user should click a button to start the game. Then, the program should ask at least 5 questions in attempt to determine the user's object. The user should be able to answer either "Yes" or "No". When the user answers the questions, the program should narrow down the possible answers. After 5 (or more) questions, the program should display a guess.

### Additional Challenges
- Add more questions to the game, and more possible guesses
- Ask different questions based on the user's answers to the previous questions
- Instead of using `prompt` to ask the user the yes or no questions, display the question in an `alert` and then allow the user to click a "Yes" or "No" button on the HTML page to answer. Create a new HTML file for this challenge.

## Boolean Logical Operators
>Resource: [JavaScript Logical Operators](LogicOperators.md)

Simplify each of the following boolean expressions (under **Expressions**). The result should either be true, false, or a simplified expression including variables. If the variables get confusing, try using a [truth table](https://en.wikipedia.org/wiki/Truth_table).

### Examples
Take a look at these examples to see what's expected.

**Expressions with no variables**

- Expression: `(true || false) && true`
- Simplified: `true`

**Expressions with variables**

- Expression: `(x || y) && (y || x)`
- Simplified: `x || y`

### Expressions
Here are some expressions to try and evaluate:

1. `(true && !(true || false)) || false`
1. `(true && x) || (false && x)`
1. `!(false && x) || (!x && !false)`
1. `!(false && true && true) && (false || true)`
1. `!(x || y)`
1. `!(!x || !y)`

## Ternary Conditionals
>Resource: [JavaScript Conditional Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

Convert all conditionals into ternary statements. For example, if the code looked like this:

```javascript
let message;
if (x === 5) {
    message = "x is 5";
} else {
    message = "x is not 5";
}

alert(message);
```

it could be converted to this:

```javascript
let message = x === 5 ? "x is 5" : "x is not 5";

alert(message);
```
