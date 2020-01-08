# Mad Libs Individual Exercise
![](https://i.imgur.com/L0Yd6g4.png)

Continue creating the "Pizza" Mad Libs with the next sentence in the story: "To make a pizza, you need to take a lump of \_\_\__noun_\_\_\_ and make a thin, round \_\_\__adjective_\_\_\_ \_\_\__noun_\_\_\_."

## Part 1 - Adding additional inputs
In the HTML file, add new `input` elements for each additional blank: "Noun", "Adjective", "Noun"
- Ensure that each `input` element has a unique `id` attribute
- Use a `p` element for each input and label so that they stay on their own lines

## Part 2 - Receiving the user input in JavaScript
In the JavaScript file, within the body of the `madLibs` function, store each input value in a variable
- First, use `document.querySelector` along with the ID selector for the `input` to store the entire `input` element in a variable
- Next, use `.value` to get the text value from the `input` element, and store that in another variable

## Part 3 - Displaying the next sentence
In the JavaScript file, within the body of the `madLibs` function, display the new sentence within an `alert`
- Use the variable values that contain the text in place of the blanks
- Use `+` to piece together the different parts of the sentence

## BONUS - Clearing input
After each time the page displays a story, clear the text the user entered in the inputs

## BONUS - More mad libs
Continue the Pizza story, or create your own Mad Libs story!