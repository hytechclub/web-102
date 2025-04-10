# Warm-Up: Cotton Candy Inputs
Start by opening up [this project](https://glitch.com/edit/#!/wool-bumpy-receipt) and remixing it. It contains a simple HTML page that has a header and two input boxes.

[StackBlitz Mirror](https://stackblitz.com/edit/web-platform-yumf4jzd?file=index.html)

**index.html**

```html
<html>
	<head>
		<link href="style.css" rel="stylesheet" type="text/css" />
	</head>
	<body>
		<h1>Two Inputs</h1>
		<input type="text" />
		<input type="text" />
	</body>
</html>
```

The goal of this activity is to give one of the boxes a pink background, and the other one an aqua background.

1. Open the **index.html** file for editing
1. Add an `id` attribute to the first `<input>` element, and set it to `pink`
1. Add an `id` attribute to the _second_ `<input>` element, and set _it_ to `aqua`
1. Open the **style.css** file for editing
1. Create a new _ruleset_ selecting the `pink` input by its `id`
1. Within the `#pink { }` ruleset, use `background: pink;` to set the background color to pink
1. Repeat the steps above for a `#aqua` ruleset - set its background color to `aqua`

Click the **Run** button, and make sure the two inputs appear with the proper cotton candy colors!

## Challenge
For an additional challenge, create a third input that should have a `lavender` background color.
