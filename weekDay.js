console.log("Day of week");

day = new Date().getDay();
let weekday;
switch (day) {
  case 1:
    weekday = "Today is Monday";
    break;
  case 2:
  case 3:
  case 4:
    weekday = "It's weekday";
    break;
  case 5:
    weekday = "Tommorrow is weekend";
    break;
  case 6:
  case 7:
    weekday = "It's weekend";
}
console.log(weekday);