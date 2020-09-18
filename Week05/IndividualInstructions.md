# Individual Activity - Booleans and Conditionals
For this activity, create an HTML page that can change its background color based on two input colors. The user should be able to click a button, enter two colors, and see the background change to the mix of those two colors.

For more information about color mixing, check out this site: https://www.enchantedlearning.com/crafts/Colormixing.shtml

## Part 1 - Basic Setup
Start from [this empty Repl](https://repl.it/@JosephMaxwell/EmptyWeb#index.html), then follow the steps below.

1. Fill out the basic starting tags for the **index.html** file - `html`, `body`, `head`
2. Create a new JavaScript file
    - Be sure the save it with the `.js` file extension!
3. Link the JavaScript file using a `script` tag in the HTML file
4. Add a header and a paragraph to your HTML page explaining its purpose

## Part 2 - Button and Function
1. Add a `button` to the HTML file. The text should read "Change Background Color"
1. Define a `changeBackground` function in the JavaScript file
    - use the `function` keyword, function name, parentheses, and curly braces
    - in the body of the function, show a message to the user saying "Changing Background Color"
1. Set the `onclick` attribute of the button to call the `changeBackground` function

## Part 3 - Asking for Colors
1. Inside of the `changeBackground` function, use two `prompt`s to ask the user for two different colors
2. Store the color strings in two variables

## Part 4 - Color Mixing
>NOTE: For this part, if the user enters any colors other than "Red", "Blue", or "Yellow", there is no need to calculate a mix color.

Once the user has entered the two colors, it's time to calculate the mix of those colors. There are 9 possible combinations of the three colors:

|| Red | Blue | Yellow |
|-|-|-|-|
| **Red** | Red | Purple | Orange |
| **Blue** | Purple | Blue | Green |
| **Yellow** | Orange | Green | Yellow |

You should create a variable in your function to keep track of the mix of the two colors, and set it based on the values of the colors the user enters.

#### `&&` Operator
Read this article about _Logical Operators_ to familiarize yourself with the `&&` operator: https://javascript.info/logical-operators#and

For this activity, you can check the values of both colors in the same `if`! For example, to check if both colors entered are "Red", use the following:

```javascript
if (color1 === "Red" && color2 === "Red") {
    // ... do something
}
```
_(this example assumes the first color is stored in a variable named `color1`, and the second color is stored in a variable named `color2`)_

## Part 5 - Change the Background!
Once you have calculated the mix color, use the following code to change the background color:

```javascript
document.body.style.background = mixColor;
```
_(this example assumes the mix color is stored in a variable named `mixColor`)_

## Challenges
Once you have finished the main activity, attempt the challenges below, **OR** attempt the other challenges in the [Challenges](Challenges.md) file. Feel free to hop around from one challenge to another if you like.

### Case Insensitivity
Allow the user to enter the colors using any case. For example, they should be able to enter either "red" or "Red", and the program should deal with the color in the same way.

### Change the Text Color
Add another button and function to change the text color on the page. It should work the same as the background color, taking in two colors and mixing them together.

#### Reusing Functionality
For an added challenge, reuse the code from the `changeBackground` function for changing the text color. Create a new function that simply calculates a mix color, and call that function for both the Background button and the Text Color button.