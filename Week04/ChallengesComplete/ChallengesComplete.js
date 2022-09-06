/* Addition Calculator */
function add() {
    let num1 = Number(prompt("Enter the first number"));
    let num2 = Number(prompt("Enter the second number"));
    alert(num1 + num2);
}

function subtract() {
    let num1 = Number(prompt("Enter the first number"));
    let num2 = Number(prompt("Enter the second number"));
    alert(num1 - num2);
}

function multiply() {
    let num1 = Number(prompt("Enter the first number"));
    let num2 = Number(prompt("Enter the second number"));
    alert(num1 * num2);
}

function divide() {
    let num1 = Number(prompt("Enter the first number"));
    let num2 = Number(prompt("Enter the second number"));
    alert(num1 / num2);
}

/* The Cat's Meow */
function catMeow() {
    alert("meow");
}

/* Mad Libs */
function madLibs() {
    let textPart1 = "You will rejoice to hear that no ";
    let textPart2 = " has accompanied the commencement of an enterprise which you have regarded with such evil forebodings. I arrived here yesterday, and my first task is to assure my dear ";
    let textPart3 = " of my welfare and increasing confidence in the success of my undertaking. I am already far north of ";
    let textPart4 = ", and as I walk in the streets of Petersburgh, I feel a ";
    let textPart5 = " northern breeze play upon my cheeks, which braces my nerves and fills me with "
    let textPart6 = ". Do you understand this feeling? This breeze, which has travelled from the regions towards which I am advancing, gives me a foretaste of those icy climes."

    let blank1 = prompt("Noun");
    let blank2 = prompt("Noun");
    let blank3 = prompt("Location");
    let blank4 = prompt("Adjective");
    let blank5 = prompt("Feeling");

    let story = textPart1 + blank1 + textPart2 + blank2 + textPart3 + blank3 + textPart4 + blank4 + textPart5 + blank5 + textPart6;
    alert(story);
}

/* Go to Google */
function goToGoogle() {
    alert("Going to google...");
}

/* Calculator */
let argString = "";

function buttonClicked(btnVal) {
    argString += btnVal;
    alert(argString);
}

function equalClicked() {
    alert(eval(argString));
    argString = "";
}
