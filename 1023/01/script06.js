const container = document.querySelector("#container");
const arrows = document.querySelectorAll(".arrow");

const pics = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
  "pic-4.jpg",
  "pic-5.jpg",
  "pic-6.jpg",
];
container.style.background = `url(img/${pics[0]})`;
let i = 0;
arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = pics.length - 1;
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= pics.length) {
        i = 0;
      }
    }
    container.style.background = `url(img/${pics[i]})`;
  });
});

//이미지 오른쪽 버튼(이미지 가져가기) 막기
window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  // alert("오른쪽 버튼 사용할수없습니다");
});
