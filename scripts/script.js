var beginBtn = document.querySelector("#beginBtn");

var timerDisplay = document.querySelector(".timer");

var timeLeft = 15;

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





// -----------------------------------------------------------------------------

// Event listeners
beginBtn.addEventListener("click", function(event) {
  timer();
  displayQA();
  beginBtn.style.display = "none";
  gameCard.style.display = "block";
});