# DOM Manipulation Continued: Updating HTML
So far, we have used DOM Manipulation to get input from the user, but we can also interact with the HTML in other ways! After reading through this guide, you should be able to **use JavaScript** to:
- Update existing HTML elements
- Create new HTML elements
- Add new HTML elements to your webpage

## Getting and Setting Paragraph Text
It is possible to read from existing paragraphs, on the HTML page, and update their text as well. Check out the following example:

#### HTML
```html
<html>
    <body>
        <p id="myText">This is a paragraph</p>
    </body>
</html>
```

#### JavaScript
```javascript
var myTextVariable = document.querySelector("#myText");
```

Here, our `document.querySelector` code allows us to grab that whole HTML paragraph element, and store it in the `myTextVariable` variable. Once we have our `<p>` element stored in the variable, we can use `.textContent` to get and set its text like so:

### Getting the `<p>` Text
```javascript
var myTextVariable = document.querySelector("#myText");
var myTextValue = myTextVariable.textContent;

// show a message with the contents of the #myText paragraph
alert(myTextValue);
```

### Setting the `<p>` Text
```javascript
var myTextVariable = document.querySelector("#myText");

// update the contents of the #myText paragraph
myTextVariable.textContent = "Different";
```

## Creating an HTML Element with JavaScript
In addition to interacting with elements that already exist on the webpage, we can create totally new HTML elements and insert them wherever we want! To create an element, we use `document.createElement` in JavaScript. This spins up a whole new element, and we can store that element in a variable, like so:

```javascript
var myParagraph = document.createElement("p");
```

Notice the text between the quotes in the JS: `p`. This means that we are creating a `<p></p>` element. If we wanted to create a different type of element, we could pass in the name of a different tag, like `a` or `h1`. With a `p` element, we can also set its text content using `.textContent`:

```javascript
var myParagraph = document.createElement("p");
myParagraph.textContent = "This is a new paragraph!";
```

Now that we have a new HTML element created, we have to insert it into our HTML page. To do this, we use `.appendChild` on an existing HTML element on the page. Here's an example:

#### HTML
```html
<html>
    <body>
        <div id="container">
        </div>
    </body>
</html>
```

#### JavaScript
```javascript
// store the <div> element in a variable
var containerDiv = document.querySelector("#container");

// create a new <p> element
var myParagraph = document.createElement("p");

// give text to the new <p> element
myParagraph.textContent = "Paragraph Text";

// insert the new <p> element into the <div>
containerDiv.appendChild(myParagraph);
```

When the JavaScript code above is executed, the `<div>` element will have a new child `<p>` element saying `"Paragraph Text"`. It will look like this:

```html
<html>
    <body>
        <div id="container">
            <p>Paragraph Text</p>
        </div>
    </body>
</html>
```

Now we know how to read from HTML elements and create new ones!