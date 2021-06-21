// difference between var and let

//let doesn't allow to declare variable twice

var name;

var name = "Lily";

//no error

// let animal = "cat";

// let animal = "dog";

//Uncaught SyntaxError: Identifier 'animal' has already been declared

//scope

const checkVarScope = () => {
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log(`Block scope : ${i}`);
  }
  console.log(`Function scope : ${i}`);
};

const checkLetScope = () => {
  let i = "function scope";
  if (true) {
    let i = "block scope"; // declare inside if statement otherwise it would have been block scope
    console.log(`Block scope : ${i}`);
  }
  console.log(`Function scope : ${i}`);
};

checkVarScope();
//Block scope : block scope
//Function scope : block scope
checkLetScope();
//Block scope : block scope
//Function scope : function scope

// const => readonly , can't reassign

const catName = "mino"; // use all caps for constant CATNAME

// catName = "lily"; // Uncaught TypeError: Assignment to constant variable.

// const with array

const arr = [1, 2, 3, 4];

// arr = [1,2,3,4] // error

arr[1] = 5; //mutation allowed

console.log(arr); //[1, 5, 3, 4]

//const with object

const MATH_CONSTANT = {
  PI: 3.14,
};

MATH_CONSTANT["PI"] = 2;

console.log(MATH_CONSTANT["PI"]); // 2 🙅‍♀️

// for this => Object.freeze()

MATH_CONSTANT["PI"] = 3.14;
Object.freeze(MATH_CONSTANT);

MATH_CONSTANT["PI"] = 2;
console.log(MATH_CONSTANT["PI"]); // 3.14

// anonymous function and arrow functions
const getDate = () => new Date();

console.log(getDate()); //Mon Jun 21 2021 19:40:20 GMT+0530 (India Standard Time)

const conCat = (arr1, arr2) => arr1.concat(arr2);

console.log(conCat([1, 2, 3], [4, 5])); // [1, 2, 3, 4, 5]

// higher order functions

const myArr = [1, -4, 5, 7, -2, 5, 3, 7, 0, 11, -45];

const squareList = (arr) => {
  const positiveArr = arr.filter((num) => num > 0).map((x) => x * x);
  console.log(positiveArr);
};

squareList(myArr); //[1, 25, 49, 25, 9, 49, 121]

// write higher order arrow function

const increment = (num = 0, value = 1) => num + value;

console.log(increment(4)); // 5
console.log(increment(5, 7)); // 12

//rest operator ...

const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
};

console.log(sum(1, 2, 3)); // 6

const updateSum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
};

console.log(updateSum(1, 2, 3, 5, 6, 7, 3)); // 27

// spread operator ... expands / spreads in array

const month = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUNE", "JULY"];

let arr2;

arr2 = month;
arr2[0] = "😕";

console.log(`month: ${month}`);
console.log(`array: ${arr2}`);

// change the value as it was referenced

month[0] = "JAN";

arr2 = [...month]; // create a copy 

arr2[0] = "😎";

console.log(`month: ${month}`);
console.log(`array: ${arr2}`);
