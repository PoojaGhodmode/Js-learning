const messageBox = document.querySelector(".message");
const sumBox = document.querySelector(".sum span");
let firstCard;
let secondCard;

let sumCard;
let isGameOver;

const drawCard = () => {
  return Math.ceil(Math.random() * 12);
};

const sum = (first, second) => {
  return first + second;
};

firstCard = drawCard();
secondCard = drawCard();
sumCard = sum(firstCard, secondCard);
const Game = (sumCard) => {
  //   console.log(sumCard);
  let message = "";
  if (sumCard === 21) {
    message = "You win";
    messageBox.textContent = message;
    sumBox.textContent = sumCard;
    console.log(message);
    return true;
  } else if (sumCard < 21) {
    message = "draw new card";
    messageBox.textContent = message;
    sumBox.textContent = sumCard;
    console.log(message);
    return false;
  } else {
    message = "You Lose";
    messageBox.textContent = message;
    sumBox.textContent = sumCard;
    console.log(message);
    console.log(sumCard);
    return true;
  }
};

const startGame = () => {
  firstCard = drawCard();
  secondCard = drawCard();
  sumCard = sum(firstCard, secondCard);
  //   console.log(sumCard);
  isGameOver = Game(sumCard);
  while (!isGameOver) {
    firstCard = sumCard;
    secondCard = drawCard();
    sumCard = sum(firstCard, secondCard);
    isGameOver = Game(sumCard);
  }
};
