# Darth Vader "Sound" board: Follow-Along
Create a new webpage featuring buttons that will say some Darth Vader quotes.

Soundboard example: https://www.101soundboards.com/boards/10715  
Quotes from here: https://www.quora.com/What-are-some-famous-Darth-Vader-quotes

## Setup
Start by creating the `.html` and .`js` files, and adding the basic tags to them.

1. Create a new file called `DarthVaderQuotes.html`
1. In the `DarthVaderQuotes.html` file, add the `html`, `head`, `style`, and `body` elements
1. Create another new file in the same folder called `DarthVaderQuotes.js`
1. In the HTML file, within the `head` element, create a `script` element that points to `DarthVaderQuotes.js` using the `src` attribute

##### `DarthVaderQuotes.html`
```html
<html>
    <head>
        <style></style>
        <script src="DarthVaderQuotes.js"></script>
    </head>
    <body>
    </body>
</html>
```

## Basic Elements
Add some basic elements to the webpage, and update a couple styles.

1. In the HTML file, in the `body` element, add an `h1` header that says "Darth Vader Soundboard"
1. Beneath the `h1`, add a `p` paragraph
1. Within the `p`, add an `img` with its `src` attribute set to "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg"
1. In the `style` tag, set the background color to black and the text color to red

##### `DarthVaderQuotes.html`
```html
<html>
    <head>
        <style>
            body {
                background: black;
                color: red;
            }
        </style>
        <script src="DarthVaderQuotes.js"></script>
    </head>
    <body>
        <h1>Darth Vader Soundboard</h1>
        <p><img src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg"></p>
    </body>
</html>
```

## Button With Quote
Add a button which will display a Darth Vader quote when clicked.

1. In the HTML file, under the `p` in the `body`, add a `button` element that says "Technological Terror"
1. In the JS file, define a **function** called `technologicalTerror`
1. In the body of the `technologicalTerror` function, add an `alert` statement that says "Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force."
1. Back in the HTML file, add the `onclick` attribute to the `button` and make it call the `technologicalTerror` function

##### `DarthVaderQuotes.html`
```html
<html>
    <head>
        <style>
            body {
                background: black;
                color: red;
            }
        </style>
        <script src="DarthVaderQuotes.js"></script>
    </head>
    <body>
        <h1>Darth Vader Soundboard</h1>
        <p><img src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg"></p>
        <button onclick="technologicalTerror()">Technological Terror</button>
    </body>
</html>
```

### `DarthVaderQuotes.js`
```js
function technologicalTerror() {
    alert("Don't be too proud of this technological terror you've constructed. The ability to destroy a planet is insignificant next to the power of the Force.");
}
```

## More buttons
Follow the same steps as above to add the following buttons/quotes:

1. Faith - "I find your lack of faith disturbing."
1. Presence - "I sense something. A presence I have not felt since..."