# Updating CSS Styles with JavaScript
Manipulating the DOM is one of the best ways to create interactive web experiences using JavaScript. We can even manipulate CSS through the DOM! By updating the styles of a webpage dynamically, developers can provide fun and engaging visuals for users. Let's walk through an example.

## Example Description
We want to create a simple webpage that allows a user to enter a password. If they enter the correct password, the webpage should inform them that they entered the correct password with a nice green message, and display an image. If they enter an incorrect password, the webpage should inform them that they entered the wrong password with a red message, and hide the image.

## HTML
### Basic Setup
Start from [this empty Repl](https://repl.it/@JosephMaxwell/EmptyWeb#index.html), open the **index.html** file, and add the basic tags (`html`, `body`, `head`, `style`). Additionally, add the header and a paragraph:

```html
<html>
    <head>
        <style>
        </style>
    </head>
    <body>
        <h1>Password Checker</h1>
        <p>Please enter the correct password to see an image.</p>
    </body>
</html>
```

### Text Input and Button
Next, we need a text input and a button. We want them to appear together, on their own line. We can place them inside a `div` to achieve this structure (right under the paragraph). Note that the input also requires an `id` so that we can select it in the JavaScript.

```html
<div>
    <input type="text" id="passwordInput">
    <button>Submit</button>
</div>
```

### `passwordMessage` Paragraph and Image
Next, let's add a paragraph that will contain messages for the user. We need this paragraph to have an `id` so that we can select it and update it in the JavaScript. This should go under the `div`.

```html
<p id="passwordMessage"></p>
```

We also want to add an image underneath this paragraph. We need the image to have an `id` so that we can select it and update it in the JavaScript. We also need to set its source.

```html
<img id="hiddenImage" src="https://i.imgur.com/5NGCWUo.jpg" />
```

When a user first loads up the webpage, the image should actually be hidden. We can make this happen with CSS. We will select the image using its `id`, and then set its `display` property to `none`. The CSS should go in the `style` tag of the HTML page.

```css
#hiddenImage {
    display: none;
}
```

Now, if a user opens the webpage, the image should be invisible.

## JavaScript Setup
Create a new JavaScript file, and link it in the HTML file:

```html
<script src="FollowAlong.js"></script>
```

Inside the JavaScript file, define a new function called `submitPassword`. For testing purposes, place an `alert` in the body of the function, saying that the function was called:

```js
function submitPassword() {
    alert("submitPassword called");
}
```

Back in the HTML file, hook up the "Submit" button to the function:

```html
<button onclick="submitPassword()">Submit</button>
```

Now, a user should be able to load up the page, click the button, and see a message!

## Checking the Password
Our JavaScript function should check the value the user entered into the text input, and update the page accordingly.

### Selecting HTML Elements
The first thing we need to do is select the text input from the HTML, so that we can get its value. Use `document.querySelector`, along with the `id` of the input, to accomplish this. Remember, we also need to store this text input in a JavaScript variable. This line should replace the `alert` at the top of the `submitPassword` function body:

```js
var passwordInput = document.querySelector("#passwordInput");
```

In addition to selecting the password input, we are also going to need to select the paragraph for message text, and the image. We can do this in a very similar way:

```js
var passwordMessage = document.querySelector("#passwordMessage");
var hiddenImage = document.querySelector("#hiddenImage");
```

Place these lines directly below the `passwordInput` variable declaration/setting.

### Getting User Input
We have the text input stored in a JavaScript variable (`passwordInput`), but we need to get its actual value (what the user entered). We do this by using `.value`, and we have to store the result in another variable:

```js
var passwordValue = passwordInput.value;
```

Now that we have the text the user entered, we can compare it to the correct password. In our case, let's say the correct password is "opensesame". We can use an `if`/`else` structure to change program flow based on whether their password is correct or incorrect. For now, let's simply alert whether the password was correct or not:

```js
if (passwordValue === "opensesame") {
    alert("You entered the correct password");
} else {
    alert("You entered the wrong password");
}
```

Now, a user should be able to load up the webpage, enter a password, click the button, and see a message saying if the password is correct! Test out your code by entering the correct password, and an incorrect password, and making sure the webpage displays the right message.

### Setting Paragraph Text
Instead of using those `alert`s, we can give the user a much nicer experience by simply updating an existing HTML element on the page. We've already selected the message paragraph and stored it in a variable: `passwordMessage`. All we have to do is set its `textContent` from within the body of the `if` and `else`:

```js
if (passwordValue === "opensesame") {
    passwordMessage.textContent = "You entered the correct password";
} else {
    passwordMessage.textContent = "You entered the wrong password";
}
```

Now, instead of displaying a message, the webpage should update with the message underneath the text input. Test out your code again by entering some different passwords.

## Updating Styles
To update the styles of a selected HTML element in JavaScript, a developer can use `.style`. This will work for any variable holding an HTML element that has styles attached to it. This is similar to how we would use `.textContent` to update the text inside the element. After `.style`, you will have to specify which style to access.

### Setting Text Color
In addition to setting the `textContent` of the `passwordMessage` paragraph, we want to change its color to reflect the tone of the message. If the user enters the correct password, the color should be green. If they enter the wrong password, the color should be red. To set the text color of the element, use `.style.color`:

```js
if (passwordValue === "opensesame") {
    passwordMessage.textContent = "You entered the correct password";
    passwordMessage.style.color = "green";
} else {
    passwordMessage.textContent = "You entered the wrong password";
    passwordMessage.style.color = "red";
}
```

Test out your code again. It should work the same, except when you enter the correct password, the message should be green. When you enter the wrong password, the message should be red.

### Showing the Image
To start off, we have CSS on our image setting its `display` property to the value `none`. This will hide the image. To show it, we need to set its `display` property to `block`. We can do this in a very similar way to setting the text color; we will use `.style.display`. We already have the HTML element for the image stored in a variable (`hiddenImage`). We just need to set its CSS.

```js
if (passwordValue === "opensesame") {
    passwordMessage.textContent = "You entered the correct password";
    passwordMessage.style.color = "green";
    hiddenImage.style.display = "block";
} else {
    passwordMessage.textContent = "You entered the wrong password";
    passwordMessage.style.color = "red";
    hiddenImage.style.display = "none";
}
```

Test out your code again. Now, the image should show up when you enter the correct password, and hide otherwise!

## Final Product
#### HTML
```html
<html>
    <head>
        <script src="FollowAlong.js"></script>
        <style>
            #hiddenImage {
                display: none;
            }
        </style>
    </head>
    <body>
        <h1>Password Checker</h1>
        <p>Please enter the correct password to see an image.</p>
        <div>
            <input type="text" id="passwordInput">
            <button onclick="submitPassword()">Submit</button>
        </div>
        <p id="passwordMessage"></p>
        <img id="hiddenImage" src="https://i.imgur.com/5NGCWUo.jpg" />
    </body>
</html>
```

#### JavaScript
```js
function submitPassword() {
    var passwordInput = document.querySelector("#passwordInput");
    var passwordMessage = document.querySelector("#passwordMessage");
    var hiddenImage = document.querySelector("#hiddenImage");

    var passwordValue = passwordInput.value;

    if (passwordValue === "opensesame") {
        passwordMessage.textContent = "You entered the correct password";
        passwordMessage.style.color = "green";
        hiddenImage.style.display = "block";
    } else {
        passwordMessage.textContent = "You entered the wrong password";
        passwordMessage.style.color = "red";
        hiddenImage.style.display = "none";
    }
}
```