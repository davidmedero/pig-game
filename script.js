"use strict";

// Selecting elements
const player0E1 = document.querySelector(".player--0");
const player1E1 = document.querySelector(".player--1");

const score0E1 = document.querySelector("#score--0");
const score1E1 = document.getElementById("score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Declare starting condition variables
let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0E1.textContent = 0;
  score1E1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0E1.classList.remove("player--winner");
  player1E1.classList.remove("player--winner");
  player0E1.classList.add("player--active");
  player1E1.classList.remove("player--active");
};
init();

const switchPlayer = () => {
  // Set current player's score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  // Reset all scores to 0
  currentScore = 0;
  // Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;
  // Switch color to indicate player's turn
  player0E1.classList.toggle("player--active");
  player1E1.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    // 3. Check if player doesn't roll 1
    if (dice !== 1) {
      // Add dice number to current score
      currentScore += dice;
      // Display it
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // Check if player rolls 1
    } else {
      switchPlayer();
    }
  }
});

// Add points and win game functionality
btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // Display it
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
  }
  // 2. Check if player's score is >= 100
  if (scores[activePlayer] >= 100) {
    playing = false;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
  } else {
    // Switch to the next player
    switchPlayer();
  }
  // Finish the game
});

// Start a new game and reset every feature
btnNew.addEventListener("click", init);

// scores[activePlayer] = 0;

// diceEl.classList.add("hidden");

// currentScore = 0;

// score0E1.textContent = 0;
// score1E1.textContent = 0;

// current0El.textContent = 0;
// current1El.textContent = 0;

// document
//   .querySelector(`.player--${activePlayer}`)
//   .classList.remove("player--winner");

// document
//   .querySelector(`.player--${activePlayer}`)
//   .classList.remove("player--active");

// activePlayer = 0;

// document
//   .querySelector(`.player--${activePlayer}`)
//   .classList.add("player--active");

// playing = true;
