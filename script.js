"use strict";

let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "Not a Number";
  } else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".message").style.fontSize = "30px";
    document.querySelector(".message").style.transition = "1s";
    document.querySelector(".message").textContent = "You Win😎";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.backgroundColor = "#1d8953";
    document.querySelector(".number").style.border = "5px solid #fefefe";
    // document.querySelector('.number').style.borderRadius =
    //   '15px 15px 15px 15px';
    document.querySelector(".number").style.transition = "1s";
    document.querySelector(".number").style.color = "#fefefe";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too High" : "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("body").style.backgroundColor = "#C21807";
      document.querySelector(".number").textContent = "LOSER";
      document.querySelector(".number").style.color = "#000000";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").style.transition = "1s";
      document.querySelector(".number").style.backgroundColor = "#fefefe";
      document.querySelector(".number").style.border = "5px solid #000000";
      document.querySelector(".message").textContent = "You Lost😛";
      document.querySelector(".message").style.fontSize = "25px";
      document.querySelector(".message").style.transition = "1s";
      document.querySelector(".score").textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('body').style.backgroundColor = '#C21807';
  //     document.querySelector('.number').textContent = 'LOSER';
  //     document.querySelector('.number').style.color = '#000000';
  //     document.querySelector('.number').style.width = '40rem';
  //     document.querySelector('.number').style.transition = '1s';
  //     document.querySelector('.number').style.backgroundColor = '#fefefe';
  //     document.querySelector('.number').style.border = '5px solid #000000';
  //     document.querySelector('.message').textContent = 'You Lost😛';
  //     document.querySelector('.message').style.fontSize = '30px';
  //     document.querySelector('.message').style.transition = '1s';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('body').style.backgroundColor = '#C21807';
  //     document.querySelector('.number').textContent = 'LOSER';
  //     document.querySelector('.number').style.color = '#000000';
  //     document.querySelector('.number').style.width = '40rem';
  //     document.querySelector('.number').style.transition = '1s';
  //     document.querySelector('.number').style.backgroundColor = '#fefefe';
  //     document.querySelector('.number').style.border = '5px solid #000000';
  //     document.querySelector('.message').style.transition = '1s';
  //     document.querySelector('.message').style.fontSize = '30px';
  //     document.querySelector('.message').textContent = 'You Lost😛';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".message").style.fontSize = "20px";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.border = "none";
  document.querySelector(".number").textContent = "?";
  // document.querySelector('.number').textContent = secretNumber;
  document.querySelector(".number").style.backgroundColor = "#eee";
  document.querySelector(".number").style.color = "#333";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#006894";
  document.querySelector(".guess").value = "";
});
