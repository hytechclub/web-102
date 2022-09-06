alert("Welcome to the Mad Libs game!");

let noun = prompt("Enter a noun");
let pluralNoun = prompt("Enter a plural noun");
let adjective1 = prompt("Enter an adjective");
let adjective2 = prompt("Enter an adjective");
let place = prompt("Enter a place");
let number = prompt("Enter a number");

let story = `Leonhard Euler was a Swiss mathematician, physicist, and ${noun} 
who founded the studies of graph theory and ${pluralNoun}. He made 
${adjective1} discoveries in many other branches of mathematics 
such as analytic number theory, complex analysis, and ${adjective2} 
calculus. He was born in ${place}, and had ${number} siblings.`

alert(story);
