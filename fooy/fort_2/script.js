const headerEl = document.querySelector("header");
const menuStarterEl = document.querySelector("header .menu-starter");
menuStarterEl.addEventListener("click", function () {
  if (headerEl.classList.contains("menuing")) {
    headerEl.classList.remove("menuing");
  } else {
    headerEl.classList.add("menuing");
  }
});
