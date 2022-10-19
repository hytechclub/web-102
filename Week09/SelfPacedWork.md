# Self-Paced Work: Babel Updates
Follow these instructions to update the Babel website after completing the [code-along](BabelCodeAlong.md).

## Adding a Color
The images may seem a little boring with only three possible colors. Update the code so that pixels in the image can be green too!

1. Open the **script.js** file for editing
1. Find the `getRandomColor` function
1. In the body, find the first line where the `randomNumber` variable is created
1. Instead of passing in `3` to `getRandomWholeNumber`, pass in `4` as the argument
    - This will mean that the number ranges from `1` to `4`
1. Under the existing `else if`s, add another `else if`
1. Set the condition of the new `else if` to check if `randomNumber` is equal to `4`
1. Add a body for the `else` if with `{` and `}`
1. In the body, set the `color` variable to `"green"`

That should be it! Run the program, click the "Generate" button, and verify that some green pixels can appear.

## Making an 8x8 Image
It's hard to get anything too cool with only a 4x4 pixel grid. Update the code so that it's an 8x8 grid instead!

1. Open the **script.js** file for editing
1. Find the `generateImage` function
1. In the body, set the `gridTemplateColumns` for `container` to have _eight_ equal-width columns
    - The value should be `"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr"`
1. Under that, find the `for` loop
1. In the body of the `for` loop, update the `width` and `height` so that eight cells can fit in the grid
    - The new `width` and `height` should be `"25px"`
1. In the definition of the `for` loop, make it repeat the appropriate number of times
    - It should repeat `64` times for an 8x8 grid: `8` multiplied by `8` is `64`

That should be it! Run the program, click the "Generate" button, and verify that the grid is now 8x8. Feel free to update the grid to be any size! Some math may be required, but the steps should be very similar.

## Aside - Separate Challenges
At this point, feel free to switch over to the [separate challenges](Challenges.md). These start off a little simpler than the challenges listed below; however, if you want to keep working on the Babel website, go ahead!

## Challenge 1 - Custom Cell Size
Currently, the actual user of the website has very little control over the image generated. Allow the user to decide the size of the cell by entering the value in an HTML `<input />`!

### HTML
Start by updating the HTML code by adding a text box.

1. Open the **index.html** file for editing
1. Above the `<p></p>` containing the `<button>`, create a new `<p>` element
1. In the `<p></p>`, add the text `Cell Size: `
1. After the text, create an `<input />` element
1. Set the `id` of the `<input />` to be `cell-size`
1. Set the `type` of the `<input />` to be `number`

### JavaScript
Next, update the JavaScript to use the value entered into the text box to control the size of a cell in the grid.

#### Getting the Cell Size
Start by grabbing the value the user entered into the text box.

1. Open the **script.js** file for editing
1. Find the `generateImage` function
1. Make a new line at the very top of the body
1. There, create a new variable named `cellSizeInput`
1. Use `document.querySelector` to select the `#cell-size` element, and store it in the `cellSizeInput` variable
1. Under that, create a variable named `cellSize`
1. Set it to be the `.value` of `cellSizeInput`

Now, the `generateImage` function should be able to access the cell size the user entered.

#### Using the Cell Size
Next, use that cell size to determine the widths and heights for the grid elements.

1. In the `generateImage` function, find where the `container` sets its `width` and `height`
1. Replace the `"200px"`s with `cellSize * 8`s
    - Since there are eight cells per row/column, the total width/height should be 8x the cell size
1. Find the body of the `for` loop that creates the cells
1. In the body of the loop, find the `width` and `height` settings
1. Update those so that they use `cellSize` instead of `"50px"`
    - This will set the actual dimensions of each cell

That should be it! Run the program, enter a cell size in the text box, click the generate button, and see what happens!

## Challenge 2 - Custom Grid Dimensions
Now the cell size is being determined by the user, but they might also want to control the number of cells. Allow them to enter the height/width in grid pixels.

### HTML
Start by updating the HTML code by adding another text box.

1. Open the **index.html** file for editing
1. Above the `<p></p>` containing the `<button>`, create a new `<p>` element
1. In the `<p></p>`, add the text `Square Pixels: `
1. After the text, create an `<input />` element
1. Set the `id` of the `<input />` to be `square-pixels`
1. Set the `type` of the `<input />` to be `number`

### JavaScript
Next, update the JavaScript to use the value entered into the text box to control the number of cells across the grid.

#### Getting the Square Pixels
Start by grabbing the value the user entered into the text box.

1. Open the **script.js** file for editing
1. Find the `generateImage` function
1. Make a new line under the `cellSize` variable
1. There, create a new variable named `squarePixelsInput`
1. Use `document.querySelector` to select the `#squarePixels` element, and store it in the `suqarePixelsInput` variable
1. Under that, create a variable named `squarePixels`
1. Set it to be the `.value` of `squarePixelsInput`

Now, the `generateImage` function should be able to access the square pixel count the user entered.

#### Setting the Fractional Units
The most difficult part of this will be to create the proper `gridTemplateColumns`. It will actually be possible to use another `for` loop, within another function, to accomplish this!

##### Defining the New Function
Start by _defining_ a new function to generate the proper fractional unit string.

1. Open the **script.js** file for editing
1. Above the `generateImage` function definition, define a new function named `getFrString`
    - To define a function: `function`, name, parentheses, curly brackets
1. Make the `getFrString` take in one parameter: `numUnits`
    - This goes within the parentheses of the function definition
1. In the body of the `getFrString` function, create a new variable named `frString`
1. Set `frString` to equal `""`
1. Under that, still in the function body, create a `for` loop structure
    - It should loop through `numUnits` times
    - `for`
    - Parentheses `(` and `)`
        - `let i = 0;`
        - `i < numUnits;`
        - `i++`
    - Curly brackets `{` and `}`
1. In the body of the `for` loop, set `frString` to itself plus `" 1fr"`
    - `frString = frString + " 1fr";`
1. Outside of the `for` loop body, _within_ the function body, return `frString`

##### Calling the New Function
Next, _call_ the new function with the appropriate argument to get the string.

1. Open the **script.js** file for editing
1. Find the `generateImage` function definition
1. In the body, find where `gridTemplateColumns` is set for `container`
1. Replace the static string with a call to `getFrString`
1. Pass in the `squarePixels` value as the argument

Now the template column CSS for the container should be all set to dynamically update based on the text box!

#### Setting the Container Width and Height
The next thing to do is properly set the container's width and height. This should be based on both the grid dimensions _and_ the cell size.

1. Open the **script.js** file for editing
1. Find the `generateImage` function definition
1. In the body, find where the `width` and `height` are set for `container`
1. Replace each of those with the new width and height: `squarePixels * cellSize`

Now the container should be the appropriate size!

#### Looping the Proper Number of Times
The last thing is to generate the right number of cells. This should be based on the square grid dimension multiplied by itself.

1. Open the **script.js** file for editing
1. Find the `generateImage` function definition
1. In the body, find the `for` loop that creates the cells
1. Replace the static loop count value in the condition with the new count: `squarePixels * squarePixels`

Now the program will create the appropriate number of pixel elements based on the text box input.

### Conclusion
That should be it! Run the program, enter a cell size in the text box, click the generate button, and see what happens!
