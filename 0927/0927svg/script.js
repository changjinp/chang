$(document).ready(function () {
  //캔버스 변수선언 및 사이즈 정의
  let canvas = document.getElementById("canvas");
  let paper = Raphael(canvas, 700, 400);
  //사각형과 원 생성 정의
  let rect = paper.rect(0, 0, 700, 300);
  let circle = paper.circle(350, 150, 100);
  rect.attr("fill", "red");
  circle.attr("fill", "orange");
  circle.attr("stroke", "white");
  circle
    .mouseover(function () {
      circle.attr("fill", "blue");
    })
    .mouseout(function () {
      circle.attr("fill", "orange");
    });
});
