# Self-Paced Work: Background Images
Follow the instructions below to create a webpage that allows the user to change the background image dynamically. By the end, the user should be able to click buttons to change the background, and enter their own background image URLs too! Use previous HTML and JavaScript files as references.

#### Reference: JavaScript Code to Update the Background Image
Later on in this exercise, it will be necessary to update the background image of the page using JavaScript. Here is how to do that. Replace `<your image file here>` with the filename of the image:

```js
document.body.style.background = "url(<your image file here>)";
```

Refer back to this code when it is needed.

## Part 1 - Setup
Start by forking [this starter Repl](https://replit.com/@HylandOutreach/BackgroundChangerStart), then add an initial background image. In the **style.css** file, use the following code:

```css
body {
    background: url(Planet.jpg);
}
```

This is the ruleset that will be updated with JavaScript when buttons are clicked.

## Part 2 - One Button
Add a button that will set the background image when clicked.

### JavaScript
Start by _defining a function_ in JavaScript.

1. Open the **script.js** file for editing
1. At the top of the file, define a new function named `changeBackground`
    - `function` keyword
    - Function name: `changeBackground`
    - Parentheses (left/right)
    - Curly brackets (left/right)
1. In the _body_ of the function (between `{` and `}`), make a new line
1. On the new line, add the code to update the background image to **Pokemon.jpg**

Now the function should be _defined_... but it needs to be _called_!

### HTML
Add a button in the HTML to call the newly-defined function.

1. Open the **index.html** file for editing
1. Within the `<body></body>`, create a `<button>` element
1. Make the text for the button be `Image 1`
1. Set the `onclick` of the `<button>` to _call_ the `changeBackground` function
    - Use the function name and parentheses (left/right)

At this point, load up the page and try clicking the button. The background image should update!

## Part 3 - Two Buttons
Now, create _another_ HTML `<button>` and JavaScript function that will change the background to another image. This will be very similar to the steps above!

### JavaScript
In the **script.js** function, define a new function named `changeBackground2`. It should be almost exactly the same as the `changeBackground` function, except that it should set the background URL to **City.jpg**.

### HTML
In the **index.html** file, create a new `<button>`. Place it under the existing `<button>`, within the `<body></body>`. It should be almost exactly the same as the other `<button>`, but the text should be `Image 2` and the `onclick` attribute should call the `changeBackground2` function.

Once the functional button has been added, load up the page and click it. It should change the background to the new image!

## Part 4 - Parameter Time
At this point, the **script.js** file should contain two very similar functions. The only differences are the names of the functions, and the actual filenames for the images. Looks like a parameter could help simplify this code!

### Updating the Function Definition
Start by changing one of the existing function definitions so that it uses a _parameter_.

1. Open the **script.js** file for editing
1. In the `changeBackground` function definition, add a parameter named `backgroundUrl`
    - It should go in between the parentheses right after the function name
1. In the body of the `changeBackground` function, replace **Pokemon.jpg** with the variable value of the parameter
    - Using a template literal, it should look something like this:
        ```js
        `url(${backgroundUrl})`;`
        ```

Now the function has been redefined, which means it can set the background to any image!

### Updating the Function Calls
Redefining the function means that the function _call_ is currently broken. Update each function call so they each pass in an _argument_.

1. Open the **index.html** file for editing
1. Find the `<button>` where the `onclick` attribute calls the `changeBackground` function
1. Update this call by placing `'Pokemon.jpg'` between the parentheses - this will be the _argument_
    - Note that the argument value should be surrounded by **single quotes**; this is because the attribute is within double quotes
1. Update the second `<button>` to call `changeBackground` and pass in `'City.jpg'` as the argument

Now try loading up the page. Click each button and verify that they still work as intended!

At this point, it will be possible to remove the `changeBackground2` function; it should not be needed any longer.

## Part 5 - Three Buttons
In addition to refactoring the other buttons, adding this parameter makes it much simpler to add another new button! Note that no changes in the **script.js** file are required.

1. Open the **index.html** file for editing
1. Within the `<body></body>`, under the existing `<button>`s, create a new `<button>` element
1. Make the text for the button be `Image 3`
1. Set the `onclick` of the `<button>` to _call_ the `changeBackground` function
    - Use the function name and parentheses (left/right)
1. Pass in an argument of `'CalvinAndHobbes.jpg'` to the function

Load up the page again, click the third button, and verify that the background changes to yet another new image! All this without changing anything in the JavaScript 😎

## Challenge 1 - Prompt for Image
Try to expand the functionality of the page by adding a button that, when clicked, will prompt the user for a URL, and set the background image to whatever they enter.

### JavaScript
Start by defining a new function in the JavaScript.

1. Open the **script.js** file for editing
1. Under the existing function, define a new function named `promptForBg`
1. In the body of the `promptForBg` function, use a `prompt` to ask the user what they want the background to be
    - Make sure to store their answer in a variable
1. Under that prompt, call the `changeBackground` function and pass in the value the user entered as the argument

That should do it for the JavaScript!

### HTML
To actually use the `promptForBg` function, it will be necessary to add a button to the page.

1. Open the **index.html** file for editing
1. In the `<body></body>`, under the existing `<button>`s, add a new `<button>`
1. Make the text for the button be `Image from Prompt`
1. Set the `onclick` attribute for the `<button>` to call the `promptForBg` function
    - Note that it is not necessary to pass in a URL here; the function will take care of that with the `prompt`!

Load up the page, click the button, and verify that a new URL can be entered! Try to find an image somewhere online and copy its URL for fun custom backgrounds!

This is a good example of reusing code to implement new features. By calling the `changeBackground` function, it was possible to avoid unnecessary code duplication!

## Challenge 2 - Input for Image
Finally, expand the functionality a little more by creating a button that will set the background image based on an input on the page.

### HTML
Start by updating the HTML with the necessary elements.

1. Open the **index.html** file for editing
1. In the `<body></body>`, under the `<button>` elements, create a new `<div>` element
1. Within the `<div></div>`, create a new `<input />` element
1. Set the `type` attribute of the `<input />` element to be `"text"`
1. Set the `id` attribute of the `<input />` element to be `bg-input`
1. Under the `<input />` element, still within the `<div></div>`, create a `<button>`
1. Make the text for the `<button>` be `Image from Input`

Now the elements should all be in place - but the button needs something to do!

### JavaScript
Define a new function to set the background image based on the new text box element.

1. Open the **script.js** file for editing
1. Under the existing function, define a new function named `inputForBg`
1. In the body of the `inputForBg` function, create a new variable named `bgInputElement`
1. Set the variable to be a call to the `document.querySelector` function
    - It should select the `<input />` from the HTML based on its `id`
1. Under that, create another new variable named `bgInputValue`
1. Set that variable to be the `.value` of the `bgInputElement` variable
1. Under that, call the `changeBackground` function, and pass in the `bgInputValue` variable as the _argument_
1. Under that, set the `.value` of the `bgInputElement` variable to be empty (`""`)

That should be it for the JavaScript! The function is defined and ready to go... it just needs to be called from the HTML.

### Back to the HTML
Update the new button so that it does the right thing.

1. Open the **index.html** file for editing
1. Find the `<button>` element with the text `Image from Input`
1. Set the `onclick` attribute for that `<button>` to call the `inputForBg` function

That's it! Load up the page, enter a URL into the text box, and click the button. The new background image should appear, and the text box should go back to being empty!
