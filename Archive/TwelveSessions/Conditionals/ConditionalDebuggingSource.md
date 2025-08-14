# Conditional Debugging Source

**index.html**

```html
<html>
  <head>
    <link href="style.css" type="text/css" rel="stylesheet">
    <script src="script.js"></script>
  </head>
  <body>
    <h1>🐛 B U G S 🐛</h1>
    <p>Click each of the buttons below to test them out. Find what's wrong with them, and then fix the bugs in the <b>script.js</b> file!</p>

    <button onclick="clothing()">Clothing Check</button>
    <button onclick="backgroundChange()">Background Change</button>
    <button onclick="evidence()">Evidence of Extraterrestrial Life</button>
    <button onclick="schoolCheck()">School Check</button>

    <img id="secret-picture" src="https://static.abcotvs.com/ktrk/images/cms/042820-ktrk-ufo-sighting-img.png">
  </body>
</html>
```

**style.css**

```css
body, button {
  font-family: courier, monospace;
}

#secret-picture {
  margin-top: 10px;
  height: 300px;
  display: none;
}
```

**script.js**

```js
function clothing() {
  let tempString = prompt("What is the temperature outside?");
  let temp = Number(tempString);

  if (temp < 60) {
    alert("You should wear a T-shirt.");
  } else {
    alert("You should wear a jacket.")
  }
}

function backgroundChange() {
  let newColor = prompt("What color should the background be? (orange, yellow, green, or cyan)");

  if (newColor === "orange") {
    document.body.style.background = "cyan";
  }

  if (newColor === "yellow") {
    document.body.style.background = "green";
  }

  if (newColor === "green") {
    document.body.style.background = "orange";
  }

  if (newColor === "cyan") {
    document.body.style.background = "yellow";
  }
}

function evidence() {
  alert("In order to see this UFO, you must have the highest level of clearance...")
  let passwordGuess = prompt("What is the secret password?");

  if (passwordGuess = "therealpassword") {
    alert("Password correct! Press OK to view the UFO.");
    document.querySelector("#secret-picture").style.display = "block";
  } else {
    alert("Password incorrect... your computer will self-destruct in 10 seconds...");
  }
}

function schoolCheck() {
  let ageString = prompt("How old are you?");
  let age = Number(ageString);

  if (age < 6) {
    alert("You are in college");
  }
  
  if (age > 5 && age < 19) {
    alert("You are in pre-school");
  }
  
  if (age > 18) {
    alert("You are in K-12 school");
  }
}
```
