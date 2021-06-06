"use strict";

// Selecting elements
const score0E1 = document.querySelector("#score--0");
const score1E1 = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0E1.textContent = 0;
score1E1.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // Swicth to next player
  }
});
