const bmiCalculator = (weight, height) => {
    let bmi;
    bmi = weight / (height * height);
    return bmi;
  };
  
  console.log('BMI Calculator');
  console.log(bmiCalculator(50, 1.55)); 
  //20.811654526534856
  