const switchBtn = document.querySelector(".switch");
const switchPara = document.querySelector(".color");
switchBtn.addEventListener("click", () => {
  let color1 = getRandomNumbers();
  let color2 = getRandomNumbers();
  let color3 = getRandomNumbers();
  const colorString = `rgb(${color1}, ${color2}, ${color3})`;
  document.body.style.backgroundColor = colorString;
  switchPara.textContent = colorString;
});
function getRandomNumbers() {
  return Math.floor(Math.random() * 256);
}
