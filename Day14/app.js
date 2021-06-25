const countContainer = document.querySelector("#count-container");
const incrementBtn = document.querySelector(".increment-btn");
const saveBtn = document.querySelector(".save-btn");
let count = 0;

incrementBtn.addEventListener("click", () => {
  count += 1;
  countContainer.textContent = count;
});

saveBtn.addEventListener("click", () => {
  const previousEntry = document.querySelector(".enteries-container");
  previousEntry.textContent += ` ${count} - `;
  count = 0;
  countContainer.textContent = count;
});
