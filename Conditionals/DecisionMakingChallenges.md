# Challenges: Decisions
Complete these challenges based on a philosophical decision-making website.

[Click here to view the Decisions project.](https://hytop.onrender.com/e/decisions) Fork the project to begin the challenges.

## Part 1: Pick Between
The first part of this challenge set involves the button with two galaxies (🌌🌌) - picking between multiple options.

### Background
Click the 🌌🌌 button, and follow the instructions to see how it works.

In the code, this functionality is written out in the `pickBetweenTwo` function. Open the **script.js** file to take a look. There are comments above each line that explain what the code is doing.

### Challenge 1: Empty Option Checking
Currently, if a user fails to enter an answer for the "What are you trying to choose?" `prompt`, the function will exit immediately. This is good! The problem is that this does not happen for `option1` or `option2`.

Fix the code so that, if the user does NOT enter an answer for the `option1` or `option2` prompt, the function exits. This will involve an `if` statement (or two), and a `return` statement (or two).

### Challenge 2: Pick Between Three
Choosing between two options is cool, but what if the user was trying to choose between three things????

Create a new function named `pickBetweenThree` that does the same thing as the `pickBetweenTwo` function, except that it chooses between _three_ options. Hook the function up to the 🌌🌌🌌 button.

>_Note: Feel free to copy and paste for now_

### Challenge 3: Pick Between Four
Next, do the same thing, but let the user choose between _four_ options. Hook this up to a newly-created 🌌🌌🌌🌌 button.

>_Note: Feel free to continue copying and pasting for now_

### Challenge 4: One Button to Rule Them All
This is starting to get a little crowded.

1. Clean up the page by removing all but one button from the **index.html** file - it should have one 🌌
1. In the **script.js** file, define a new function named `pickBetween`
1. Hook up the 🌌 button to the `pickBetween` function
1. In the body of the `pickBetween` function, ask the user how many options they would like
1. Depending on what they enter, run the `pickBetweenTwo`, `pickBetweenThree`, or `pickBetweenFour` functions

For an added challenge, try to learn how to use [function parameters](https://javascript.info/function-basics) to condense the code and make it work for _any number_ of options! Function parameters will be covered later on in the course, but they can be extremely useful for this challenge.

## Part 2: Pros and Cons
The next part of this challenge set involves the Pros and Cons section - choosing whether or not to do a thing based on a list of pros and a list of cons.

### Background
Scroll down and click the "Help Me Decide" button to run through the Pros and Cons list feature.

In the code, this functionality is written out in the `prosCons` function. Open the **script.js** file to take a look. There are comments above each line that explain what the code is doing.

### Challenge 5: More Pros
Currently, the feature will allow for _two_ pro items. Their weights are ultimately stored in the `weightPro1` variable and the `weightPro2` variable.

Add code to ask the user for _two more_ pro items, for a total of _four_. They should all be included in the `proTotal` sum calculation below.

### Challenge 6: More Cons
Now there are four possible pros, but... that means that the system is inherently biased toward the pro side. Fix this by allowing for _two additional con_, for a total of _four con items_. These new item weights should be included in the `conTotal` sum calculation below.

Run the project, click the button, and make sure the weights are properly used to determine the decision! 

### Challenge 7: Number Verification
Currently, when asking for the weight of importance for pro and con items, the program will allow any number to be entered. These numbers should be constrained to between `1` and `10`.

#### Between One and Ten
Update the code so that each `weightPro` and `weightCon` variable is verified after it is converted into a `Number`. If a number is less than `1`, or greater than `10`, the program should return immediately with a message saying that the user failed to enter a proper number.

#### Dealing with Non-Numbers
Additionally, the user may have entered something that is not a number at all. In this case, the program should _also_ return immediately. This can be checked using the [`isNan`](https://www.w3schools.com/jsref/jsref_isnan.asp) function.

### Challenge 8: Split Decision 
Lastly, it is possible that both weights end up equalling each other exactly! In this case, the program will currently go with the "con" side because of how the `if` statement is set up.

Fix this so that if the weights for each side are equivalent, a third message is displayed that says `"It is impossible to choose."`
