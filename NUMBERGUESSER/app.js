/*
Game Function:
- Player must guess a number between 1 and 10
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if the player looses
- Let player choose to play again
*/

// Game Values
let min = 11,
  max = 20,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign min and max values
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener("mousedown", function(e) {
  //Reload the page
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//Listen for guess
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  //Validate guess
  if (isNaN(guess) || guess < 1 || guess > 10) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  }

  //Check if won
  if (guess === winningNum) {
    // Game Over - won
    gameOver(true, `${guess} is correct. You Winn!!!`);
  } else {
    // guess is wrong
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game Over - lose
      gameOver(
        false,
        `Game Over! You lost. The correct number is ${winningNum}`
      );
    } else {
      //clear input
      guessInput.value = "";

      //Set message
      setMessage(
        `Incorrect guess!! You have ${guessesLeft} guesses left`,
        "red"
      );
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Get random number
function getRandomNumber(min, max) {
  let result = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(result);
  return result;
}

//Game over
function gameOver(won, msg) {
  //set color
  let color = won ? "green" : "red";

  //disable input
  guessInput.disabled = true;

  //change border color to green
  guessInput.style.borderColor = color;

  //Set message
  setMessage(msg, color);

  //Change submit button value to Play again and add class play-again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}
