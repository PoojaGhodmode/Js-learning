console.log("Hold or Bet");

let count = 0;

const countCard = (card) => {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  let holdBet = count > 0 ? "Bet" : "Hold";

  return `${count} => ${holdBet}`;
};

countCard(2);
countCard(7);
countCard("A");
countCard(3);
countCard(7);
countCard("Q");
console.log(countCard(2));
//1 => Bet
