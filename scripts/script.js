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





// -----------------------------------------------------------------------------

// Event listeners
beginBtn.addEventListener("click", function(event) {
  timer();
  displayQA();
  beginBtn.style.display = "none";
  gameCard.style.display = "block";
});