console.log("Shopping List");
let myItems = [
  ["banana", 3],
  ["juice", 2],
  ["milk", 2],
];

const addItem = (items) => {
  myItems.push(items);
  console.log(`After adding item: ${myItems}.`);
};

const removeLastItem = () => {
  myItems.pop();
  console.log(`After removing last item: ${myItems}.`);
};

const getnthElement = (n = 1) => {
  return myItems[n - 1];
};

addItem(["chocolate", 3]);
removeLastItem();
const n = 2;
item = getnthElement(n);
console.log(`${n}th item in list is ${item[0]}.`);
