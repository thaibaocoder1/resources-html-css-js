window.addEventListener("load", function () {
  const progressDone = document.querySelector(".progress-done");
  setTimeout(() => {
    progressDone.style.width = progressDone.dataset.done + "%";
    progressDone.style.opacity = "1";
  }, 3000);
});
