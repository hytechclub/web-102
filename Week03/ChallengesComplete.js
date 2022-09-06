/* Some possible solutions to the challenges (not the only solutions) */
function diceRoll() {
    let size = prompt("How many sides?");
    let sizeNum = Number(size);

    let randomNum = Math.ceil(sizeNum * Math.random());

    alert("X ".repeat(randomNum));
}

function getRandomPassword() {
    let sizeStr = prompt("How many characters?");
    let sizeNum = Number(sizeStr);

    let randomStr = "" + Math.random();
    let randomStrSize = randomStr.substring(2, sizeNum);

    alert(randomStrSize);
}

function getRandomAlphaPassword() {
    let alphaOptions = "abcdefghijklmnopqrstuvwxyz";

    let randomIndex = Math.floor(Math.random() * 26);
    let char1 = alphaOptions.substring(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    let char2 = alphaOptions.substring(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    let char3 = alphaOptions.substring(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    let char4 = alphaOptions.substring(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    let char5 = alphaOptions.substring(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    let char6 = alphaOptions.substring(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    let char7 = alphaOptions.substring(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    let char8 = alphaOptions.substring(randomIndex, 1);

    let randomPass = char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8;
    
    let passSize = prompt("How many characters? (1-8)");
    let passSizeNum = Number(passSize);

    let randomPassSized = randomPass.substring(0, passSizeNum);

    alert(randomPassSized);
}

function quotientAndRemainder() {
    let dividend = Number(prompt("Enter a dividend"));
    let divisor = Number(prompt("Enter a divisor"));

    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;

    alert(quotient + " R " + remainder);
}

function multiplyBy2() {
    let num = Number(prompt("Which number?"));
    let powerOf2 = Number(prompt("What power of 2?"));

    alert(num << powerOf2);
}

function testRegEx() {
    let message = prompt("Enter a message to test");
    let regEx = prompt("Enter a regular expression");

    let regExObj = new RegExp(regEx);
    alert(regExObj.test(message));
}
