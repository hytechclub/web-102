let currentQuestion = -1;
let totalScore = 0;
let questionText = document.querySelector("#question");
let answerInput = document.querySelector("#answer");
let feedbackElement = document.querySelector("#feedback");
let checkButton = document.querySelector(".b-form button");
let showingFeedback = false;

document.addEventListener("keydown", e => {
  if (event.key === "Enter") {
    event.preventDefault();

    if (showingFeedback) {
      nextQuestion();
    } else {
      check();
    }
  }
});

let questionsAndAnswers = [
  {
    q: `for (let i = 0; i < 144; i++) {
  alert("Around the world");
}`,
    a: 144,
    f: "The value of i starts at 0, then goes til 144, increasing by one each time, for a total of <b>144</b> times!"
  }, {
    q: `for (let i = -1; i < 0; i++) {
  alert("Starting below...");
}`,
    a: 1,
    f: "The value of i starts at -1, then goes til 0, increasing by one each time, for a total of <b>1</b> time."
  }, {
    q: `for (let i = 0; i > -5; i--) {
  alert("Down, down, down...");
}`,
    a: 5,
    f: "The value of i starts at 0, then goes til -5, decreasing by one each time, for a total of <b>5</b> times."
  }, {
    q: `for (let i = 0; i <= 3; i++) {
  alert("Inclusivity....");
}`,
    a: 4,
    f: "The value of i starts at 0, then goes til 3 (and includes 3), increasing by one each time, for a total of <b>4</b> times."
  }, {
    q: `for (let newThing = 0; newThing > 5; i++) {
  alert("Flipped");
}`,
    a: 0,
    f: "The value of newThing starts at 0, but 0 is not greater than 5, so the loop executes <b>0</b> times."
  }, {
    q: `for (let i = 0; i < 4; i++) {
  for (j = 0; j < 3; j++) {
    alert("Nesting...");
  }
}`,
    a: 12,
    f: "The outer loop executes 4 times, and each time it does that, the inner loop executes 3 times, for a total of <b>12</b> times."
  }, {
    q: `for (let i = 0; i+i < 9; i = i+2) {
  alert("Doubling up...");
}`,
    a: 3,
    f: "The value of i starts at 0, and goes up by two each time, until i is 6, at which time 6+6 is NOT less than 9, for a total of <b>3</b> times."
  }, {
    q: `for (let i = 0; i < 10; i++) {
  alert("But... what if....");
  i = i - .5;
}`,
    a: 20,
    f: "The value of i starts at 0, then goes til 10, but in the body of the loop, it is decreased by a half each time. Effectively, it goes up by .5 each time instead of 1, for a total of <b>20</b> times."
  }, {
    q: `for (let say = 'hi'; say.length <= 8; say = say+'ii') {
  alert(say);
}`,
    a: 4,
    f: "The value of say starts at 'hi', then increases in length by 2 until it reaches 'hiiiiiii', for a total of <b>4</b> times."
  }, {
    q: `for (let i = 0; i <= 0; i++) {
  alert("Try this");
  alert("Hm?")
}`,
    a: 2,
    f: "The value of i starts at 0, and the condition is true for the first time, when it calls the alert function a total of <b>2</b> times."
  }
]

function check() {
  let correct = answerInput.value == questionsAndAnswers[currentQuestion].a;
  if (correct) {
    totalScore++;
  }
  
  answerInput.value = "";
  answerInput.placeholder = "";
  answerInput.disabled = true;
  checkButton.disabled = true;
  showingFeedback = true;
  
  feedbackElement.innerHTML = `
<h3 class="eval">${correct ? "Correct :)" : "Incorrect :("}</h3>
<span>${questionsAndAnswers[currentQuestion].f}</span>
<button onclick="nextQuestion()">Next</button>
`;
}

function nextQuestion() {
  if (currentQuestion === questionsAndAnswers.length-1) {
    document.body.innerHTML = `
      <div class="container">
        <h1>Quiz Complete!</h1>
        <p>Final Score: ${totalScore}/${questionsAndAnswers.length}<p>
        <p>Refresh the page to try again.</p>
      </div>`;
  }

  currentQuestion++;
  answerInput.disabled = false;
  answerInput.focus();
  checkButton.disabled = false;
  showingFeedback = false;
  answerInput.placeholder = "How many times will alert run?";
  questionText.textContent = questionsAndAnswers[currentQuestion].q;
  hljs.highlightElement(questionText);
  feedbackElement.innerHTML = "";
}

nextQuestion();
