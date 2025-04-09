# All For One Starter Code

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="script.js"></script>
  </head>
  <body>
    <h1>All For One</h1>
    <img src="https://cdn.glitch.global/f0c9fd25-f621-4988-a9f0-e82994f66a57/7e0cbb76-c1cc-46aa-b242-a8b98d289ac0.image.png?v=1725564982341" />
    <p>Do some things with <span class="code">for</span> loops on this page.</p>
    <button onclick="repeatHello()">Repeat Hello</button>
    <button onclick="repeatGoodbye()">Repeat Goodbye</button>
    <button onclick="addMottos()">Add Mottos</button>
    <div id="mottos"></div>
    <button onclick="clearMottos()">Clear Mottos</button>
    <button onclick="daftPunk()">Daft Punk</button>
    <button onclick="goodWillHunting()">Good Will Hunting</button>
    <img src="https://media1.giphy.com/media/Dvw2lJqlTuJmo/giphy.gif?cid=6c09b9525y3sqs73a80l5vagqchxl0g3e5nsrap8ee79rozl&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
    <input type="number" id="count-to" placeholder="Count to..." />
    <button onclick="count()">Count</button>
    <input type="number" id="count-evens-to" placeholder="Count evens to..." />
    <button onclick="countEvens()">Count Evens</button>
    <input type="text" id="rep" placeholder="Message to Repeat" />
    <input type="number" id="times" placeholder="Number of Times" />
    <button onclick="repeatMessage()">Repeat Message</button>
  </body>
</html>
```

**script.js

```js
function repeatHello() {
  for (let i = 0; i < 5; i++) {
    alert("Hello");
  }
}

function repeatGoodbye() {
  for (let i = 0; i < 4; i++) {
    
  }
}

function addMottos() {
  let mottosContainer = document.querySelector("#mottos");
  
  for (let i = 10; i > 10; i--) {
    let newElement = document.createElement("p");
    newElement.textContent = "All for one. One for all.";
    mottosContainer.appendChild(newElement);
  }
}

function clearMottos() {
  let mottosContainer = document.querySelector("#mottos");

  mottosContainer.innerHTML = "";
}

function daftPunk() {
  alert("Around the world, around the world");
  alert("Around the world, around the world");
  alert("Around the world, around the world");
  alert("Around the world, around the world");
  alert("Around the world, around the world");
  alert("Around the world, around the world");
  alert("Around the world, around the world");
  alert("Around the world, around the world");
}

function goodWillHunting() {
  
}

function count() {
  let countMaxElement = document.querySelector("#count-to");
  let countMax = countMaxElement.value;

}

function countEvens() {

}

```

**style.css**

```css
@import url('https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Edu+TAS+Beginner&display=swap');

body {
  background: #73203a;
  color: #b5985a;
  font-family: "Edu TAS Beginner", monospace;
  text-align: center;
  font-size: 2em;
}

h1 {
  font-family: "Bungee Spice", monospace;
  font-size: 2em;
  font-weight: 100;
  margin-bottom: -10px;
}

button {
  font-family: "Edu TAS Beginner";
  font-size: 1em;
  background: #b5985a;
  color: #73203a;
  padding: 10px;
  cursor: pointer;
  box-shadow: none;
  transition: 250ms;
  border: none;
  display: block;
  margin: 10px auto;
}

img {
  height: 200px;
  display: block;
  margin: 10px auto;
}

.code {
  color: white;
  font-family: consolas;
  font-style: italic;
  font-weight: bold;
  font-size: .9em;
}

#mottos {
  border: 2px dotted #b5985a;
  width: 300px;
  padding: 5px;
  margin: 0 auto;
}
```
