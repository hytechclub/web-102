# Babel Starter Code

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Image Generator</h1>
    <p>This tool allows you to generate random images.</p>
    <p>
      <button onclick="generateImage()">Generate</button>
    </p>
    <div id="container"></div>
  </body>
</html>
```

**script.js**

```js
function getRandomWholeNumber(max) {
  let randomDecimal = Math.random();
  let randomDecimalRange = randomDecimal * max;
  let randomWhole = Math.ceil(randomDecimalRange);

  return randomWhole;
}

function getRandomColor() {
  let randomNumber = getRandomWholeNumber(3);
  let color = "";

  if (randomNumber === 1) {
    color = "yellow";
  } else if (randomNumber === 2) {
    color = "red";
  } else if (randomNumber === 3) {
    color = "blue";
  }

  return color;
}

function generateImage() {
  let container = document.querySelector("#container");
  container.innerHTML = "";
  container.style.display = "grid";
  container.style.gridTemplateColumns = "1fr 1fr";
  container.style.width = "200px";
  container.style.height = "200px";

  let newCell1 = document.createElement("div");
  newCell1.style.width = "100px";
  newCell1.style.height = "100px";
  newCell1.style.background = getRandomColor();
  container.appendChild(newCell1);

  let newCell2 = document.createElement("div");
  newCell2.style.width = "100px";
  newCell2.style.height = "100px";
  newCell2.style.background = getRandomColor();
  container.appendChild(newCell2);

  let newCell3 = document.createElement("div");
  newCell3.style.width = "100px";
  newCell3.style.height = "100px";
  newCell3.style.background = getRandomColor();
  container.appendChild(newCell3);

  let newCell4 = document.createElement("div");
  newCell4.style.width = "100px";
  newCell4.style.height = "100px";
  newCell4.style.background = getRandomColor();
  container.appendChild(newCell4);
}
```

**style.css**

```css
@import url('https://fonts.googleapis.com/css2?family=Cutive+Mono&family=Rubik+Moonrocks&display=swap');

body {
  background: black;
  color: white;
  font-family: "Cutive Mono", monospace;
  text-align: center;
  font-size: 1.5em;
}

h1 {
  font-family: "Rubik Moonrocks", monospace;
  font-size: 3em;
  font-weight: 100;
  margin-bottom: -10px;
}

button {
  font-family: "Cutive Mono", monospace;
  font-size: 1em;
  background: white;
  padding: 10px;
  cursor: pointer;
  box-shadow: none;
  transition: 250ms;
}

button:hover {
  box-shadow: -4px 4px 8px white;
  border: 2px solid black;
  transform: translate(2px, -2px);
}

#container {
  margin: 0 auto;
}
```
