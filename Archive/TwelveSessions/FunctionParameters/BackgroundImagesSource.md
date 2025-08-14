# Background Images Starter Code

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="script.js"></script>
  </head>
  <body>
    
  </body>
</html>
```

**script.js**

```js
function changeBackground(bg) {
  document.body.style.background = "url(" + bg + ")";
}

function promptForBg() {
  var userBG = prompt("What do you want the background to be?");
  changeBackground(userBG);
}

function inputForBg() {
  var bgInputElement = document.querySelector("#bgInput");
  changeBackground(bgInputElement.value);
  bgInputElement.value = "";
}
```

**style.css**

```css
body {
  background: url(https://github.com/hytechclub/web-102/blob/master/Assets/Planet.jpg?raw=true);
  background-size: contain;
}
```