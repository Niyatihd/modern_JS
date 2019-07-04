/*
Game Function:
- Player must guess a number between 1 and 10
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if the player looses
- Let player choose to play again
*/

// Game Values
let min = 1,
  max = 10,
  winningNum = 2,
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

function gameOver(won, msg) {
  //set color
  let color = won ? "green" : "red";

  //disable input
  guessInput.disabled = true;

  //change border color to green
  guessInput.style.borderColor = color;

  //Set message
  setMessage(msg, color);
}
