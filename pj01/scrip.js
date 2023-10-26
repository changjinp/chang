const io = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show");
  });
});

const infoEls = document.querySelectorAll(".info");
infoEls.forEach(function (el) {
  io.observe(el);
});

const $nav_items = document.querySelector(".gnb");
const $hamburger = document.querySelector(".hams");
$hamburger.addEventListener("click", () => {
  $nav_items.classList.toggle("active");
});

const openBtn = document.querySelector(".open");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const body = document.querySelector("body");
let menu = document.querySelector("#menu-icon");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

menu.onclick = () => {
  menu.classList.toggle("bx-x");
};

// a이동 하는거 막기
// $("a").click(function (e) {
//   e.preventDefault();
// });
