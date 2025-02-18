"use strict";

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

function rollDice() {
  let randomDice1 = `dice${randomNumber1}.png`;
  let randomDice2 = `dice${randomNumber2}.png`;
  document
    .querySelector(".img1")
    .setAttribute("src", "./images/" + randomDice1);
  document
    .querySelector(".img2")
    .setAttribute("src", "./images/" + randomDice2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🎉Player 1 Wins!";
    document.querySelector("h1").classList.add("small");
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!🎉";
    document.querySelector("h1").classList.add("small");
  } else {
    document.querySelector("h1").textContent = "Draw!🙌";
    document.querySelector("h1").classList.add("small");
  }
}

window.onload = function () {
  if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
  }
};
