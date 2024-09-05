# Self-Paced Work: Mad Libs Exercise
Follow these instructions to build a simple [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs) game using JavaScript!

Begin by remixing [this starter project](https://glitch.com/edit/#!/remix/javascriptstarter).

## The Story: Biography of Leonhard Euler
The original story is as follows:

>Leonhard Euler was a Swiss mathematician, physicist, and engineer who founded the studies of graph theory and topology. He made pioneering discoveries in many other branches of mathematics such as analytic number theory, complex analysis, and infinitesimal calculus. He was born in Basel, Switzerland, and had three siblings.

To make this into a Mad Libs story, some words will have to be replaced! Here is the story again, with a list of replacements, with each part of speech within `[` and `]`:

```
Leonhard Euler was a Swiss mathematician, physicist, and [noun] 
who founded the studies of graph theory and [plural noun]. He made 
[adjective] discoveries in many other branches of mathematics 
such as analytic number theory, complex analysis, and [adjective] 
calculus. He was born in [place], and had [number] siblings.
```

The goal is to create a program that will ask the user for each of those replacements! In all, the user should be prompted for these words:

- Noun
- Plural Noun
- Adjective 1
- Adjective 2
- Place
- Number

## Part 1 - The Prompts
Start by asking the user for each word they will need to replace!

1. Open the **script.js** file for editing
1. At the top of the file, add an `alert` statement welcoming the user to the page
    - It should say "Welcome to the Mad Libs game!"
1. Under that, create a new variable named `noun`
1. Set the value of the `noun` variable to a `prompt`, with the message `"Enter a noun"`
1. Under that, create a new variable named `pluralNoun`
1. Set the value of the `pluralNoun` variable to a `prompt`, with the message `"Enter a plural noun"`
1. Under that, create a new variable named `adjective1`
1. Set the value of the `adjective1` variable to a `prompt`, with the message `"Enter an adjective"`
1. Under that, create a new variable named `adjective2`
1. Set the value of the `adjective2` variable to a `prompt`, with the message `"Enter an adjective"`

Try running the code at this point, and make sure it successfully prompts the user for these four words!

## Part 2 - The Modified Story
Next, print out the story with the words replaced!

1. Under the existing code, create a new variable named `story`
1. Set `story` equal to a new [template literal string](https://www.w3schools.com/js/js_string_templates.asp) using backticks (\` and \`)
1. Within the \` and \`, start typing out the first two sentences of the story
    - It should be like `Leonhard Euler was a Swiss mathematician, physicist, and [noun] who founded the studies of graph theory and [plural noun]. He made [adjective] discoveries in many other branches of mathematics such as analytic number theory, complex analysis, and [adjective] calculus.`
1. In the template, replace each modified word (e.g., `[noun]`) with the variable value
    - For example, `[noun]` should become `${noun}`
1. Under that, use an `alert` statement to display the `story` variable!

Once all of the replacements have been made, try running the code again. The program should ask for some words, and then display the modified story with each entered word replacing one from the original story!

## Part 3 - Continuing the Mad Lib
Now that there is a story, it's time to continue it!

1. Above the `story` variable, under the existing `prompt` statements, create two new variables: `place` and `number`
1. Set the two new variables to be `prompt` values, asking for the user to enter those types of words
1. Within the `story` string variable, add the next sentence:
    - `He was born in [place], and had [number] siblings.`
1. Replace the modified words with the variable values defined above

Run the program again, and verify that the new sentence appears in the final story with the replaced words!

## Part 4 - Another Story
This is the fun part: try to come up with a new story, and add some replaceable words! This can be a totally original story, or it can pull from a Wikipedia page, or it can be from an existing short story. It can be anything appropriate!
