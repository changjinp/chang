///max객체 쓸땐 new 안쓴다///
///매개변수로 들어와있는 숫자중에 가장 큰 값을 반환///
/*
let num = 2.1234;
let maxNum = Math.max(10, 5, 8, 30);
let minNum = Math.min(10, 5, 8, 30);
let roundNum = Math.round(num);
let floorNum = Math.floor(num);
let ceilNum = Math.ceil(num);

document.write(maxNum, "<br/>");
document.write(minNum, "<br/>");
document.write(roundNum, "<br/>");
document.write(floorNum, "<br/>");
document.write(ceilNum, "<br/>");

// round
// 매개변수로 들어와 있는 숫자에 첫번째 소수점 반올림하여 정수로 반환

//floor
// 무조건 올림하여 정수로 반환

//ceil
// 0부터 1미만의 실수 (소수점을 가진 숫자)를
// 난수 형태로 반환

//랜덤

let rndNum = Math.random();
document.write(rndNum, "<br/>");

//원주율
let piNum = Math.PI;
document.write(piNum, "<br/>");
*/

//120~150사이 정수를 랜덤 값으로 추출하고 싶을때
// Math.random();
// document.write(Math.floor(Math.random() * 31) + 120);

///////////가위바위보////////////
document.write("<h1>가위바위보</h1>");

let game = prompt(`가위바위보중선택`);
let gameNum;

if (game !== null && game !== "") {
  switch (game) {
    case "가위":
      gameNum = 1;
      break;
    case "바위":
      gameNum = 2;
      break;
    case "보":
      gameNum = 3;
      break;
    default:
      alert("잘못작성했습니다");
      location.reload();
  }
}

let com = Math.ceil(Math.random() * 3);
document.write(`<img src="img/math_img_${com}.jpg">`);

if (gameNum == com) {
  document.write(` <img src="img/game_1.jpg">`);
} else {
  document.write(` <img src="img/game_1.jpg">`);
}
