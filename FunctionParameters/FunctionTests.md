# Challenge: Function Tests
One of the most important practices in the real world of software quality is [unit testing](https://en.wikipedia.org/wiki/Unit_testing). Sometimes, with paradigms like [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development), unit tests are so important that they are written _before_ the actual software!

For this challenge, there is a mocked-up version of a test harness, and it's up to you to make sure all the tests pass. [Click here for the project.](https://glitch.com/edit/#!/function-tests) Add code to the **script.js** file for each challenge.

## Challenge 1: Age Calculator
Determine a person's age based on the year they were born.

- Function Name: `ageCalculator`
- Parameter 1: Year of Birth (Number)
- Return: Estimated Age (assuming everyone was born on Jan 1) (Number)

Example:

```js
let result = ageCalculator(1990);
alert(result); // Should display: 33
```

## Challenge 2: Temperature Converter
Convert a temperature in Celsius into Fahrenheit.

- Function Name: `tempConvert`
- Parameter 1: Temperature in Celsius (Number)
- Return: Temperature in Fahrenheit (Number)

Example:

```js
let result = tempConvert(20);
alert(result); // Should display: 68
```

## Challenge 3: Film Display
Given some information about a movie, create a display message with all of it formatted nicely.

- Function Name: `filmDisplay`
- Parameter 1: Film Title (String)
- Parameter 2: Year Released (Number)
- Parameter 3: Film Director (String)
- Return: A nicely formatted message (String)

Example:

```js
let result = filmDisplay("Tár", 2022, "Todd Field");
alert(result); // Should display: Todd Field - TÁR (2022)
```

## Challenge 4: String Mixer
Given two words, return the combination of the two, slicing out and swapping the first two characters of each (see examples for reference).

- Function Name: `stringMixUp`
- Parameter 1: First Word (String)
- Parameter 2: Second Word (String)
- Return: One Mixed Up string

Examples:

```js
let result = stringMixUp("mix", "pod");
alert(result); // Should display: pox mid

let result2 = stringMixUp("dog", "dinner");
alert(result2); // Should display: dig donner
```

## Challenge 5: Number Reverser
Given a number, return the reverse of the number (see examples for reference).

- Function Name: `reverseNum`
- Parameter 1: A Number (Number)
- Return: The number with digits reversed

Examples:

```js
let result = reverseNum(201);
alert(result); // Should display: 102

let result2 = reverseNum(4073);
alert(result2); // 3704
```
