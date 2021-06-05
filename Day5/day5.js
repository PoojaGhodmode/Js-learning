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

console.log("Get the name of month");
const month = new Date().getMonth();
console.log(month);
const monthLookup = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

console.log(`Month => ${monthLookup[month + 1]}`);
//Month => June
