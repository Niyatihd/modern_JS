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
