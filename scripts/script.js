// Global variables, questions are stored in questions.js
var beginBtn = document.querySelector("#beginBtn");
var leaderBtn = document.querySelector("#leaderBtn")
var timerDisplay = document.querySelector(".timer");
var gameCard = document.querySelector("#gameCard");
var question = document.querySelector("#question");
var mcOne = document.querySelector("#mcOne");
var mcTwo = document.querySelector("#mcTwo");
var mcThree = document.querySelector("#mcThree");
var mcFour = document.querySelector("#mcFour");
var answer = document.querySelector("#answer");
var feedback = document.querySelector("#feedback");
var card = document.querySelector("#mc");
var input = document.querySelector("#inputContainer");
var scoreCard = document.querySelector("#scoreCard");
var scoreBtn = document.querySelector("#scoreBtn");  // might delete this
var initialsBox = document.querySelector("#initialsBox");
var submitBtn = document.querySelector("#submitBtn");
var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");


var timeLeft = 15;
var q = 0;
var s = 0;
var score = 0;
var scoreList = [];

getScore();
// -----------------------------------------------------------------------------

// Timer f(x)
function timer() {
    var timeInterval = setInterval(function() {
      timeLeft--;
      timerDisplay.textContent = "TIMER: " + timeLeft;
      
      if (timeLeft === 0 || q === questionBank.length) {
        timerDisplay.textContent = "!! Times Up !!";
        clearInterval(timeInterval);
        gameOver();
      }
    }, 1000);
  };
  // -----------------------------------------------------------------------------
  
// Starting the Game f(x)
// Do I need this if so where here or below displayQA f(x)
//function startGame(){};
// -----------------------------------------------------------------------------

// Display questions & answers from questionBank
function displayQA() {
  if(q < questionBank.length) {
    question.textContent = questionBank[q].question;
    mcOne.textContent = questionBank[q].selection[0];
    mcTwo.textContent = questionBank[q].selection[1];
    mcThree.textContent = questionBank[q].selection[2];
    mcFour.textContent = questionBank[q].selection[3];
  } else {
    gameOver();
  }
};
// -----------------------------------------------------------------------------

// Showing right or wrong f(x)
function compareAnswer (event) {
  console.log(event);
  if(event === questionBank[q].answer) {
    score += 10;
      console.log("You are correct!");
    feedback.textContent = ("You are correct!");
      console.log(score);
  } else {
    timeLeft -= 10;
      console.log("You are Wrong!");
    feedback.textContent = ("You are Wrong!");
  }
  q++;
  displayQA();
};
// -----------------------------------------------------------------------------

function getScore() {
  var storedScore = JSON.parse(localStorage.getItem("highScore"));
  if(storedScore !== null) {
    scoreList = storedScore;
  }
};
// -----------------------------------------------------------------------------

function saveScore() {
  localStorage.setItem("highScore", JSON.stringify(scoreList));
};
// -----------------------------------------------------------------------------

// Game over f(x)
function gameOver() {
  scoreBtn.innerHTML = (score);
  scoreBtn.style.display = "inline-block";
  //input = "inline-block";
  //scoreCard = "inline-block";
  leaderBoard();
};
// -----------------------------------------------------------------------------

// Keeping track of top 4 leaders w/ local storage f(x)
function leaderBoard() {
  scoreList.sort((a, b) => {
    return b.score - a.score;
  });
  //only render the top 4 scores.
  topFour = scoreList.slice(0, 4);

  if(s < topFour.length) {
    lbOne.textContent = topFour[0].player + " - " + topFour[0].score;
    lbTwo.textContent = topFour[1].player + " - " + topFour[1].score;
    lbThree.textContent = topFour[2].player + " - " + topFour[2].score;
    lbFour.textContent = topFour[3].player + " - " + topFour[3].score;
  }
  //console.log(topFour[0].player);
  //console.log(topFour[0].score);
};
// -----------------------------------------------------------------------------

// Go back f(x)
//function goBack() {};
// -----------------------------------------------------------------------------

// Reset scores f(x)
//function resetHighScores () {};
// -----------------------------------------------------------------------------

// Scoring f(x)
//function score() {};
// -----------------------------------------------------------------------------

// Hides start screen and displays question screen
//function hiddenShow() {};
// -----------------------------------------------------------------------------

// Event listeners
beginBtn.addEventListener("click", function(event) {
  timer();
  displayQA();
  beginBtn.style.display = "none";
  gameCard.style.display = "block";
});

card.addEventListener("click", function(event) {
  var event = event.target;
  compareAnswer(event.textContent.trim());
});

submitBtn.addEventListener("click", function(event) {
  //console.log("submitBtnClick")
  event.preventDefault();
  //scoreCard.style.display = "none";  //not sure this is right

  var playerInitials = initialsBox.value.trim();
  var newScore = {
    player: playerInitials,
    score: score
  };
  console.log(newScore);
  scoreList.push(newScore);
  saveScore();
});

// Event listener for go back button ??
backBtn.addEventListener("click", function(event) {
  timer();
  displayQA();
  beginBtn.style.display = "inline-block";
  gameCard.style.display = "none";
  scoreCard.style.display = "none"
});

// Event listener for clear scores button ??
clearBtn.addEventListener("click", function(event) {
  scoreList = [];
  saveScore();
  leaderBoard();
});