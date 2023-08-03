window.addEventListener("load", function () {
  const list = document.querySelector(".list");
  const images = Array.from(list.children);
  const nextBtn = document.querySelector(".btn-right");
  const prevBtn = document.querySelector(".btn-left");
  const imgWidth = images[0].getBoundingClientRect().width;
  function setImgPosition(img, index) {
    img.style.left = imgWidth * index + "px";
  }
  images.forEach(setImgPosition);
  const moveToImg = function (list, currentImg, targetImg) {
    list.style.transform = `translateX(-${targetImg.style.left})`;
    currentImg.classList.remove("current-img");
    targetImg.classList.add("current-img");
  };
  const hideShowArrows = function (images, prevBtn, nextBtn, targetIndex) {
    if (targetIndex === 0) {
      prevBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    } else if (targetIndex === images.length - 1) {
      prevBtn.classList.remove("hidden");
      nextBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
      nextBtn.classList.remove("hidden");
    }
  };
  nextBtn.addEventListener("click", function () {
    const currentImg = list.querySelector(".current-img");
    const nextImg = currentImg.nextElementSibling;
    const nextIndex = images.findIndex((img) => img === nextImg);
    moveToImg(list, currentImg, nextImg);
    hideShowArrows(images, prevBtn, nextBtn, nextIndex);
  });
  prevBtn.addEventListener("click", function () {
    const currentImg = list.querySelector(".current-img");
    const prevImg = currentImg.previousElementSibling;
    const prevIndex = images.findIndex((img) => img === prevImg);
    moveToImg(list, currentImg, prevImg);
    hideShowArrows(images, prevBtn, nextBtn, prevIndex);
  });
});
