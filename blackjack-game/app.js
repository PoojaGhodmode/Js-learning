const messageBox = document.querySelector(".message");
const sumBox = document.querySelector(".sum span");
const cards = document.querySelector(".cards span");
const newCardbtn = document.querySelector(".new-card")
let firstCard;
let secondCard;
let cardSArray = [firstCard, secondCard]
let sumCard;
let isGameOver;

const drawCard = () => {
  return Math.ceil(Math.random() * 12);
};

const sum = (first, second) => {
  return first + second;
};

const Game = (sumCard) => {
  //   console.log(sumCard);
  let message = "";
  if (sumCard === 21) {
    message = "You win";
    isGameOver = true;
  } else if (sumCard < 21) {
    message = "Do you want to draw new card?";
    isGameOver = false;
  } else {
    message = "You Lose";
    isGameOver = true;
  }
  console.log(message);
  messageBox.textContent = message;
  sumBox.textContent = sumCard;
};

const startGame = () => {
  newCardbtn.classList.remove('disabled')
  firstCard = drawCard();
  secondCard = drawCard();
  sumCard = firstCard + secondCard;
  cards.textContent = `${firstCard} ${secondCard}`;
  Game(sumCard);
};

const drawNewCard = () => {
  let newCard = drawCard();
  sumCard += newCard;
  cards.textContent += ` ${newCard}`;
  sumBox.textContent = sumCard;
  console.log(sumCard);
  Game(sumCard);
  if (isGameOver){
    // messageBox.textContent += "...want to start new game";
    newCardbtn.classList.add('disabled')
  }
};
