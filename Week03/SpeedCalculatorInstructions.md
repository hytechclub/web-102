# Speed Calculator
In this exercise, start from [this empty Repl](https://repl.it/@JosephMaxwell/EmptyWeb#index.html). Then, follow the instructions below to build a little text-based JavaScript program that calculates speed using user input.

## Part 1 - Setup
1. Add the `html` element to the **index.html** file
1. Add the `head` element (child of `html`)
1. Add the `script` element (child of `head`)
1. Within the script, add a statement that will show a message to the user welcoming them to your website. It should say "Welcome to the Speed Calculator"

#### Code
```html
<html>
    <head>
        <script>
            alert("Welcome to the Speed Calculator");
        </script>
    </head>
</html>
```

## Part 2 - Calculating Speed with Hard-coded Values
1. Declare a new variable called `distance`, and set its value to `60`
    - The unit of measurement for distance is miles
1. Declare another new variable called `time`, and set its value to `1`
    - The unit of measurement for time is hours
1. Calculate the speed given the distance and time, and store it in a new variable called `speed`
    - Distance ÷ Time = Speed
1. Add a comment above the speed variable initialization describing the calculation
1. Display a message to the user telling them the result of the speed calculation. It should say "Your average speed was \_\_ mph" (replacing \_\_ with the result)

#### Code
```html
<html>
    <head>
        <script>
            alert("Welcome to the Speed Calculator");

            var distance = 60;
            var time = 1;

            // divide the distance in miles by the time in hours to get average speed
            var speed = distance / time;
            alert("Your average speed was " + speed + " mph");
        </script>
    </head>
</html>
```

## Part 3 - Prompting for Input
Instead of hard-coding values, the program should ask the user for this information!

1. Declare a new variable, `distanceString`, and set its value from a `prompt`
    - Ask "How far did you travel (in miles)?"
1. Change the value of the `distance` variable so that it is the number version of the `distanceString` variable
    - Use `Number()`
1. Declare a new variable, `timeString`, and set its value from a `prompt`
    - Ask "How long did it take you (in hours)?"
1. Change the value of the `time` variable so that it is the number version of the `timeString` variable

Note that the calculation stays the same! The only difference is the variable values.

#### Code
```html
<html>
    <head>
        <script>
            alert("Welcome to the Speed Calculator");

            var distanceString = prompt("How far did you travel (in miles)?");
            var distance = Number(distanceString);

            var timeString = prompt("How long did it take you (in hours)?");
            var time = Number(timeString);

            // divide the distance in miles by the time in hours to get average speed
            var speed = distance / time;
            alert("Your average speed was " + speed + " mph");
        </script>
    </head>
</html>
```

## Part 4 - Minutes
1. Change the equation to use minutes instead of hours!
    - Update the question to ask for the length of time in minutes
    - Update the calculation so that it works for minutes

#### Code
```html
<html>
    <head>
        <script>
            alert("Welcome to the Speed Calculator");

            var distanceString = prompt("How far did you travel (in miles)?");
            var distance = Number(distanceString);

            var timeString = prompt("How long did it take you (in minutes)?");
            var time = Number(timeString);

            // divide the distance in miles by the time in hours to get average speed
            var speed = distance / (time / 60);
            alert("Your average speed was " + speed + " mph");
        </script>
    </head>
</html>
```