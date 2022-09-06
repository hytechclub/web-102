# Challenges
Accomplish all of the challenges below without using `if`, `switch`, or any loops. Make sure to check the resource links if you're stuck!

Resources:
- [Randomness](https://www.w3schools.com/js/js_random.asp)
- [String Object](https://www.w3schools.com/jsref/jsref_obj_string.asp)
- [Operators](https://www.w3schools.com/jsref/jsref_operators.asp)
- [Binary](https://www.mathsisfun.com/binary-number-system.html)
- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

For each challenge, create a new Repl project by forking [this starter project](https://replit.com/@HylandOutreach/JavaScriptStarter). Optionally, each challenge can be completed in the same Repl project. 

## 1. Repeater
Create a new HTML page that, when opened, will repeat a message. Ask the user to enter a message, and then ask them how many times they would like to repeat it. Display the output.

## 2. Dice Roll
Create a new HTML page that, when opened, will display a message with a random number from 1-6.

### Many-sided Die
Before displaying the random number, ask the user how many choices should be available for the dice roll. There should be no limit to the number of sides on the die. For example, if the user says "12", the program should display a random number from 1-12.

### Visual Die
Create another new HTML page where, instead of simply displaying the number, it displays a visual representation of the die. For example, a roll of 2 would display "X X ", a roll of 5 would display "X X X X X ", and so on.

## 3. Random Password
Create a new HTML page that will generate a numeric random password for the user. First, ask the user how many characters they would like for the password (1-16). Then, generate the password for them! The password should consist of only numeric characters.

### Non-numeric Password
Create another HTML page that will generate a random password consisting of alphanumeric characters. Ask the user how many characters they would like for the password (1-8). Then, generate the password for them! The password should consist of only lowercase letters.

## 4. Division with Quotient and Remainder
Create another HTML page that will calculate the quotient AND remainder for two numbers. Ask the user to enter the two numbers (the dividend and divisor) and then display the quotient and remainder. For example, if the user enters "15" for the dividend, and "7" for the divisor, the program should output "7 R 1". You can use [this tool](https://www.calculatorsoup.com/calculators/math/longdivision.php) to test your math.

## 5. Multiply by 2
Create another HTML page that will multiply a given number by 2, with one catch: do not use `+`, `-`, `/`, or `*`. Ask the user for a number to multiply, and then perform the calculation. For example, if the user enters "6", the program should display "12".

### Multiply by a Power of 2
Instead of multiplying by 2 every time, ask the user for a power of 2 to multiply by. For example, if the user enters "5" for the number, and "2" for the power of 2, the program should perform the calculation `5 times (2^2)`, which reduces to `5 times 4`, and display "20". In this example, the `^` symbol represents an exponent. If the user enters "9" for the number and "9" for the power of 2, the program should perform the calculation `9 times (2^9)` and display "4608".

## 6. Regular Expressions
[Click here to access the tutorial covering regular expressions.](https://regexone.com/)

Then, create another HTML page that will test a string against a regular expression. For example, if the user entered `Hello` for the string, and `ello` for the regular expression, the program should display `true`. If the user entered `Hello` for the string, and `ello2` for the regular expression, the program should display `false`.
