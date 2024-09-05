# Self-Paced Work: Darth Vader "Sound"board:
Update the soundboard with some additional quotes and buttons!

**Resource: Making Buttons**

Remember, the steps to add a button for a quote are as follows:

1. Create a new `<button>` element in the **index.html** file, and give it text to display between the _opening_ and _closing_ tags
1. _Define a new function_ in the **script.js** file:
    - Start with the `function` keyword
    - Next, add a space and the function name
    - After that, add left and right parentheses
    - Finally, add left and right curly brackets
1. Within the body of the **function** (between `{` and `}`), use an `alert` to display the quote in a message
1. Back in the **index.html** file, set the `onclick` attribute of the button so that it _calls_ the function
    - To _call_ a function, use the function name and left/right parentheses
1. Open the webpage in the browser to test the button!

## More Quotes
Add new buttons for each of the following quotes:

1. "He will join us or die, Master."
1. "There is no escape. Don't make me destroy you. Luke, you do not yet realize your importance. You have only begun to discover your power. Join me and I will complete your training. With our combined strength, we can end this destructive conflict and bring order to the galaxy."
1. "No, I am your father."

### Bonus: Dark Helmet Quotes
1. "I am your father's brother's nephew's cousin's former roommate."
1. "Jammed? Raspberry. There's only one man who would dare give me the raspberry! Lone Starr!"

## `{yourName}, I am your father`
Update the "No, I am your father" function so that it asks the user for their name, and says they are the user's father.

1. In the body of the function that says "No, I am your father," add a `prompt` asking the user for their name
    - Remember to store their answer in a variable!
1. Update the `alert` so that instead of saying "No," it says the user's name
    - For example, if the user entered "Luke" as their name, it should say "Luke, I am your father."

## Challenge: New Character
Instead of Darth Vader, update your "sound"board so that it features a different character! Change the image and the quotes.

## Challenge: Real Audio
The biggest part of this challenge will be finding good, safe audio files to download and use.

### Step 1: Getting the Audio File
Follow these steps to get the audio file ready to go.

1. Find an audio file somewhere (this is the difficult part)
1. Download the audio file locally
1. Drag the audio file into the Glitch project, in the Assets section

After the audio file has been added to the Glitch, you will be able to get the link and use it in your project.

### Step 2: Playing the Audio File
Once the file has been added to the Glitch project, it only takes a couple of lines of code to play it. For example, for a file named **sound.mp3**, the code would look like this:

```js
let audio = new Audio('https://cdn.glitch.global/....something.....mp3');
audio.play();
```

It is simply a matter of placing that code into the body of a function - after that, the sound should play whenever the function is called!
