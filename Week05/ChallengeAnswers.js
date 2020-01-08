/* Boolean Logical Operators

1. false
2. x
3. true
4. true
5. !x && !y
6. x && y

*/

function simpleChat() {
    var messageToBot = prompt("What message would you like to give the bot?");

    if (messageToBot === "Hello") {
        alert("Goodbye");
    } else if (messageToBot === "How are you?") {
        alert("I am well, thank you");
    } else if (messageToBot === "I don't like you") {
        alert("Ok :(");
    } else if (messageToBot === "I like you") {
        alert("Ok :)");
    } else if (messageToBot === "What is 1+1") {
        alert("2");
    } else {
        alert("I do not understand your message");
    }
}

function quizMe() {
    var score = 0;

    var a1 = prompt("What is the capital of Ohio?");
    if (a1 === "O") {
        score++;
    }
    
    var a2 = prompt("How many hours are in a minute?");
    if (a2 === "1/60") {
        score++;
    }

    var a3 = prompt("What question am I asking?");
    if (a3 === "What question am I asking?") {
        score++;
    }
    
    if (score === 3) {
        alert("You passed!");
    } else {
        alert("You failed!");
    }

    alert("You scored: " + score + "/3");
}