# Profile Builder: Follow-Along Activity
Create a profile website with data pulled from a JavaScript object. Start from [this empty Repl](https://repl.it/@JosephMaxwell/EmptyWeb#index.html), then follow the instructions below.

## HTML setup
The webpage should have labels for the profile information going down the left side, and then the information should fill in when the user clicks the button.

1. Create a new JS file named **ProfileBuilder.js**
1. Add the basic elements to the **index.html** file (including the `script`)
1. Within the `<body></body>` of the HTML file, create a new `p` element
1. Within the `<p></p>` element, create a `button` element
    - It should say "Generate Profile"
    - It should call the `generateProfile` function when clicked
1. Underneath the `<p></p>` element, create an `h3` that says "Name"
1. Underneath the "Name" `<h3></h3>`, create a `p` with no content that has an `id` attribute of "name"
1. Repeat the two steps above for "Height", "Age", and "Location"

### Code
```html
<html>
    <head>
        <script src="ProfileBuilder.js"></script>
    </head>
    <body>
        <p><button onclick="generateProfile()">Generate Profile</button></p>
        <h3>Name</h3>
        <p id="name"></p>
        <h3>Height</h3>
        <p id="height"></p>
        <h3>Age</h3>
        <p id="age"></p>
        <h3>Location</h3>
        <p id="location"></p>
    </body>
</html>
```

## JavaScript Object Definition
Since all of this information is related, it would make sense to store it within one JavaScript _object_.

1. At the top of the "ProfileBuilder.js" file, define a new JavaScript object variable named `profileInfo`
    - `var `
    - variable name
    - `=`
    - `{}`
1. Within the `profileInfo` object, set the `Name` property to "Jack"
    - property name (`Name`)
    - colon (`:`)
    - property value (`"Jack"`)
    - comma (`,`)
1. Set the following additional properties on the `profileInfo` object:
    - Height (60)
    - Age (33)
    - Location (Pittsburgh)

### Code
```js
var profileInfo = {
    Name: "Jack",
    Height: 60,
    Age: 33,
    Location: "Pittsburgh"
}
```

## Profile Generation
The "Generate Profile" button should fill out the HTML with the information from the object when clicked.

1. In the JS file, under the object definition, define a function named `generateProfile`
    - `function`
    - function name (`generateProfile`)
    - `()`
    - `{}`
1. Within the body of the `generateProfile` function, use `document.querySelector` to get the `p` with an `id` of "name"
    - Store the result in a variable
1. Set the `.textContent` of the "name" paragraph to the `Name` property of the `profileInfo` object
    - Use `.Name`
1. Repeat the two steps above for "Height", "Age", and "Location"

Try out the webpage to see if it works!

### Code
```js
function generateProfile() {
    var nameEl = document.querySelector("#name");
    nameEl.textContent = profileInfo.Name;

    var heightEl = document.querySelector("#height");
    heightEl.textContent = profileInfo.Height;

    var ageEl = document.querySelector("#age");
    ageEl.textContent = profileInfo.Age;

    var locationEl = document.querySelector("#location");
    locationEl.textContent = profileInfo.Location;
}
```

## Object Updates
The user should be able to update the "Name" information in the JavaScript object.

1. In the HTML file, add a `button` within the "Name" `h3` after the text
    - The button should say "Update"
    - When clicked, the button should call a function named `updateName`
1. In the JS file, underneath the `generateProfile` function, define a new function named `updateName`
1. In the body of the `updateName` function, use a `prompt` to ask the user for a new name
    - Store the user input in a variable
1. Update the `Name` property of the `profileInfo` object to be the user input

Try out the webpage. Note that when updating, it only updates the JavaScript object, not the HTML on the page. To see the HTML update, click the "Generate Profile" button again!

## Final Code
#### HTML
```html
<html>
    <head>
        <script src="ProfileBuilder.js"></script>
    </head>
    <body>
        <p><button onclick="generateProfile()">Generate Profile</button></p>
        <h3>Name <button onclick="updateName()">Update</button></h3>
        <p id="name"></p>
        <h3>Height</h3>
        <p id="height"></p>
        <h3>Age</h3>
        <p id="age"></p>
        <h3>Location</h3>
        <p id="location"></p>
    </body>
</html>
```

#### JS
```js
var profileInfo = {
    Name: "Jack",
    Height: 60,
    Age: 33,
    Location: "Pittsburgh"
}

function generateProfile() {
    var nameEl = document.querySelector("#name");
    nameEl.textContent = profileInfo.Name;

    var heightEl = document.querySelector("#height");
    heightEl.textContent = profileInfo.Height;

    var ageEl = document.querySelector("#age");
    ageEl.textContent = profileInfo.Age;

    var locationEl = document.querySelector("#location");
    locationEl.textContent = profileInfo.Location;
}

function updateName() {
    var newName = prompt("Enter a new name:");
    profileInfo.Name = newName;
}
```