# Code-Along: Story Time
In this code-along activity, create a website that tells stories.

### Short Stories
Here are some (very) short stories:

- Once upon a time there were three little pigs. Then a wolf came. The end
- Once upon a time there were three bears. Then a girl went to their house. The end
- Once upon a time there was a gingerbread man. No one caught him. The end
- Once upon a time there were three blind mice. Things did not end well for them
- Once upon a time there was a girl with a red hood. Her grandmother was a wolf. The end
- Once upon a time there was a boy who cried wolf. Then a wolf came. The end

Our goal is to create a website that shares these stories, or other stories!

### Starter Project
[Click here to copy the starter project.](https://hytop.onrender.com/stories)

## Part 1: Adding a Button Element
The first step is to add a button to the page. This button will display the story of The Three Little Pigs when it is clicked.

1. Open the **index.html** file for editing
1. Right under the `<h1>` element, create a `<button>` element
1. Make the text on the button say "Three Little Pigs"
1. Save the file, and make sure a button shows up!

The code should look something like this:

```html
<button>Three Little Pigs</button>
```

## Part 2: Defining a Function
The next step is to write some JavaScript code that will display the story of The Three Little Pigs. This code will live inside of a _function_. That way, we will be able to call it on-demand when we need it.

1. Open the **script.js** file for editing
1. Define a function named `threeLittlePigs` using these parts:
   1. function keyword: `function `
   1. function name: `threeLittlePigs`
   1. parentheses: `()`
   1. curly brackets: `{}`
1. Between the curly brackets, make a new line
1. There, add an `alert` that displays the abridged version of the Three Little Pigs story
1. Save the file

The code should look something like this:

```js
function threeLittlePigs() {
  alert("Once upon a time there were three little pigs. Then a wolf came. The end");
}
```

The button shouldn't be working yet - that's the next step!

## Part 3: Hooking up the Button and Function
So we have a button, and we have a function. Why doesn't it work?

The `<button>` element in the HTML needs a way to know what it's supposed to do when it is clicked. The `threeLittlePigs` function in JavaScript has been _defined_, but it is not _called_ anywhere. We need to _call_ the `threeLittlePigs` function in the `onclick` attribute of the `<button>` element!

1. Open the **index.html** file for editing
1. Find the `<button>` element
1. Add an `onclick` attribute to the `<button>` element within the opening tag, after the element name:
   1. attribute name: `onclick`
   1. equals sign: `=`
   1. quotation marks: `""`
1. Within the quotation marks, _call_ the `threeLittlePigs` function:
   1. function name: `threeLittlePigs`
   1. parentheses: `()`
1. Save the file, click the button, and verify that the story appears in the pop-up!

The code should look something like this:

```html
<button onclick="threeLittlePigs()">Three Little Pigs</button>
```

## Part 4: More Buttons, More Functions, More Stories
Now there is one fully-functional story button, but we want an entire compendium of stories. Luckily, all we have to do is repeat the exact same steps as above, just with different stories!

1. Add a new `<button>` with the name of the new story
1. Define a new function named after the new story (and add an `alert` to tell the story)
1. Call the new function in the `onclick` attribute of the `<button>`

Complete these steps for at least four additional stories. Feel free to use the stories listed above, make up stories of your own!

## Part 5: Spoken Stories
Displaying stories as text is cool, but spoken stories can be even more engaging. Choose one of the story functions you've defined, and update it to `speak` the story instead of `alert`ing it!

### Background: The speak.js File
You may have noticed that there is an additional file in this project. That file, **speak.js**, defines a function named `speak` that allows text to be converted to computer speech and output as audio. You don't need to understand the definition of the `speak` function in order to call it, but you can take a look at it if you'd like! The important thing to know is that the `speak` function takes one parameter: the text to be spoken, passed as a string.

### Making the Computer Talk
If you want to add speech, all you have to do is change the `alert` function call into a `speak` function call. Swapping those two words should allow your stories to be spoken aloud!

## Conclusion
Hopefully by the end of the activity, you'll have a website with multiple stories, either spoken or displayed! You are welcome to continue adding more stories or features to your site. Here are some additional options for what you can do next:

### Bonus Challenge: Multiple Pages
It is possible to send the user to a new page when they click a button. This can be accomplished in JavaScript with this code:

```js
document.location.href = "page2.html"
```

You can create multiple pages and redirect to them to make your story site more interactive and fun!

### Practice: Character Soundboard
[Click here for the Darth Vader Soundboard activity](SoundboardCodeAlong.md). You are welcome to change the character and quotes to be whatever you'd like!

This activity covers all the same concepts as the Story Time activity, but it can be very valuable to start getting comfortable with buttons and functions.

### Final Project Ideas
Now is a great time to start thinking about what you might want to do for your final project! [Click here for details.](SelfPacedWork.md)
