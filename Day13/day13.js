// simple field

const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("Lily", 30, "Female"));

//Declarative function

const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
bicycle.setGear(3);
console.log(bicycle.gear); ///3

// class function to define a constructor function

//old way
// var SpaceShuttle = function (targetPlanet) {
//     this.targetPlanet = targetPlanet;
//   };

//   var zeus = new SpaceShuttle("Jupiter");
//   console.log(zeus.targetPlanet); // Jupiter

// new way
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

let zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

class Vegetable {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

let carrot = new Vegetable("carrot", "Orange");
console.log(carrot.color); // Orange

// getter and setter
function makeClass() {
  class Theromostat {
    constructor(temp) {
      this._temp = (temp - 32) * (5 / 9);
    }
    get temparature() {
      return this._temp;
    }
    set temparature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Theromostat;
}

const Theromostat = makeClass();
const t1 = new Theromostat(76);
let temp = t1.temparature;
console.log(temp); //24.444444444444446
t1.temparature = 100;
temp = t1.temparature;
console.log(temp); //100

// difference between import and require

// console.log(checkEven(5));//day13.js:74 Uncaught ReferenceError: checkEven is not defined

import { checkEven } from "./checkEven.js";
// import checkEven from "./checkEven";
console.log(checkEven(5)); // false
