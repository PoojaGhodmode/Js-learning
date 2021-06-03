const bmiCalculator = (weight, height) => {
  let bmi;
  bmi = weight / (height * height);
  let status;
  if (bmi < 20.7) {
    status = "Underweight";
  } else if (bmi >= 20.7 && bmi < 26.4) {
    status = "Normal";
  } else if (bmi >= 26.4 && bmi < 27.8) {
    status = "Marginally Overweight";
  } else if (bmi >= 27.8 && bmi < 31.1) {
    status = "Overweight";
  } else {
    status = "Obses";
  }
  return  {status,bmi};
};

console.log("BMI Calculator");
let output = bmiCalculator(50, 1.55);
console.log(`${output.bmi} => ${output.status}`);
//20.811654526534856 => Normal
output = bmiCalculator(40, 1.55);
console.log(`${output.bmi} => ${output.status}`);
//16.649323621227886 => Underweight
output = bmiCalculator(70, 1.55);
console.log(`${output.bmi} => ${output.status}`);
//29.1363163371488 => Overweight
