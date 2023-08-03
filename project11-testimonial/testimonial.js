const slideList = document.querySelector(".slider").children;
const indicatorImgs = document.querySelector(".indicator").children;
[...indicatorImgs].forEach((img) => {
  img.addEventListener("click", handleChangeIndicator);
});
function handleChangeIndicator(e) {
  [...indicatorImgs].forEach((img) => img.classList.remove("active"));
  e.target.classList.add("active");
  const id = e.target.dataset.id;
  [...slideList].forEach((slide) => {
    slide.classList.remove("active");
    if (slide.getAttribute("data-slide") === id) {
      slide.classList.add("active");
    }
  });
}
