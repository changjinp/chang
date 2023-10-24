const btn = document.querySelector("#btn");
const notiBox = document.querySelector("#noti-box");

btn.addEventListener("click", () => {
  const noti = document.createElement("div");
  noti.classList.add("noti"); // 위 div에 noti를 넣어라
  // div class="noti"
  noti.innerText = "식사하세요";
  notiBox.appendChild(noti);

  // 삭제하기
  setTimeout(() => {
    noti.remove();
  }, 2000);
});
