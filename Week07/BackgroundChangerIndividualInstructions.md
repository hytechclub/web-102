# Background Changer Revisited
Previously, we created a webpage that could change its background color on a button click. The page would ask for colors using `prompt`s, and then set the background color. Let's improve that webpage by using an HTML input instead of `prompt`s to get a color from the user!

## Setup - HTML
1. Create a new HTML file and add the basic tags: `html`, `head`, `body`
1. In the body, add an `h1` header saying "Background Changer"
1. Under the header, add a new `p` paragraph
1. Within the paragraph, add text that says "Color: "
1. Within the paragraph, add an `input` with a `type` of "text"
    - Give the `input` an `id` attribute with value "color"
1. Within the paragraph, add a `button` with text "Change Background"
1. Underneath the paragraph, add a `div` element
    - Give the `div` an `id` attribute with value "colorList"
    - _NOTE: This `div` will not appear on the page_

At the end of this section, the page should look like this:

![](https://i.imgur.com/NAWNnFU.png)

## Setup - JS
1. Create a new JS file named "BackgroundChanger.js"
1. In the JS file, define a new function named `changeBackground`
    - `function` keyword
    - Function name (`changeBackground`)
    - Parentheses (`()`)
    - Curly brackets (`{}`)
1. In the HTML file, add a `script` as a child of the `head` element
    - Set the `src` attribute of the `script` to "BackgroundChanger.js"
1. Set the `onclick` attribute of the HTML button to call the `changeBackground` function

## Changing the background color
The background color should change to the color in the input when the user clicks the "Change Background" button.

### Getting the color from the input
1. In the JS file, within the body of the `changeBackground` function, declare a new variable named `colorInput`
1. Set the value of `colorInput`: use `document.querySelector` to select the HTML `input`
    - `document.querySelector`
    - Parentheses
    - Quotes within the parentheses
    - `id` selector within the quotes
1. Under the `colorInput` variable, declare a new variable named `color`
1. Set the value of `color`: use `.value` to get the text from the `colorInput` element

### Setting the background color to the new color
To set the background color, use the following code:
```js
document.body.style.background = color;
```

Test out the button with a few different colors in the input, and verify that the background color changes!

## Listing previous colors
Whenever the background color changes, the web page should keep track of the new color and display a running list to the user.

### Getting the container `div`
1. At the bottom of the `changeBackground` function, declare a new variable named `colorListDiv`
1. Set the value of `colorListDiv`: use `document.querySelector` to select the HTML `div`
    - `document.querySelector`
    - Parentheses
    - Quotes within the parentheses
    - `id` selector within the quotes

### Creating a new `p` element
1. Underneath the `colorListDiv` variable, declare a new variable named `newColorP`
1. Set the value of `newColorP`: use `document.createElement` to create a new `p` paragraph
    - `document.createElement`
    - Parentheses
    - Quotes within the parentheses
    - Tag name within the quotes
1. Under the variable declaration, use `.textContent` to set the text value of `newColorP`
    - Variable name
    - `.textContent`
    - Set the value to the color the user entered (stored in the `color` variable)

### Appending the new `p` element to the container `div`
At the bottom of the `changeBackground` function, use `.appendChild` to add `newColorP` as a child of `colorListDiv`.
- Parent element variable (container)
- `.appendChild`
- Parentheses
- Child element variable (new paragraph) within the parentheses

## Challenges
When you have completed this activity, attempt one or both of the following challenges:
- Shopping List Challenge
- Table Data Challenge