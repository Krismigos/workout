let menuBtn = document.querySelector(".burger");

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
});

// Знаходжу поточний розмір экрану щоб змінити бургер меню
function displayScreenSize() {
  const screenWidth = window.innerWidth;
  let det = document.getElementById("navigation-menu");
  if (screenWidth >= 1024) {
    det.open = true;
  } else {
    det.open = false;
  }
}
// слідкую за розміром єкрану
window.addEventListener("resize", displayScreenSize);
displayScreenSize();
