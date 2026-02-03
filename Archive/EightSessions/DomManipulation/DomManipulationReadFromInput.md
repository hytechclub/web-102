# DOM Manipulation - Read From Input
So far, we have used JavaScript `alert`s and `prompt`s to interact with users on our websites. While this works, the user experience is less than ideal. A better way to communicate with users is through the HTML itself, by using **DOM Manipulation**. Using DOM manipulation is the next step toward creating a truly dynamic web experience.

After reading through this guide, you should be able to **use JavaScript** to read from existing HTML elements.

Before that, though, let's start with some background information.

## Background
This information will help inform the steps required to read from inputs.

### What is the DOM?
The [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

### Representing HTML Elements in JavaScript
So far, we have stored a few different things in JavaScript variables: `Number`s, `String`s, and `Boolean`s. These are known as **Data Types**. To store something bigger, like a whole HTML input element, we need to use another data type: `Object`. `Object`s in JavaScript can store pretty much anything! For now, we are going to use them to store HTML elements that exist in our HTML document.

## Implementation
Now, let's cover how we will actually use these concepts to make our webpages more interactive!

### Storing an HTML Element in a JavaScript Variable
To find an element within our HTML page and store it in a variable, we use the `document.querySelector` function. This allows us to **select** an HTML element in the same way we would select it to style it in CSS. Note that here, we are storing the _ACTUAL HTML ELEMENT_, not just the text!

Let's take a look at an example. Here's some HTML which includes an `<input />` element:

```html
<html>
    <body>
        Input your message: <input id="my-input" />
    </body>
</html>
```

To _select_ that element in JavaScript, and store it in a variable, you can do this:

```javascript
let myInputElement = document.querySelector("#my-input");
```

>Notice the text between the quotes in the JS: `#my-input`. This is exactly what we would use in CSS to select and style the input with an `id` of "myInput"

Here, our `document.querySelector` code allows us to grab that whole HTML `<input />` element, and store it in the `myInputElement` variable. Once we have our HTML element stored in the variable, we can interact with it! We can use `.value` to get and set the text entered into the actual text box on the page.

Let's take a look at an example, following from above. The HTML will be the same; the only important part is the `<input />` with that particular `id` attribute value:

```html
<input id="my-input" />
```

Now, to _get_ the value of that text within JavaScript code, it looks like this:

```js
let myInputElement = document.querySelector("#my-input");
let myInputText = myInputElement.value;

// This would display a pop-up where the message is whatever the user had typed into the text box!
alert(`Your message was: ${myInputText}`);
```

It is also possible to _set_ the text in the text box! The `.value` is set just like another variable. It could look something like this:

```js
let myInputElement = document.querySelector("#my-input");
let myInputText = myInputElement.value;

// This will set the text inside the text box to "my message"
myInputElement.value = "my message";
```

It may also be desired to clear out the value; that's possible too!

```js
let myInputElement = document.querySelector("#my-input");
let myInputText = myInputElement.value;

// This will clear out any text in the text box
myInputElement.value = "";
```

## Conclusion
It may be difficult to grasp the concept of the DOM, but it is an incredibly powerful tool. It can allow you to create truly interactive user experiences!
