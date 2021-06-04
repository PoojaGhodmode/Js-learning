console.log("Count of days");
let month = 2;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const year = 1900;
let countOfDays;
const count = (year) => {
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    countOfDays = 29;
  } else {
    countOfDays = 28;
  }
};
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    countOfDays = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
  case "april":
  case "june":
  case "september":
  case "november":
    countOfDays = 30;
    break;
  case 2:
  case "february":
    count(year);
    break;
}
if (month >= 1 && month <= 12) {
  month = months[month - 1];
}
console.log(`In ${month}, ${year}, days => ${countOfDays}`);
//In February, 1900, days => 28


