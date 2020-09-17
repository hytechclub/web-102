# DOM Manipulation - Read From Input
So far, we have used JavaScript `alert`s and `prompt`s to interact with users on our websites. While this works, the user experience is less than ideal. A better way to communicate with users is through the HTML itself, by using **DOM Manipulation**. Using DOM manipulation is the next step toward creating a truly dynamic web experience.

After reading through this guide, you should be able to **use JavaScript** to read from existing HTML elements.

Before that, though, let's start with some background information.

## Background

### What is the DOM?
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page. For more information, check out this article from Mozilla: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

### Representing HTML Elements in JavaScript
So far, we have stored a few different things in JavaScript variables: `Number`s, `String`s, and `Boolean`s. These are known as **Data Types**. To store something bigger, like a whole HTML input element, we need to use another data type: `Object`. `Object`s in JavaScript can store pretty much anything! For now, we are going to use them to store HTML elements that exist in our HTML document.

## Implementation
Now, let's cover how we will actually use these concepts to make our webpages more interactive!

### Storing an HTML Element in a JavaScript Variable
To find an element within our HTML page and store it in a variable, we use `document.querySelector`. This allows us to **select** an HTML element in the same way we would select it to style it in CSS. Note that here, we are storing the _ACTUAL HTML ELEMENT_, not just the text!

#### HTML

```html
<html>
    <body>
        Input your message: <input id="myInput">
    </body>
</html>
```

#### JavaScript

```javascript
var myMessageVariable = document.querySelector("#myInput");
```

>Notice the text between the quotes in the JS: `#myInput`. This is exactly what we would use in CSS to select and style the input with an `id` of "myInput".

Here, our `document.querySelector` code allows us to grab that whole HTML input element, and store it in the `myMessageVariable` variable. Once we have our HTML element stored in the variable, we can interact with it! We can use `.value` to get and set the text entered in the `<input>` tag like so:

#### Getting the `<input>` Value

```javascript
var myMessageVariable = document.querySelector("#myInput");
var myMessageValue = myMessageVariable.value;

// show a message with the contents of the #myInput input
alert("Your message was: " + myMessageValue);
```