const colors = document.querySelector(".colors");
let colorsArray = Array.from(colors.children);
const addBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".submit-btn");
const outputBox = document.querySelector(".output-box");
let colorValue;
let counter = 3;

const createInput = (count) => {
  const input = document.createElement("input");
  input.setAttribute("type", "color");
  input.setAttribute("id", `${count}`);
  return input;
};

const updateArray = () => {
  colorsArray = Array.from(colors.children);
};

const getColors = () => {
  let colorValue = [];
  colorsArray.forEach((color) => {
    colorValue.push(color.value);
  });
  return colorValue;
};

const editOutputBox = (colorValue) => {
  let gradient = "linear-gradient(";
  for (let i = 0; i < colorValue.length; ++i) {
    gradient = gradient + colorValue[i];
    if (i != colorValue.length - 1) {
      gradient = gradient + ",";
    }
  }
  outputBox.style.background = gradient;
  console.log(outputBox.style.background);
};

addBtn.addEventListener("click", () => {
  const input = createInput(counter);
  ++counter;
  colors.appendChild(input);
  updateArray();
  //   console.log(colorsArray);
});

submitBtn.addEventListener("click", () => {
  colorValue = getColors();
  console.log(colorValue);
  editOutputBox(colorValue);
});
