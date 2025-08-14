# Bug Projects Source

## Bug 1

```html
<html>
  <head>
    <style>
      body {
        color: skyblue;
        background: black;
        font-family: Arial;
        font-size: 1.5em;
      }
    </style>
    <script>
      function runMe() {
        alert("🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️");
      }
  </script>
  </head>
  <body>
    <p>😭 why is my button broken 😭</p>
    <p>😭 it should display 🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️🏃‍♀️🏃‍♂️ when clicked 😭</p>
    <button onclick="runme()">Run Me!</button>
  </body>
</html>
```

## Bug 2

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
    
  </head>
  <body>
    <p>I tried so hard to make this website but I failed 😿</p>
    <p>This button should display a message saying "I am a success" when clicked...</p>
    <p>But nothing happens 😟</p>
    <button onclick="success()">Success!</button>
  </body>
</html>
```

**style.css**

```css
body {
  color: red;
  background: yellow;
  font-family: cursive;
}
```

**script.js**

```js
function success() {
  alert("I am a success");
}
```

## Bug 3

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="scirpt.js"></script>
  </head>
  <body>
    <p>This button is on the fritz again.</p>
    <p>It's not working but it should say "Fixed!" when it is clicked.</p>
    <button onclick="help()">help me</button>
  </body>
</html>
```

**style.css**

```css
body {
  color: #d76a6a;
  background: #dbf9ff;
  font-family: monospace;
  font-weight: bold;
}
```

**script.js**

```js
function help() {
  alert("Fixed!");
}
```

## Bug 4

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="script.js"></script>
  </head>
  <body>
    <h1>
      <span>
        <span>B</span>
        <span>i</span>
        <span>r</span>
        <span>t</span>
        <span>h</span>
        <span>d</span>
        <span>a</span>
        <span>y</span>
      </span>
      <span>
        <span>A</span>
        <span>g</span>
        <span>e</span>
      </span>
      <span>
        <span>C</span>
        <span>a</span>
        <span>l</span>
        <span>c</span>
        <span>u</span>
        <span>l</span>
        <span>a</span>
        <span>t</span>
        <span>o</span>
        <span>r</span>
      </span>
    </h1>
    <p>You should be able to calculate your age after your next birthday...</p>
    <p>But it currently only works for an age of <strong>0</strong>.</p>
    <p>Take a look at the <strong>script.js</strong> file.</p>
    <button onclick="nextAge()">Get My Next Age</button>
  </body>
</html>
```

**style.css**

```css
body {
  background-color: white;
  color: #e23cb6;
  font-size: 20px;
}

h1 > span {
  font-family: jokerman;
  display: inline-flex;
}

h1 > span > span:nth-child(3n+1) {
  color: #7575ff;
}

h1 > span > span:nth-child(3n+2) {
  color: #ff4d4d;
}

h1 > span > span:nth-child(3n+3) {
  color: #ffea05;
}
```

**script.js**

```js
function nextAge() {
  let currentAgeString = prompt("How old are you?");
  let currentAge = currentAgeString;
  let nextAge = currentAge + 1;
  alert(`You will be ${nextAge} after your next birthday!`);
}
```

## Bug 5

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="script.js"></script>
  </head>
  <body>
    <img src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1922533.jpg">
    <p>button broken need fix</p>
    <button onlclick="popUp()">Pop Up</button>
  </body>
</html>
```

**style.css**

```css
img {
  height: 200px;
}
```

**script.js**

```js
function popUp() {
  alert("pop");
}
```

## Bug 6

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="script.js"></script>
  </head>
  <body>
    <img src="https://upload.wikimedia.org/wikipedia/en/d/de/Hollywood_Pictures.png">
    <p>This button should display the name of a movie</p>
    <p>But it does not</p>
    <p>Please fix</p>
    <button onclick="sayMovie()">This is broken ☹</button>
  </body>
</html>
```

**style.css**

```css
img {
  height: 200px;
}
```

**script.js**

```js
function sayMovie {
  alert("Encino Man");
}
```

## Bug 7

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="script.js"></script>
  </head>
  <body>
    <p>This quiz will say “Correct!” no matter what is entered. Instead, it should only say “Correct!” if an answer of “Whoopi Goldberg” is entered. Check the <strong>script.js</strong> file to see if you can figure out how to fix it.</p>
    <img src="https://images.squarespace-cdn.com/content/v1/5ae4ecccfcf7fd2d8744ace5/1526080959689-06BMQ3KO2FH2MPNQQSLB/Whoopi-Goldberg_1990-rexfeatures_176871a.jpg">
    <br>
    <br>
    <button onclick="quiz()">Quiz Me</button>
  </body>
</html>
```

**style.css**

```css
img {
  height: 400px;
}

body {
  background: black;
  color: white;
  font-size: 20px;
}
```

**script.js**

```js
function quiz() {
  let answer = prompt("Who is pictured on this page?");

  if (answer = "Whoopi Goldberg") {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}
```

## Bug 8

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="script.js"></script>
  </head>
  <body>
    <h1>Magic Answerer</h1>
    <img src="https://i.pinimg.com/474x/a4/3a/77/a43a772939bf7985fbf1af5b297dea9a.jpg">
    <div>
      <ol>
        <li>Think of a Yes/No question</li>
        <li>Click the button below</li>
        <li>The Magic Answerer will divine the correct answer using magic computing</li>
        <li>Revel in the glory of this omniscient automaton</li>
        <li>.... but it's broken so you have to fix it 🙃</li>
      </ol>
    </div>
    <button onclick="randomAnswer()">Think of a question, then click here for an answer</button>
  </body>
</html>
```

**style.css**

```css
@import url('https://fonts.cdnfonts.com/css/fortune-coin');

img {
  height: 300px;
  border: 2px solid #d99a35;
}

h1 {
  font-family: "Fortune Coin";
  font-size: 60px;
  margin-bottom: 0px;
}

body {
  background: #45230f;
  color: #d99a35;
  font-size: 20px;
  text-align: center;
  font-family: "Times New Roman";
}

div {
  text-align: left;
  margin: 0 auto;
  width: 700px;
}

button {
  background: #d99a35;
  color: #45230f;
  border: none;
  padding: 20px;
  border-radius: 10px;
  font-family: "Times New Roman";
  font-size: 20px;
  transition: 300ms;
}

button:hover {
  cursor: pointer;
  background: white;
}
```

**script.js**

```js
function randomAnswer() {
  let answerRandom = Math.random();
  let answer = "";

  if (answerRandom > .5) {
    answer = "Yes";
  else {
    answer = "No";
  }

  alert("And the answer is...");
  alert(answer);
}
```
