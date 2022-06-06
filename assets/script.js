var timerEl = document.getElementById("countdown");
var quizEl = document.getElementById("main-quiz");
var startBut = document.getElementById("start-button");
var infoEl = document.getElementById("start-info");

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

function countdown() {
  var timeLeft = 30;

  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft;
    if (timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
      timerEl = "";
    }
  }, 1000);
}

function startgame() {
  quizEl.style.display = "none";
  //   startBut.addEventListener("click", countdown());
}

startgame();
