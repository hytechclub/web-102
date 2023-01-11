# Code-Along: Library of Babel
Follow these instructions to update an image generation program to use a `for` loop!

## Background - Library of Babel
There is a [website](https://libraryofbabel.info/) right now that contains a photo of your funeral. It also contains anything that could ever be written. Check out this video to learn more about it:

<iframe width="100%" height="450px" src="https://www.youtube.com/embed/awpVjv2-Ow0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Basically, the idea is that it is possible to create a program that, given an infinite amount of time, will generate any conceivable image. This is similar to the Infinite Monkey Theorem, demonstrated here:

<iframe width="100%" height="450px" src="https://www.youtube.com/embed/no_elVGGgW8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

For this activity, there is a [much simpler version](https://babel.hylandoutreach.repl.co/) of this. It generates images that are 2 pixels tall and 2 pixels wide, and it only uses red, blue, and yellow. The goal will be to update the image-generating code so that it can generate more complex images.

## Getting Started
Fork [this Repl project](https://replit.com/@HylandOutreach/Babel) to begin. Run the program, click the button, and see the image it creates!

Next, take a look at the existing code to see how it works.

### HTML
The HTML in the **index.html** file contains a couple key things:

- a `<button>` that runs the `generateImage` function when clicked
- a `<div>` with an `id` of `container` that contains nothing
    - this is where the generated image will go

### CSS
The CSS in the **style.css** file only really styles the non-essential parts of the page. It sets the colors, fonts, positioning, and more. It will not be necessary to update the CSS for this activity.

### JavaScript
The JavaScript in the **script.js** file is pretty extensive. There are _three_ functions, each doing a different thing. When working with JavaScript, it is often necessary to use a bunch of different functions. Here's what each function does:

#### `getRandomWholeNumber`
This function _returns_ a random number. It is similar to the one used in the [Dice Roller](../FunctionParameters/DiceRollerCodeAlong.md) activity. It takes in a maximum value parameter (`max`), and generates a whole number between `1` and `max`. It is _called by_ the `getRandomColor` function.

#### `getRandomColor`
This function _returns_ a random color. It _calls_ the `getRandomWholeNumber` function to choose between yellow, red, and blue. It is _called by_ the `generateImage` function.

#### `generateImage`
This is the function that runs when the "Generate" button is clicked. It _selects_ the HTML `<div>` element with an `id` of `container` and stores it in a variable named `container`. It empties out its inner HTML, and sets some styles on it:

- It sets the display to [`grid`](https://www.w3schools.com/css/css_grid.asp), and sets the grid to have two [columns](https://www.w3schools.com/cssref/pr_grid-template-columns.asp) of equal width
- It sets the `width` and `height` to `200px` each

Then, it creates a new HTML `<div>` element and stores it in a variable named `newCell`. It sets the `width` and `height` to be `100px` each for the new element. It then sets the `background` to be a randomly generated color by _calling_ the `getRandomColor` function. Finally, it _appends_ the `newCell1` element to the `container` element as a child.

It repeats this "new cell" process for three additional cells: `newCell2`, `newCell3`, and `newCell4`.

### Summary
The existing code may be a little confusing - it's doing quite a lot! However, this activity is more about the concept of `for` loops than anything else; try to keep that in mind, and focus on the looping aspect.

## Refactoring the Cell Creation with a `for` Loop
Now it's time to start updating the code. The first step is to [_refactor_](https://en.wikipedia.org/wiki/Code_refactoring) the `generateImage` function to use a `for` loop! The actual _functionality_ of the site should stay the same for this part - the goal is simply to change the structure of the code itself.

### Structure
Start by defining the structure for the `for` loop

1. Open the **script.js** file for editing
1. In the body of the `generateImage` function, make a line space under the `container.style` statements
    - This should be somewhere around line `32`
1. There, start building a `for` loop with the `for` keyword
    - Follow it with parentheses: `for ()`
    - This loop should execute once for each cell in the generated image
1. Within the parentheses, add the first boiler-plate statement for initialization
    - `let i = 0;`
    - Don't forget the semi-colon!
1. After that, add the second boiler-plate statement for condition
    - Consider how many times the loop should run: `4`!
    - `i < 4;`
1. After that, add the third boiler-plate statement for increment
    - `i++`
    - Remember, there is no semi-colon for this statement!
1. After the parentheses, add the curly brackets to create the _body_

That's it for the structure! This loop will repeat its body `4` times, one for each cell. The code should look something like this:

```js
for (let i = 0; i < 4; i++) {

}
```

### Body
Next, determine which code to run repeatedly! This should be the code that creates a new cell, sets its styles, and adds it to the container `<div>`.

1. Copy the five lines of code under the `for` loop starting with `let newCell1 = ...`
    ```js
    let newCell1 = document.createElement("div");
    newCell1.style.width = "100px";
    newCell1.style.height = "100px";
    newCell1.style.background = getRandomColor();
    container.appendChild(newCell1);
    ```
1. Paste that code into the _body_ of the `for` loop
    - Between the `{` and `}`
1. For clarity and cleanliness purposes, adjust the indentation
    - The code within the _body_ should be one level deeper than the `for`
1. Change the name of `newCell1` to simply `newCell`
    - Make sure to update all five lines here
1. Delete all code beyond the `for` loop from the body of the `generateImage` function
    - None of this is needed anymore!

Run the program, click the button, and verify that it still works the same way!

At this point, the entire `generateImage` function should look something like this:

```js
function generateImage() {
  let container = document.querySelector("#container");
  container.innerHTML = "";
  container.style.display = "grid";
  container.style.gridTemplateColumns = "1fr 1fr";
  container.style.width = "200px";
  container.style.height = "200px";

  for (let i = 0; i < 4; i++) {
    let newCell = document.createElement("div");
    newCell.style.width = "100px";
    newCell.style.height = "100px";
    newCell.style.background = getRandomColor();
    container.appendChild(newCell);
  }
}
```

## Making a 4x4 Image
Now that the code uses a `for` loop, it will be much simpler to adjust it for more cells! Instead of generating images on a grid with 2x2 dimensions, update the code so that it generates images on a 4x4 grid.

1. Open the **script.js** file for editing, and find the `generateImage` function
1. Set the `gridTemplateColumns` property to be `"1fr 1fr 1fr 1fr"` instead of `"1fr 1fr"`
    - This will make it four equal-width columns wide
1. In the body of the `for` loop, set the `width` and `height` for the new cell to be `"50px"` instead of `"100px"`
    - To keep the same overall width/height, each cell will be 50x50: `200px` divided by `4` yields `50px`
1. Finally, make the `for` loop repeat more times!
    - It should repeat `16` times total, because a 4x4 grid has 16 total cells

That should be it! Run the program, click the button a few times, and make sure a 4x4 image appears. See if any interesting pictures come up!

The code for the `generateImage` function should look something like this at this point:

```js
function generateImage() {
  let container = document.querySelector("#container");
  container.innerHTML = "";
  container.style.display = "grid";
  container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  container.style.width = "200px";
  container.style.height = "200px";

  for (let i = 0; i < 16; i++) {
    let newCell = document.createElement("div");
    newCell.style.width = "50px";
    newCell.style.height = "50px";
    newCell.style.background = getRandomColor();
    container.appendChild(newCell);
  }
}
```

## Conclusion
By the end of the activity, the project should look something like [this](https://replit.com/@HylandOutreach/BabelForLoop#script.js). Note that the only changes should have taken place in the **script.js** file.

The key takeaway from this activity is that `for` loops make code much more extendable and maintainable. Imagine trying to update the original code to be a 4x4 grid without the use of a `for` loop; it would have been really annoying! Now, it's possible to create images of any dimension without changing too much. For loops make it possible to make code do a lot with only a few lines!
