let myArray = [];
let i = 1;
while (i <= 10) {
  myArray.push(i);
  i++;
}
console.log(`While loop: ${myArray}`);
//While loop: 1,2,3,4,5,6,7,8,9,10

myArray = [];
for (i = 0; i < 10; ++i) {
  myArray.push(i);
}
console.log(`For loop: ${myArray}`);
//For loop: 0,1,2,3,4,5,6,7,8,9

console.log("Odd numbers");
myArray = [];
for (i = 1; i < 50; i = i + 2) {
  myArray.push(i);
}
console.log(`Odd numbers using For loop  up to 50: ${myArray}`);
//Odd numbers using For loop  up to 50: 1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49

console.log("Decrement number using for loop");
myArray = [];
for (i = 50; i > 0; i = i - 2) {
  myArray.push(i);
}
console.log(`Decrement numbers by 2 using For loop from 50: ${myArray}`);
//Decrement numbers by 2 using For loop from 50: 50,48,46,44,42,40,38,36,34,32,30,28,26,24,22,20,18,16,14,12,10,8,6,4,2

myArray = [1, 2, 3, 4, 5, 6];
let sum = 0;
console.log("Element of myArray:");
for (i = 0; i < myArray.length; ++i) {
  console.log(myArray[i]);
  sum += myArray[i];
}

console.log(`sum of number: ${sum}`);
//sum of number: 21

console.log("Nested array");
myArray = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
];
let product = 1;
for (i = 0; i < myArray.length; ++i) {
  for (let j = 0; j < myArray[i].length; ++j) {
    product *= myArray[i][j];
  }
}
console.log(`myArray is ${myArray} and Product of all number is ${product}`);
//myArray is 1,2,2,3,3,4,4,5,5,6 and Product of all number is 86400
