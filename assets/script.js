var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("main-quiz");
var startBut = document.getElementById("start-button");
var infoEl = document.getElementById("start-info");
var endEl = document.getElementById("end-info");
var highscoreEl = document.getElementById("highscore");
const quizData = [
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
function displayMessage() {}

function countdown() {
  var timeLeft = 30;
  quizEl.style.display = "block";
  infoEl.style.display = "none";
  highscoreEl.style.display = "none";
  endEl.style.display = "none";
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);

      timerEl = "";
      endEl.style.display = "block";
      quizEl.style.display = "none";
    }
  }, 1000);
}

function startgame() {
  quizEl.style.display = "none";
  infoEl.style.display = "block";
  endEl.style.display = "none";
  highscoreEl.style.display = "none";
}
function submitInitiasl() {
  endEl.style.display = "none";
  highscoreEl.style.display = "block";
}

startgame();
