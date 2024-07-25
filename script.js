'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let heighScore = 0;

const displayMessage = function (messgae) {
  document.querySelector('.message').textContent = messgae;
};

const displayScore = function (num) {
  document.querySelector('.score').textContent = num;
};

const bodyBackGround = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const boxWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if there is no input

  if (!guess) {
    displayMessage('⛔ No Number !!!');
  }
  // if the user win
  else if (guess === secretNumber) {
    displayMessage('🏆 Correct Number');
    bodyBackGround('#60b347');
    boxWidth('30rem');

    if (score > heighScore) {
      heighScore = score;
      document.querySelector('.highscore').textContent = heighScore;
    }
  }

  //if the guess is different
  else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too low');
    score--;
    displayScore(score);
  } else {
    displayMessage('💥 You lost the game !!');
  }
});

//restart the game

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  bodyBackGround('#222');
  boxWidth('15rem');
});
