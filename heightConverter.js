const cmToFoot = (valueIncm) => {
  let valueInfoot;
  valueInfoot = valueIncm / 30.48;
  return valueInfoot;
};

const footToCm = (valueInfoot) => {
  let valueIncm;
  valueIncm = valueInfoot * 30.48;
  return valueIncm;
};

console.log('Height Converter');
console.log(cmToFoot(100));
console.log(footToCm(3.28));
