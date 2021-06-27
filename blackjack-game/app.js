const messageBox = document.querySelector(".message");
const sumBox = document.querySelector(".sum span");
const cards = document.querySelector(".cards span");
const newCardbtn = document.querySelector(".new-card");
const player = document.querySelector(".player-chips");
let name = prompt("Enter your name");

const playerDetails = {
  name: name,
  chips: 150,
  decreaseChips() {
    this.chips -= 30;
  },
  increaseChips() {
    this.chips += 50;
  },
  showDetails() {
    player.textContent = `${this.name}: $${this.chips}`;
  },
};

let cardSArray = [];
let isGameOver;

const drawCard = () => {
  cardSArray.push(Math.ceil(Math.random() * 12));
};

playerDetails.showDetails();

const Game = () => {
  let sumCard = 0;
  cards.textContent = "";
  cardSArray.forEach((card) => {
    sumCard += card;
    console.log(sumCard);
    cards.textContent += `${card} `;
  });
  // cards.textContent = `${firstCard} ${secondCard}`;

  let message = "";
  if (sumCard === 21) {
    message = "You win";
    isGameOver = true;
    playerDetails.increaseChips();
  } else if (sumCard < 21) {
    message = "Do you want to draw new card?";
    isGameOver = false;
  } else {
    message = "You Lose";
    isGameOver = true;
    playerDetails.decreaseChips();
  }
  console.log(message);
  messageBox.textContent = message;
  sumBox.textContent = sumCard;
  playerDetails.showDetails();
};

const startGame = () => {
  if (playerDetails.chips >= 30) {
    cardSArray = [];
    newCardbtn.classList.remove("disabled");
    drawCard();
    drawCard();
    Game();
  } else if (playerDetails.chips < 30) {
    document.querySelector(".start-game").classList.add("disabled");
    messageBox.textContent = "Its time for a break!!!";
  }
};

const drawNewCard = () => {
  drawCard();
  Game();
  if (isGameOver) {
    newCardbtn.classList.add("disabled");
  }
};
