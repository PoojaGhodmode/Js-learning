//do-while loop

let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let i = 0;
console.log("while loop output");
while (i > 5) {
  console.log(myArray[i]);
  i++;
}
console.log("do while loop output");

do {
  console.log(myArray[i]);
  i++;
} while (i > 5);

//profile lookup

let profile = [
  {
    firstname: "steve",
    lastname: "holmes",
    phone_no: "1234509876",
    likes: ["books", "cricket"],
  },
  {
    firstname: "David",
    lastname: "Smith",
    phone_no: "1254309876",
    likes: ["football", "Drawing"],
  },
  {
    firstname: "Cristine",
    lastname: "Rotenburg",
    phone_no: "3214509876",
    likes: ["Holo", "Tea"],
  },
  {
    firstname: "Mia",
    lastname: "Oliver",
    phone_no: "1234556784",
    likes: ["Cloth", "Sketing"],
  },
];

const profileLookup = (firstname, prop) => {
  for (let i = 0; i < profile.length; ++i) {
    if (profile[i].firstname === firstname) {
      return profile[i][prop] || "No such Property";
    }
  }
  return "Profile not exist";
};

console.log(profileLookup("Mia", "likes"));
//["Cloth", "Sketing"]

console.log(profileLookup("Lisa", "likes"));
//Profile not exist
console.log(profileLookup("Mia", "Address"));
//No such Property

//Random function

//generating random Fraction number
console.log(Math.random());
//generating random whole number
console.log(Math.floor(Math.random() * 5)); // 0 to 4
console.log(Math.ceil(Math.random() * 5)); // 1 to 5

//generating random number within range

const randomNumber = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};

console.log(randomNumber(4, 100));
console.log(randomNumber(1, 5));
console.log(randomNumber(100, 1000));
console.log(randomNumber(50, 103));

//ParseInt function

let myNum1 = "56";
let myNum2 = 56;

console.log(myNum1 + myNum2); //5656
console.log(parseInt(myNum1) + myNum2); // 112
console.log(parseInt(myNum1) + parseInt(myNum2)); // 112

//ParseInt with redix/base
let myNum3 = "000111";
let myNum4 = "ffff";
console.log(parseInt(myNum3, 2)); // 7
console.log(parseInt(myNum4, 16)); // 65535

//ternary operator condition ? true : false

myNum1 = myNum2 == myNum1 ? true : false;
console.log(myNum1); // true

//nested ternary operator

const checkSign = (num) => {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
};

console.log(checkSign(50)); //Positive
console.log(checkSign(-50)); //Negative
console.log(checkSign(0)); //Zero
