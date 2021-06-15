# Individual Exercise - Background Images
Follow the instructions below to create a webpage that allows the user to change the background image dynamically. By the end, the user should be able to click buttons to change the background, and enter their own backgrounds image URLs too! Use previous HTML and JavaScript files as references.

#### JavaScript code to update the background image
Later on in this exercise, you will need to update the background image of the page using JavaScript. Here is how you can do that (Replace `<your url here>` with the URL of the image):

```js
document.body.style.background = "url(<your url here>)";
```

Refer back to this code when you need it.

## Setup
Start from [this empty Repl](https://repl.it/@JosephMaxwell/EmptyWeb#index.html), then follow the steps below.

- Open the **index.html** file
- In the **index.html** file, add the basic tags: `html`, `head`, `style`, `body`
- Create a new JavaScript file
- In the **index.html** file, use a `<script>` tag to link the JavaScript file

Once you complete this setup, complete each of the exercises below in the HTML file and JavaScript file.

## Background Image
In the `style` tag, use the following CSS to give the page a background image:

```css
body {
    background: url(https://i.imgur.com/cOxUQHY.jpg);
}
```

This is the ruleset we will update with JavaScript when our buttons are clicked.

## One Button
- In the JavaScript file, define a function named `changeBackground`
    - Remember, to define a function, you need: `function`, the name of the function, parentheses, and curly brackets
- In the body of the `changeBackground` function (between `{` and `}`), insert the code to update the background image to this one: https://i.imgur.com/MdvJ4C2.jpg
- In the HTML file, add a button to the `body` of the page with the text "Image 1"
- Add in code so that when the "Image 1" button is clicked, the `changeBackground` function is called, and the background changes

## Two Buttons
Repeat the steps above to create ANOTHER button AND function that will change the background to this image: https://i.imgur.com/yfQ8Uj4.jpg

The function name and button text should be different. Name the function `changeBackground2` and give the button the text "Image 2".

## Parameter Time
Now, your JavaScript file should contain two very similar functions. The only differences are the names of the functions, and the actual URLs for the images. Looks like a parameter could help us simplify our code!

### Updating the Function Definition
- In the `changeBackground` function, replace the actual URL in the string with a new variable named `backgroundUrl`
    - To do this, you will have to add together three values: `"url(" + backgroundUrl + ")"`
- Instead of declaring `backgroundUrl` as a variable, make it a **parameter** by placing it within the parentheses of the function definition

### Updating the Function Calls
- In the HTML file, update the call to `changeBackground` so that it passes in the original URL as the parameter
    - Because this call is within double quotes, surround the url with single quotes inside of the parentheses, ex: `onclick="changeBackground('https://i.imgur.com/MdvJ4C2.jpg')"`
- Update the "Image 2" button to call the `changeBackground` function on click as well, passing in its own URL

Now we can get rid of our `changeBackground2` function, and everything should still work!

## Three Buttons
In the HTML, add a third button. This button should again call the `changeBackground` function, but it should pass in a new URL: https://i.imgur.com/r9ywXwx.jpg. The button text should be "Image 3". Notice that we can add this button without making any changes to the JavaScript!

## (BONUS) Prompt for Image
Add another button to the page that, when clicked, will ask the user for a URL, and set the background image to whatever they enter.

- In the JavaScript file, define a new function called `promptForBg`
- In the body of the `promptForBg` function, use a prompt to ask the user what they want the background to be
    - Make sure to store their response in a variable
- Under that prompt, call the `changeBackground` function and pass in the value the user entered
- In the HTML file, create a new button with the text "Prompt for Bg" that should call the `promptForBg` function when clicked
    - Note that we do not have to pass in a URL to the `promptForBg` function - the function will get the URL from the user

This is a good example of reusing code to implement new features. By calling the `changeBackground` function, we were able to avoid unnecessary code duplication!

## (BONUS) Input for Image
Finally, we want to create an HTML input and a button that will set the background image to whatever URL the user has entered in the input when clicked.

- In the HTML file, create a new `div` element
- Inside the new `div` element, create a new text input and a new button
    - The input should have an id of "bgInput"
    - The button should say "Input for Bg"
- In the JavaScript file, define a new function called `inputForBg`
- In the body of the `inputForBg` function, **select** the input element from the HTML, and store it in a variable named `bgInputElement`
- Declare another variable named `bgInputValue`, and set its value to the `value` of the `bgInputElement`
- Call the `changeBackground` function and pass in the `bgInputValue` variable
- Set the `value` of the `bgInputElement` to be empty
- In the HTML file, make "Input for Bg" button call the `inputForBg` function when clicked

That's it! Now you should be able to easily set the background of your webpage to any image you like.