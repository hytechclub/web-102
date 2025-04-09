# Counting Warm-Up Starter Code

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css">
    <script src="script.js"></script>
  </head>
  <body>
    <h1>The Count</h1>
    <img src="https://github.com/hytechclub/web-102/blob/master/Assets/CountVonCount.png?raw=true" />
    <p>Greetings. I am the Count. They call me the Count because I LOVE to count. Click the button below to start counting!</p>
    <p>
      <button onclick="count()">Count</button>
    </p>
  </body>
</html>
```

**script.js**

```js
function count() {
  alert("Here we go!");
  alert(1);
  alert(2);
  alert(3);
  alert(4);
}
```

**style.css

```css
@import url('https://fonts.googleapis.com/css2?family=Nabla&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400&display=swap');

body {
  background: darkblue;
  text-align: center;
  margin: 0 auto;
  max-width: 650px;
  width: 80%;
}

h1 {
  font-size: 5em;
  font-family: "Nabla", cursive;
}

img {
  margin-top: -50px;
  height: 200px;
}

p {
  color: #ffc14d;
  font-family: "Urbanist", sans-serif;
  font-size: 1.5em;
}

button {
  position: relative;
  background: #ffc14d;
  color: black;
  font-family: "Urbanist", sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 250ms;
}

button:hover {
  box-shadow: -5px 5px 2px black;
  transform: translate(2px, -2px);
}
```
