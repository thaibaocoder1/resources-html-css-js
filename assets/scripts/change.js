const blockEl = document.querySelector("#block");
const verticalPosition = document.querySelector("#position-y");
const horizontalPosition = document.querySelector("#position-x");
const blockSize = document.querySelector("#size");
const shapeSelector = document.querySelector("#shape-select");
const submitButton = document.querySelector("#ok-btn");
const rgbaR = document.querySelector("#rgba-r");
const rgbaG = document.querySelector("#rgba-g");
const rgbaB = document.querySelector("#rgba-b");
const rgbaA = document.querySelector("#rgba-a");
const rgbaContainer = document.querySelector(".rgba-container");
const rgbaInputs = rgbaContainer.querySelectorAll("input");
// Vertical position changer
verticalPosition.addEventListener("change", function () {
  blockEl.style.top = verticalPosition.value + "px";
});
// Horizontal position changer
horizontalPosition.addEventListener("change", function () {
  blockEl.style.left = horizontalPosition.value + "px";
});
// Size changer
blockSize.addEventListener("change", function () {
  blockEl.style.transform = `scale(${blockSize.value})`;
});
// Shape changer
submitButton.addEventListener("click", function () {
  let shapeOption = shapeSelector.value;
  if (parseInt(shapeOption) === 1) {
    blockEl.style.borderRadius = "0";
  } else {
    blockEl.style.borderRadius = "50%";
  }
});
// Background color changer
rgbaInputs.forEach((el) => {
  el.addEventListener("change", function () {
    blockEl.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
  });
});
