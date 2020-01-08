function diceRoll() {
    var size = prompt("How many sides?");
    var sizeNum = Number(size);

    var randomNum = Math.ceil(sizeNum * Math.random());

    alert("X ".repeat(randomNum));
}

function getRandomPassword() {
    var sizeStr = prompt("How many characters?");
    var sizeNum = Number(sizeStr);

    var randomStr = "" + Math.random();
    var randomStrSize = randomStr.substr(2, sizeNum);

    alert (randomStrSize);
}

function getRandomAlphaPassword() {
    var alphaOptions = "abcdefghijklmnopqrstuvwxyz";

    var randomIndex = Math.floor(Math.random() * 26);
    var char1 = alphaOptions.substr(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    var char2 = alphaOptions.substr(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    var char3 = alphaOptions.substr(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    var char4 = alphaOptions.substr(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    var char5 = alphaOptions.substr(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    var char6 = alphaOptions.substr(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    var char7 = alphaOptions.substr(randomIndex, 1);

    randomIndex = Math.floor(Math.random() * 26);
    var char8 = alphaOptions.substr(randomIndex, 1);

    var randomPass = char1 + char2 + char3 + char4 + char5 + char6 + char7 + char8;
    
    var passSize = prompt("How many characters? (1-8)");
    var passSizeNum = Number(passSize);

    var randomPassSized = randomPass.substr(0, passSizeNum);

    alert(randomPassSized);
}

function quotientAndRemainder() {
    var dividend = Number(prompt("Enter a dividend"));
    var divisor = Number(prompt("Enter a divisor"));

    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;

    alert(quotient + " R " + remainder);
}

function multiplyBy2() {
    var num = Number(prompt("Which number?"));
    var powerOf2 = Number(prompt("What power of 2?"));

    alert(num << powerOf2);
}

function testRegEx() {
    var message = prompt("Enter a message to test");
    var regEx = prompt("Enter a regular expression");

    var regExObj = new RegExp(regEx);
    alert(regExObj.test(message));
}