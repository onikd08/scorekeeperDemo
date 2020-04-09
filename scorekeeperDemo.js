var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var resetButton = document.querySelector("#resetButton");
var p1Score = 0;
var p2Score = 0;
var p1ScoreDisplay = document.querySelector("#p1Display");
var p2ScoreDisplay = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
var defaultWinningScore = Number(winningScoreDisplay.defaultValue);
var finalWinnigScore = defaultWinningScore;
var gameOver = false;
var winnerName = document.querySelector("#winnerName");

p1Button.addEventListener("click",function() {
  if (gameOver==false){
    p1Score += 1;
    p1ScoreDisplay.textContent = p1Score;
    if (p1Score===finalWinnigScore) {
      p1ScoreDisplay.classList.add("winner");
      gameOver = true;
      p1Button.classList.add("winner");
      winnerName.textContent = "Player 1";
    }
  }
});

p2Button.addEventListener("click",function() {
  if (gameOver==false){
    p2Score += 1;
    p2ScoreDisplay.textContent = p2Score;
    if (p2Score===finalWinnigScore) {
      p2ScoreDisplay.classList.add("winner");
      gameOver = true;
      p2Button.classList.add("winner");
      winnerName.textContent = "Player 2";
    }
  }
});

resetButton.addEventListener("click",function() {
  reset();
});

function submit() {
  var currentWinningScore = Number(winningScoreDisplay.value);
  if (currentWinningScore<=0) {
    finalWinnigScore = defaultWinningScore;
    winningScoreDisplay.value = finalWinnigScore;

  }else {
    finalWinnigScore = currentWinningScore;
  }

  reset();
};

function reset() {

  p1Score = 0;
  p2Score = 0;
  p1ScoreDisplay.textContent = p1Score;
  p2ScoreDisplay.textContent = p2Score;
  gameOver = false;
  p1ScoreDisplay.classList.remove("winner");
  p2ScoreDisplay.classList.remove("winner");
  p1Button.classList.remove("winner");
  p2Button.classList.remove("winner");
  winnerName.textContent = "";
};
