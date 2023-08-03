const modalBlock = document.querySelector(".modal");
const imgSmall = document.querySelectorAll(".gallery img");
const imgFull = document.querySelector(".full-img");
[...imgSmall].forEach((item) => {
  item.addEventListener("click", () => {
    modalBlock.classList.add("active");
    imgFull.classList.add("active");
    const originalQuantity = item.alt;
    imgFull.src = `./assets/images/popup-img/full/${originalQuantity}.jpg`;
  });
});
modalBlock.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modalBlock.classList.remove("active");
    imgFull.classList.remove("active");
  }
});
