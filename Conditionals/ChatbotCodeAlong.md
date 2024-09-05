# Code-Along: Chatbot
In this activity, create a simple [chatbot](https://en.wikipedia.org/wiki/Chatbot) that can respond to some basic messages.

## ELIZA
Start by talking to [ELIZA](http://psych.fullerton.edu/mbirnbaum/psych101/eliza.htm), a "Rogerian Therapist" chatbot from the 1960s. This is a small example of what is possible with chatbots.

## Basic Setup
To get started, remix [this project](https://glitch.com/edit/#!/remix/chatbot-start). It contains some basic HTML and CSS, but no JavaScript yet! Manually adding some of the basic starter code will be helpful practice.

Add a new JavaScript file to the Giltch project, and link it from the **index.html** file.

1. In the **Files** area of the project, click the "+" button
1. Name the new file **script.js**
1. Open the **index.html** file for editing
1. Between the `<head>` and `</head>`, under the `<link>`, make a new line
1. There, add a `<script></script>` element
1. Set the `src` attribute of the `script` to `script.js`

The added HTML should look something like this:

```html
<script src="script.js"></script>
```

## Function & Button
Next, it's time to define a JavaScript function, and hook it up to a button in HTML.

### Defining the Function
Start by defining the function.

1. Open the **script.js** file for editing
1. Add code to define a function named `chat`
    - Keyword: `function`
    - Function name: `chat`
    - Parentheses: `()`
    - Curly brackets: `{}`
1. In the _body_ of the function (between `{` and `}`), make a new line
1. Add an `alert` statement that says "Welcome to the Friend Proxy Chatbot!"

The code in the **script.js** file should look something like this:

```js
function chat() {
    alert("Welcome to the Friend Proxy Chatbot!");
}
```

Now the function is defined, but there is no way to run it yet!

### Creating the Button
Create a button and hook it up to the function.

1. Open the **index.html** file for editing
1. Between the `<body>` and `</body>`, under the `<p></p>`, make a new line
1. There, add a `<button></button>` element
1. Set the `onclick` attribute of the `button` to call the `chat` function
    - `chat()`
1. Make the text of the button say "Chat"

The added HTML should look something like this:

```html
<button onclick="chat()">Chat</button>
```

Run the code. Click the "Chat" button on the page, and verify that a message appears!

## Prompt for Message
Now, all new changes for the site will happen in the **script.js** file, within the `chat` function body. Start by prompting for the user to enter a message.

1. Open the **script.js** file for editing
1. Make a new line between the `{` and `}`, under the `alert` statement
1. Create a new variable named `message`
1. Set the `message` variable to a `prompt`
1. Make the text for the prompt say "Please enter a message..."

The added JavaScript should look something like this:

```js
let message = prompt("Please enter a message...");
```

Run the code. Click the button, and verify that a prompt appears asking for a message. Nothing should happen when entering a message yet though!

## Responding to the Message
Next, the chatbot should respond to certain messages the user enters. This is where `if` statements come in: the response should be different depending on the message.

To start, have the chatbot respond to a message of "Hello" from the user.

1. Open the **script.js** file for editing
1. Make a new line between the `{` and `}`, under the `message` variable
1. There, create an `if` statement
    - Keyword: `if`
    - Parentheses: `()`
    - Curly brackets: `{}`
1. For the `if` condition, check if the user said "Hello"
    - Condition goes between the parentheses
    - Use `message` variable, `===`, and `"Hello"` to compare
1. In the _body_ of the `if`, display a message saying "Well hi there!"
    - Body is between the curly brackets
    - Use `alert("Well hi there!");`

The added JavaScript should look something like this:

```js
if (message === "Hello") {
    alert("Well hi there!");
}
```

Run the code. Click the button, enter "Hello" as the message, and verify that the proper response appears! If any other message is entered, no response should appear.

## More Responses
The chatbot is functional, but it is not very powerful yet. It needs to be able to respond to some more messages! Add a couple more responses using `if` statements.

| Message | Response |
|-|-|
| I love you | That's nice |
| Are you my friend? | Yes, of course... |

These `if` statements will look very similar to the previous `if` statement. For each of the responses, follow these steps:

1. Have the **script.js** file open for editing
1. Make a new line at the bottom of the `chat` body (above `}`)
1. Add an `if` statement: `if () {}`
1. For the condition (between `(` and `)`), check if `message ===` the given message
1. In the body (between `{` and `}`), `alert` with the response

The added JavaScript should look something like this:

```js
if (message === "I love you") {
    alert("That's nice");
}

if (message === "Are you my friend?") {
    alert("Yes, of course...");
}
```

Run the code. Click the button, and try out each of the messages. Make sure to enter them exactly right, with proper punctuation/capitalization/etc. Each message should produce the correct response!

## Final Code
By the end of the activity, the code should look something like this:

**index.html**
```html
<html>
    <head>
        <link href="style.css" type="text/css" rel="stylesheet">
        <script src="script.js"></script>
    </head>
    <body>
        <h1>Friend Proxy Chatbot 🗣️🤖</h1>
        <p>Press the "Chat" button to talk to the friend proxy chatbot.</h1>

        <button onclick="chat()">Chat</button>
    </body>
</html>
```

**script.js**
```js
function chat() {
    alert("Welcome to the Friend Proxy Chatbot!");

    let message = prompt("Please enter a message...");

    if (message === "Hello") {
        alert("Well hi there!");
    }

    if (message === "I love you") {
        alert("That's nice");
    }

    if (message === "Are you my friend?") {
        alert("Yes, of course...");
    }
}
```
