# Decisions Decisions Source

**index.html**

```html
<html>
  <head>
    <link href="style.css" rel="stylesheet" />
    <script src="script.js"></script>
  </head>
  <body>
    <div class="filter"></div>
    <h1>Decisions</h1>
    <div class="container">
      <p>Every day, we are faced with hundreds of tiny decisions. They may seem insignificant in the moment, but every one helps chart the course for the remainder of our lives. Each new pick brings us closer to our ultimate fate; each new selection drags us closer to our inescapable end. The options unchosen haunt us relentlessly, filling us with longing for what might have been; the paths we do choose remind us of our powerlessness against the inevitable tide of the universe. Do we have free will? Or are we but cogs in the great machine of Nature? Can you change your life? Or are you bound to a destiny you cannot control?</p>
      <p>Click one of the buttons below for help.</p>
      <div>
      <button onclick="pickBetweenTwo()">🌌🌌</button>
      <button>🌌🌌🌌</button>
      </div>
    </div>
    <h2>Pros and Cons</h2>
    <div class="container">
      <p>Sometimes, it can be helpful to weigh out options based on pros and cons.</p>
      <button class="pros" onclick="prosCons()">Help Me Decide</button>
    </div>
  </body>
</html>
```

**style.css**

```css
@import url('https://fonts.googleapis.com/css2?family=Concert+One&family=Righteous&display=swap');

body {
  margin: 0;
  text-align: center;
  background: #1c0038;
  color: #ffe5f9;
  background: url("https://upload.wikimedia.org/wikipedia/commons/e/e4/StarfieldSimulation.gif");
}

h1 {
  font-family: "Righteous";
  font-size: 90px;
  margin-bottom: -10px;
}

h2 {
  font-family: "Righteous";
  color: #f5d1ff;
  font-size: 60px;
  margin-bottom: -10px;
}

.container {
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
}

.container > div {
  margin: 30px;
}

button {
  width: 200px;
  font-size: 30px;
  padding: 20px;
  margin: 10px;
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #ffe5f9;
  transition: 300ms;
  background: #7465bd;
  border: none;
  color: #ffe5f9;
  font-family: "Concert One";
}

button:hover {
  transform: translate(5px, -5px);
  box-shadow: -5px 5px 0px #ffe5f9;
}

p {
  font-size: 24px;
  font-family: "Concert One";
  color: white;
}

.filter {
  position: fixed;
  width: 100%;
  height: 100%;
  margin: 0px;
  z-index: -1;
  opacity: .5;
  background-color: #380038;
}

iframe {
  width: 535px;
  height: 300px;
  border: 5px solid #ffe5f9;
  margin-bottom: 20px;
}

button.pros {
  width: 300px;
  margin-bottom: 100px;
}
```

**script.js**

```js
// Function for the "🌌🌌" button
function pickBetweenTwo() {
  // Display welcome message
  alert("Think of a decision you have to make in your life. This should be a decision where there are exactly two options.");

  // See what the user is trying to decide
  let conundrum = prompt("What are you trying to choose?");

  // If they didn't enter anything...
  if (conundrum === "") {
    // Fail!
    alert("You did not enter a conundrum! This is inexusable!!");

    // Exit immediately!
    return;
  }

  // Ask the user for two options
  let option1 = prompt("What's one choice you could make?");
  let option2 = prompt("What's another path you could choose?");

  // Think about it...
  alert("Hmmm...");

  // Declare an empty variable
  let decision;

  // Get a random number between 0 and 1
  let randomNumber = Math.random();

  // If the number is greater than .5 (50% chance)...
  if (randomNumber > .5) {
    // Choose option 1
    decision = option1;
  } else {
    // Otherwise, choose option 2
    decision = option2;
  }

  // Fill out the end message, using the original conundum and the chosen option
  let endMessage = `In the matter of ${conundrum}, you should choose ${decision}.`;

  // Display the final message!
  alert(endMessage);
}

// Function for the "Help Me Decide" button
function prosCons() {
  // Get the thing the user is trying to decide
  let thingToDo = prompt("What are you trying to decide whether or not you should do?");

  // Display message for pros
  alert("Alright, let's start with the Pros.");

  // Get the first pro
  let pro1 = prompt("Enter Pro 1");

  // Get how important this item is to the user
  let weightPro1String = prompt("How important is that to you on a scale of 1-10?");

  // Convert the input into a numeric value
  let weightPro1 = Number(weightPro1String);

  // Get the second pro + weight
  let pro2 = prompt("Enter Pro 2");
  let weightPro2String = prompt("How important is that to you on a scale of 1-10?");
  let weightPro2 = Number(weightPro2String);

  // Message to start the cons
  alert("Okay, now the Cons.");

  // Get first con + weight
  let con1 = prompt("Enter Con 1");
  let weightCon1String = prompt("How important is that to you on a scale of 1-10?");
  let weightCon1 = Number(weightCon1String);

  // Get second con + weight
  let con2 = prompt("Enter Con 2");
  let weightCon2String = prompt("How important is that to you on a scale of 1-10?");
  let weightCon2 = Number(weightCon2String);

  // Think about it...
  alert("Hmm...");

  // Calculate total value for the Pros
  let proTotal = weightPro1 + weightPro2;

  // Calculate total value for the Cons
  let conTotal = weightCon1 + weightCon2;

  // If the pros outweigh the cons...
  if (proTotal > conTotal) {
    // Display the choicde
    alert(`You should DEFINITELY ${thingToDo}.`);
  } else {
    // Display the negative choice
    alert(`You should definitely NOT ${thingToDo}.`);  
  }
}
```
