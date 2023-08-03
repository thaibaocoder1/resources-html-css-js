window.addEventListener("load", function () {
  const labelList = document.querySelectorAll(".form-label");
  [...labelList].forEach((label) => {
    label.innerHTML = label.innerText
      .split("")
      .map(
        (letter, index) =>
          `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
      )
      .join("");
  });
});
