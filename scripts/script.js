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