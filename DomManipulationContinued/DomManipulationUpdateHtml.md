# DOM Manipulation Continued: Updating HTML
So far, we have used DOM Manipulation to get input from the user, but we can also interact with the HTML in other ways! After reading through this guide, you should be able to **use JavaScript** to:

- Update existing HTML elements
- Create new HTML elements
- Add new HTML elements to your webpage

## Getting and Setting Paragraph Text
It is possible to read from existing paragraphs on the HTML page, and update their text as well.

For example, if there was a `<p></p>` element in the **index.html** file like this:

```html
<p id="my-text">This is a paragraph</p>
```

Within a JavaScript function in a **script.js** file, it could be selected like so:

```js
let myTextElement = document.querySelector("#my-text");
```

Here, our `document.querySelector` code allows us to grab that whole HTML paragraph element, and store it in the `myTextElement` variable. Once we have our `<p>` element stored in the variable, we can use `.textContent` to do some neat things!

Here's how we could get its text value:

```js
let myTextElement = document.querySelector("#my-text");
let myTextValue = myTextElement.textContent;

// show a message with the contents of the #my-text paragraph
alert(myTextValue);
```

And here's how we could _set_ its text value:

```js
let myTextElement = document.querySelector("#my-text");

// update the contents of the #my-text paragraph
myTextElement.textContent = "Different";
```

After running this code, the paragraph from the HTML would display different text on the webpage! 

## Creating an HTML Element with JavaScript
In addition to interacting with elements that already exist on the webpage, we can create totally new HTML elements and insert them wherever we want! To create an element, we use `document.createElement` in JavaScript. This spins up a whole new element, and we can store that element in a variable, like so:

```js
let myParagraph = document.createElement("p");
```

Notice the text between the quotes: `p`. This means that we are creating a `<p></p>` element. If we wanted to create a different type of element, we could pass in the name of a different tag, like `a` or `h1`. With a `p` element, we can also set its text content using `.textContent`:

```js
let myParagraph = document.createElement("p");
myParagraph.textContent = "This is a new paragraph!";
```

Now that we have a new HTML element created, we have to insert it into our HTML page. To do this, we use `.appendChild` on an existing HTML element on the page. Here's an example:

Say this `<div>` element is already in the **index.html** file:

```html
<div id="container"></div>
```

We could use this JavaScript to add a new element within it:

```js
// store the <div> element in a variable
let containerDiv = document.querySelector("#container");

// create a new <p> element
let myParagraph = document.createElement("p");

// give text to the new <p> element
myParagraph.textContent = "Paragraph Text";

// insert the new <p> element into the <div>
containerDiv.appendChild(myParagraph);
```

When the JavaScript code above is executed, the `<div>` element will have a new child `<p>` element saying `"Paragraph Text"`. It will look like this:

```html
<div id="container">
    <p>Paragraph Text</p>
</div>
```

## Conclusion
Hopefully after reading this, you'll be able to update HTML elements and create entirely new ones programmatically!
