const mouseCursor = document.querySelector(".cursor");
const navLinks = document.querySelectorAll(".nav-links li");
window.addEventListener("mousemove", handleMoveCursor);
function handleMoveCursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}
[...navLinks].forEach((item) => {
  item.addEventListener("mouseout", function () {
    mouseCursor.classList.remove("link-grow");
    item.classList.remove("hovered-link");
  });
  item.addEventListener("mouseover", function () {
    mouseCursor.classList.add("link-grow");
    item.classList.add("hovered-link");
  });
});
