# HTML & CSS Review Code-Along
Start by remixing [this empty project](https://glitch.com/edit/#!/remix/emptyweb101), then follow the instructions below to build a simple webpage!

## Add the Basic HTML Elements
Add the foundational elements to the **index.html** file. Start with `<html></html>`, then add `<head></head>` and `<body></body>` between the HTML tags.

```html
<html>
	<head>
	</head>
	<body>
	</body>
</html>
```

## Add a Header
Between the opening and closing `body` tags, add an `h3` element. Within the `h3` element, add the proper text.

```html
<h3>Despicable Me Fan Site</h3>
```

## Add an Image
Add an image to the page.

1. Go to [Google Images](https://google.com/images/)
1. Find an image, and copy the image address/URL/location
1. Create an `img` tag, and set its `src` attribute to be the URL for the image

```html
<img src="https://styles.redditmedia.com/t5_jp9q6/styles/communityIcon_fxzkwfcw07f41.jpg">
```

## Add a Paragraph
Under the `img` element, add a `p` element that contains the text for the paragraph.

```html
<p>Despicable Me is a great film filled with several memorable characters and zany plot lines.</p>
```

## Add Another Header
Under the `p`, add another `h3` header that will serve as the title for a list.

```html
<h3>Top Three Movies Of All Time</h3>
```

## Add a List
Under the `h3`, create an `ol` element. Between the opening and closing tags, create three `li` elements with the proper text.

```html
<ol>
    <li>Despicable Me</li>
    <li>Despicable Me 2</li>
    <li>Despicable Me 3</li>
</ol>
```

## Create a New CSS File
Now it's time to add some style. Create a new file named **style.css**, and save it in the same folder as the **index.html** file. In the file, add a ruleset that will select the `body` (all the content on the page). Within the ruleset, set the `background` property to `black`, and the `color` property to `orange`.

```css
body {
    background: black;
    color: orange;
}
```

## Link the CSS in the HTML
Although CSS has been added to the **style.css** file, nothing has changed on the page! This is because the CSS file must be _linked_ in the HTML file.

In the **index.html** file, between the opening and closing `head` tags, create a `link` tag. It should have an `href` attribute with the value `style.css`, a `type` attribute with the value `text/css`, and a `rel` attribute with the value `stylesheet`. Now the page should have the styles!

```html
<link href="style.css" type="text/css" rel="stylesheet">
```

## Add an Image Style
Currently, the image might be a little big. Use CSS to update its size. In the **style.css** file, add a ruleset that will select the `img`. Within the ruleset, set the `height` property to `200px`.

```css
img {
	height: 200px;
}
```

## Add a Main Header Style
Next, it would be nice for the main header to stand out a little more. To select this header specifically, but not any other header, add an `id` attribute to it in the HTML, and then select it by its ID in the CSS.

In the **index.html** file, find the top `h3` header. Add an `id` attribute with a value of `main` to the element.

```html
<h3 id="main">Despicable Me Fan Site</h3>
```

In the **style.css** file, add a ruleset that will select elements with an ID of `main` using `#main`. Within the ruleset, set the `color` property to `yellow` (this is the color of the minions).

```css
#main {
	color: yellow;
}
```

## Final Code
That's it! The Despicable Me Fan Site looks pretty good.

### index.html
```html
<html>
	<head>
		<link href="style.css" type="text/css" rel="stylesheet">
	</head>
	<body>
		<h3 id="main">Despicable Me Fan Site</h3>
		<img src="https://styles.redditmedia.com/t5_jp9q6/styles/communityIcon_fxzkwfcw07f41.jpg">
		<p>Despicable Me is a great film filled with several memorable characters and zany plot lines.</p>

		<h3>Top Three Movies Of All Time</h3>
		<ol>
			<li>Despicable Me</li>
			<li>Despicable Me 2</li>
			<li>Despicable Me 3</li>
		</ol>

	</body>
</html>
```

### style.css
```css
body {
	background: black;
	color: orange;
}

img {
	height: 200px;
}

#main {
	color: yellow;
}
```
