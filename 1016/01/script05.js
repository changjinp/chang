/////재귀함수/////
/*
let num = 1;
function testFnc() {
  num++;
  document.write(num, "<br/>");
  if (num === 10) return;
  testFnc();
}
testFnc();
*/

/////////버튼 열고 닫기 onclick으로/////////

function showDetail() {
  document.querySelector("#desc").style.display = "block";
  document.querySelector("#open").style.display = "none";
}
function hideDetail() {
  document.querySelector("#desc").style.display = "none";
  document.querySelector("#open").style.display = "block";
}

////////////html에 id로 js주기///////////////

let coverImage = document.querySelector("#cover");
coverImage.onclick = function () {
  alert("ㅇㅇㅇ");
};
coverImage.onmouseover = function () {
  coverImage.style.border = "5px solid red";
};
coverImage.onmouseout = function () {
  coverImage.style.border = "";
};
