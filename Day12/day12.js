// destructing object
const days = { 1: "Monday", 2: "Tuesday", 3: "Wednesday" };

const { 2: a, 1: b, 3: c } = days;

console.log(a, b, c);
//Tuesday Monday Wednesday

//destructing object with nested objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 72.4, max: 82 },
};

const {
  tomorrow: { max: maxoftomorrow },
} = LOCAL_FORECAST;

console.log(maxoftomorrow);

//destructing array

let [x, y] = [1, 2, 3, 4, 5];
console.log(x); //1
console.log(y); // 2
// interchanging
[x, y] = [y, x];
console.log(x); //2
console.log(y); // 1

// destructing assignement with rest operator

const source = [1, 2, 3, 4, 5, 6];

const rmFirstTwo = (list) => {
  const [, , ...arr] = list;
  console.log(arr);
};

rmFirstTwo(source); // [3, 4, 5, 6]

// destructing assignment to pass an object as a function parameter
const months = { one: "January", Two: "February", third: "March" };
const getFirstThird = ({ one, third }) => {
  console.log(one, third);
};

getFirstThird(months); //January March

// string literals
const results = {
  success: ["max-length", "no-amd", "prefer-arrow-function"],
  failure: ["no-var", "var-on-top", "line-break"],
  skipped: ["id-blacklist", "no-dup-keys"],
};

const makeFunction = (arr) => {
  const displayResult = [];
  for (let i = 0; i < arr.length; ++i) {
    displayResult.push(`<li class = "text-warning>${arr[i]}</li>`);
  }
  return displayResult;
};

console.log(makeFunction(results.failure));
