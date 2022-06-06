var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("main-quiz");
var startBut = document.getElementById("start-button");
var infoEl = document.getElementById("start-info");
var endEl = document.getElementById("end-info");
var highscoreEl = document.getElementById("highscore");
var initialInput = document.getElementById("initials");

var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var quizData = [
  {
    question: "1+1  = ",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correct: "c",
  },
  {
    question: "1+1  = ",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correct: "c",
  },
  {
    question: "1+2  = ",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correct: "d",
  },
  {
    question: "0+2  = ",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correct: "c",
  },
  {
    question: "0+1  = ",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    correct: "b",
  },
];

let currentQuiz = 0;

function loadQuiz() {
  var currentQuizData = quizData[currentQuiz];
  if (currentQuiz < quizData.length) {
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    currentQuiz++;
  } else {
    submitInitials();
    clearInterval(timeInterval);
  }
}

function displayMessage() {}

function countdown() {
  var timeLeft = 30;
  infoEl.style.display = "none";
  quizEl.style.display = "block";
  endEl.style.display = "none";
  initialInput.style.display = "none";
  highscoreEl.style.display = "none";
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);

      timerEl = "";
      infoEl.style.display = "none";
      quizEl.style.display = "none";
      endEl.style.display = "block";
      initialInput.style.display = "none";
      highscoreEl.style.display = "none";
    }
  }, 1000);
}

function startgame() {
  infoEl.style.display = "block";
  quizEl.style.display = "none";
  endEl.style.display = "none";
  initialInput.style.display = "none";
  highscoreEl.style.display = "none";

  loadQuiz();
}
function submitInitials() {
  infoEl.style.display = "none";
  quizEl.style.display = "none";
  endEl.style.display = "none";
  initialInput.style.display = "none";
  highscoreEl.style.display = "block";
  let currentQuiz = 0;
  console.log(initialInput);
}

startgame();
