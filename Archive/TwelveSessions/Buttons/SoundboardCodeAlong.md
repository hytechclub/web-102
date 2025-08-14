# Code-Along: Darth Vader "Sound"board
Create a new webpage featuring buttons that will say some Darth Vader quotes.

- [Click here for an example of a board with real sound](https://darth-vader-soundboard.glitch.me/)
- [Click here for Darth Vader quote source](https://www.quora.com/What-are-some-famous-Darth-Vader-quotes)

Start by remixing the [JavaScript starter project](https://glitch.com/edit/#!/remix/javascriptstarter). Then, follow the instructions below to build out the website.

StackBlitz: [https://stackblitz.com/edit/web-platform-czabuz7h?file=index.html](https://stackblitz.com/edit/web-platform-czabuz7h?file=index.html)

## Part 1 - Basic Elements
Add some basic elements to the webpage, and update a couple styles.

1. In the **index.html** file, in the `<body></body>` element, add an `<h1></h1>` header that says "Darth Vader Soundboard"
1. Beneath the `<h1>`, add a `<p></p>` paragraph
1. Within the `<p></p>`, add an `<img />` with its `src` attribute set to `"https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg"`
1. In the **style.css** file, set the page's background color to `black` and text color to `red`

At this point, the code should look something like this:

**index.html**
```html
<html>
    <head>
        <link href="style.css" rel="stylesheet" type="text/css">
        <script src="script.js"></script>
    </head>
    <body>
        <h1>Darth Vader Soundboard</h1>
        <p><img src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg"></p>
    </body>
</html>
```

**style.css**
```css
body {
    background: black;
    color: red;
}
```

## Part 2 - Button With Quote
Add a button which will display a Darth Vader quote when clicked.

1. In the **index.html** file, under the `<p>` in the `<body></body>`, add a `<button>` element that says "Technological Terror"
1. In the **script.js** file, _define a function_ named `technologicalTerror`
    - Start with the `function` keyword
    - Next, add a space and the function name
    - Next, add left and right parentheses
    - Finally, add left and right curly brackets
1. In the body of the `technologicalTerror` function (between `{` and `}`), add an `alert` statement that says "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force."
1. Back in the **index.html** file, add the `onclick` attribute to the `<button>` and make it _call_ the `technologicalTerror` function

The added code should look something like this:

**index.html**
```html
<button onclick="technologicalTerror()">Technological Terror</button>
```

**script.js**
```js
function technologicalTerror() {
    alert("Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force.");
}
```

Run the project, click on the "Technological Terror" button, and ensure that the quote appears!

## Part 3 - More buttons
Follow the same steps as above to add more buttons! See below for a list of quotes, each with accompanying button text and function name.

| Button Text | Function Name | Quote |
|-|-|
| Faith | `faith` | I find your lack of faith disturbing. |
| Presence | `presence` | I sense something. A presence I have not felt since... |

For each of these quotes:

- Create a new `<button>` element in the **index.html** file
- Define a new function in the **script.js** file
- In the body of the new function, use an `alert` to display the quote
- Hook up the `<button>` in the **index.html** file to the function by setting its `onclick` attribute
    - It should _call_ the function using the name from the **script.js** file

Make sure to test that each button works after the function has been defined and called!
