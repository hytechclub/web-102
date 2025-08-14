# Dice Roller Starter Code

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="script.js"></script>
  </head>
  <body>
    <img src="https://cdn.glitch.global/c7c61e69-bb22-4e1d-b4e1-4281ea714662/d9441219-1b25-411c-b004-08beb4a72057.image.png?v=1725565884841">
    <h1>Dice</h1>
    <button onclick="rollD6();">D6</button>
  </body>
</html>
```

**script.js**

```js
function rollD6() {
  // random decimal number between 0 and 1
  let randomDecimal = Math.random();

  // random decimal number between 0 and 6
  let randomDecimalRange = randomDecimal * 6;

  // random integer between 0 and 5 inclusive
  let randomIntegerFloored = Math.floor(randomDecimalRange);

  // random whole number between 1 and 6 inclusive
  let randomDiceRoll = randomIntegerFloored + 1;

  // message to display
  let message = `You rolled a ${randomDiceRoll}!`;

  // display message
  alert(message);
}
```

**style.css**

```css
body {
  background-color: red;
  text-align: center;
  font-family: jokerman;
}

img {
  width: 300px;
}

h1 {
  color: black;
}
```
