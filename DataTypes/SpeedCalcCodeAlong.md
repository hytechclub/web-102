# Code-Along: Speed Calculator
Start by forking [this starter Repl](https://replit.com/@HylandOutreach/JavaScriptStarter). Then, follow the instructions below to build a little text-based JavaScript program that calculates speed using user input. You could also add an button onto your Week 1 "About Me" page that links to this program. 


## Part 1 - Calculating Speed with Hard-coded Values
To start, simply create some [hard-coded](https://en.wikipedia.org/wiki/Hard_coding) variables, and use those to calculate the speed. This should all take place in the **script.js** file.

1. Start by adding an `alert` statement that welcomes the user to the application
1. Under that, create a new variable named `distance`, and set its value to `60`
    - The unit of measurement for distance is miles
1. Under _that_, create another new variable named `time`, and set its value to `2`
    - The unit of measurement for time is hours
1. Calculate the speed given the distance and time, and store it in a new variable named `speed`
    - Distance ÷ Time = Speed
1. Add a _comment_ above the speed variable initialization describing the calculation
1. Create another new variable named `message`, and use string interpolation to tell the user their average speed
    - It should say "Your average speed was \_\_ mph" (replacing \_\_ with the result)
    - Note that this is possible using a template literal!
1. Display the message in an `alert`

At this point, the code in the **script.js** file should look something like this:

```js
alert("Welcome to the Speed Calculator");

let distance = 60;
let time = 2;

// divide the distance in miles by the time in hours to get average speed
let speed = distance / time;
let message = `Your average speed was ${speed} mph`;
alert(message);
```

Run the program, and it should display an average speed of **30 mph**!

## Part 2 - Prompting for Input
Instead of hard-coding values, the program should ask the user for this information!

1. Create a new variable, `distanceString`, and set its value from a `prompt`
    - Ask "How far did you travel (in miles)?"
1. Change the value of the `distance` variable so that it is the number version of the `distanceString` variable
    - Hint: use `Number()`
1. Create a new variable, `timeString`, and set its value from a `prompt`
    - Ask "How long did it take you (in hours)?"
1. Change the value of the `time` variable so that it is the number version of the `timeString` variable

Note that the calculation stays the same! The only difference is the variable values.

The code in the **script.js** file should look something like this:

```js
alert("Welcome to the Speed Calculator");

let distanceString = prompt("How far did you travel (in miles)?");
let distance = Number(distanceString);

let timeString = prompt("How long did it take you (in hours)?");
let time = Number(timeString);

// divide the distance in miles by the time in hours to get average speed
let speed = distance / time;
let message = `Your average speed was ${speed} mph`;
alert(message);
```

Run the program, and make sure it calculates the average speed correctly!

## Part 3 - Minutes
Next, update the program so that it asks the user for their time in minutes instead of hours.

1. Update the question so that it asks for the user's time in minutes
1. Update the calculation to divide the minutes so that it gives the proper miles per hour!

The code in the **script.js** file should look something like this:

```js
alert("Welcome to the Speed Calculator");

let distanceString = prompt("How far did you travel (in miles)?");
let distance = Number(distanceString);

let timeString = prompt("How long did it take you (in minutes)?");
let time = Number(timeString);

// divide the distance in miles by the time in minutes to get average speed
let speed = distance / (time / 60);
let message = `Your average speed was ${speed} mph`;
alert(message);
```

Run the program, and verify that it calculates the speed correctly!
