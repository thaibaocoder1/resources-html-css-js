const sections = document.querySelectorAll("section");
const transElement = document.querySelector(".trans");
const gradients = ["coral", "chartreuse", "chocolate", "cadetblue"];
const options = {
  threshold: 0.7,
};
let observer = new IntersectionObserver(navScroll, options);
function navScroll(entries) {
  entries.forEach((element) => {
    const className = element.target.className;
  });
}
[...sections].forEach((section) => {
  observer.observe(section);
});
