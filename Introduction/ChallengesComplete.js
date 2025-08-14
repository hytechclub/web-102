alert("Welcome to my website");

let fullName = prompt("What is your full name?");
let indexSpace = fullName.indexOf(" ");
let firstName = fullName.substring(0, indexSpace);
let lastName = fullName.substring(indexSpace+1);

let favoriteColor = prompt("What is your favorite color?");
favoriteColor = favoriteColor.replace("red", "blue");

let favoriteMovie = prompt("What is your favorite movie?");
favoriteMovie = favoriteMovie.toUpperCase();
favoriteMovie = favoriteMovie.trim();

prompt("What is the date today?");
let todaysDate = new Date();
let nextNewYear = new Date("01/01/" + (todaysDate.getFullYear()+1));
let msUntilNewYear = nextNewYear.getTime() - todaysDate.getTime();
let daysUntilNewYear = Math.ceil(msUntilNewYear/(1000*60*60*24));

let birthDayText = prompt("What is your birthday (MM/DD)?");
let halfBirthDate = new Date(birthDayText);
halfBirthDate.setDate(halfBirthDate.getDate() + (364/2));
let halfBirthDateText = (halfBirthDate.getMonth() + 1) + "/" + halfBirthDate.getDate();

let continued = confirm("Continue?");
alert("You chose to continue: " + continued);

let displayAnswers =
`First Name: ${firstName}
Last Name: ${lastName}
Favorite Color: ${favoriteColor}
Favorite Movie: ${favoriteMovie}
Today's Date: ${todaysDate}
Half birthday: ${halfBirthDateText}
Days until New Year: ${daysUntilNewYear}`

alert(displayAnswers);
