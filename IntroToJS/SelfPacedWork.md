# Self-Paced Work: Questions Exercise
For this exercise, start by forking [this empty Repl](https://replit.com/@HylandOutreach/EmptyWeb). Then, follow the instructions below to build a little text-based JavaScript program. The program will ask the user a number of questions, and then display some information using the answers the user provides.

You could also add a button onto your Week 1 "About Me" page that links to the Javascript Programs!
>_`<a href="newpage.html">
    <button>Javascript Programs</button>
</a>`
_

## Part 1 - Setup
Start by creating and hooking up a JavaScript file.

1. Create a new file named **script.js**
1. Within the **script.js** file, add a statement that will show a message to the user
1. In the **index.html**, add a `<head></head>` element
1. Within the `<head></head>` element, add a `<script>`
1. Add a `src` attribute to the `script` opening tag to point to the **script.js** file

Run the webpage, and make sure the alert pop-up with the message appears!

>_Note: a `<body></body>` is not required for this HTML page._

## Part 2 - Asking Questions
For each of the questions below, show a text box to the user allowing them to answer. Store all of the user's answers in their own variables. Make sure to choose good variable names!

- What is your full name?
- What is your favorite color?
- What is your favorite movie?
- What is the date today?

## Part 3 - Displaying Answers
For each of the answers retrieved in the previous part, show the user a formatted message like "Name: Charlie Chaplin".

### Extra Challenge
For an added challenge, attempt to display all the information in only one message box.

To add a new line into the long text value, use `\n`.`\n` is an escape sequence that allows a developer to add a _line break_ to a message.

Basically, if the message was:
```js
"Hello\nJim"
```

It would display as:
```
Hello
Jim
```

The `\n` is automatically taken out, and everything that comes after it is on its own line!

## Challenges
For these challenges, do some research on your own and try to figure out how to solve them. Please feel free to hop around from one challenge to another, they are not listed in order of difficulty. You should also be able to complete all of these challenges without using `if` statements, `switch` statements, `for` loops, or `while` loops (which are more advanced topics).

These may be helpful resources:

- [String Methods](https://www.w3schools.com/js/js_string_methods.asp)
- [Date Methods](https://www.w3schools.com/js/js_date_methods.asp)
- [Confirm Window](https://www.w3schools.com/jsref/met_win_confirm.asp)

### 1. Uppercase Movie
No matter what the user enters, display their favorite movie in all in uppercase letters.

### 2. Removing Whitespace from Movie
Remove all spaces from the beginning and end of the text the user enters for their favorite movie.

### 3. Replacing Red
If the user enters "red" as their favorite color, replace it with "blue" instead.

### 4. Separate First and Last Name
Instead of displaying the user's full name in one line, display their first name and last name separately. For this challenge, assume the user will enter their first name, then a space, then their last name.

**Example**

Instead of displaying "Name: Charlie Chaplin", display "First Name: Charlie" and "Last Name: Chaplin" on separate lines.

### 5. Display Actual Date
Instead of displaying the date the user enters, display the actual date.

### 6. OK/Cancel
After the last question, display a pop-up box that has both "OK" and "Cancel" options. The text in the box should say "Continue?".

- If the user clicks OK, display a message saying "You chose to continue: true"
- If the user clicks Cancel, display a message saying "You chose to continue: false"

Regardless of what the user chooses to do, continue on and display their information.

### 7. Half-birthday
Ask the user for their date of birth, then display their half birthday based on what they enter.
- Assume the user will enter their information in the form of "MM/DD"
- When displaying their half birthday, only show the month and day, in the form "MM/DD"
- Do not worry about leap years

### 8. Days Until the New Year
In addition to displaying today's date, display the number of days until the New Year. For example, if today were 12/31, it should display "1". If today were 3/9, it should display "298".

### 9. Template Literals
>Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Figure out how to use template literals to display multi-line text and include variable values _without_ using `+` or `\n`!
