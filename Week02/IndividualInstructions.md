# Individual Exercise - JavaScript basics
In this exercise, you will need to create a new HTML file from scratch. Then, follow the instructions below to build a little text-based JavaScript program. The program will ask the user a number of questions, and then display some information using the answers the user provides.

## Part 1 - Setup
1. Add the `html` tag to your page
1. Add the `head` tag to your page (child of `html`)
1. Add the `script` tag to your page (child of `head`)
1. Within the script, add a statement that will show a message to the user welcoming them to your website.

_note: a body is not required for this HTML page_

## Part 2 - Asking Questions
For each of the questions below, show a text box to the user allowing them to answer. Store all of the user's answers in their own variables. Make sure you choose good variable names!
- What is your full name?
- What is your favorite color?
- What is your favorite movie?
- What is the date today?

## Part 3 - Displaying Answers
For each of the answers retrieved in the previous part, show the user a formatted message like "Name: Charlie Chaplin". For an added challenge, attempt to display all the information in only one message box. Use `\n` to add a new line into the text value.

## Challenges
For these challenges, do some research on your own and try to figure out how to solve them. Please feel free to hop around from one challenge to another, they are not listed in order of difficulty. You should also be able to complete all of these challenges without using `if` statements, `switch` statements, `for` loops, or `while` loops (which are more advanced topics).

These may be helpful resources:

- https://www.w3schools.com/js/js_string_methods.asp
- https://www.w3schools.com/js/js_date_methods.asp
- https://www.w3schools.com/jsref/met_win_confirm.asp


### Uppercase Movie
No matter what the user enters, display their favorite movie in all in uppercase letters.

### Removing Whitespace from Movie
Remove all spaces from the beginning and end of the text the user enters for their favorite movie.

### Replacing Red
If the user enters "red" as their favorite color, replace it with "blue" instead.

### Separate First and Last Name
Instead of displaying the user's full name in one line, display their first name and last name separately. For this challenge, assume the user will enter their first name, then a space, then their last name.

**Example**

Instead of displaying "Name: Charlie Chaplin", display "First Name: Charlie" and "Last Name: Chaplin" on separate lines.

### Display Actual Date
Instead of displaying the date the user enters, display the actual date.

### OK/Cancel
After the last question, display a pop-up box that has both "OK" and "Cancel" options. The text in the box should say "Continue?".

- If the user clicks OK, display a message saying "You chose to continue: true"
- If the user clicks Cancel, display a message saying "You chose to continue: false"

Regardless of what the user chooses to do, continue on and display their information.

### Half-birthday
Ask the user for their date of birth, then display their half birthday based on what they enter.
- Assume the user will enter their information in the form of "MM/DD"
- When displaying their half birthday, only show the month and day, in the form "MM/DD"
- Do not worry about leap years

### Days Until the New Year
In addition to displaying today's date, display the number of days until the New Year. For example, if today were 12/31, it should display "1". If today were 3/9, it should display "298".

### Template Literals
>Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

Figure out how to use template literals to display multi-line text and include variable values _without_ using `+` or `\n`!