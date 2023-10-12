// 문자열 객체들
//charAt = 숫자에 있는 수 가져와서 보여줌
// let t = "Hello Thank you good luck to you";
// document.write(t, "<br/>");

// document.write(t.charAt(16), "<br/>");
// document.write(t.indexOf("you"), "<br/>");
// document.write(t.indexOf("you", 16), "<br/>");
// document.write(t.lastIndexOf("you"), "<br/>");
// document.write(t.lastIndexOf("you", 25), "<br/>");
// document.write(t.match("luck"), "<br/>");
// document.write(t.search("luck"), "<br/>");
// document.write(t.substr(21, 4), "<br/>");
// document.write(t.substring(6, 12), "<br/>");
// document.write(t.replace("you", "me"), "<br/>");
// document.write(t.toLowerCase("you", "me"), "<br/>");
// document.write(t.toUpperCase("you", "me"), "<br/>");
// document.write(t.length, "<br/>");

// let s = t.split("");
// console.log(s);
// document.write(s[0], "<br/>");
// document.write(s[4], "<br/>");

// let str = "A";
// let k = str.charCodeAt(0);
// document.write(k, "<br/>");

/////////////////////////////////

// let userName = prompt("당신의 영문 이름은?");
// let upperName = userName.toUpperCase();
// document.write(upperName, "<br/>");

// let userNum = prompt("당신의 연락처는");
// let result = userNum.substring(0, userNum.length - 4) + "****";
// document.write(result, "<br/>");

let userEmail = prompt("이메일 주소는");
let arrUrl = [".com", ".co.kr", ".net", ".or.kr", ".go.kr"];

let check1 = false;
let check2 = false;

if (userEmail.indexOf("@") > 0) {
  check1 = true;
}
for (let i = 0; i < arrUrl.length; i++) {
  if (userEmail.indexOf(arrUrl[i]) > 0) {
    check2 = true;
  }
}
if (check1 && check2) {
  console.log(userEmail);
} else {
  alert("이메일 잘못되었습니다");
}

////////////////////랜덤/////////////////////

// let menu = ["감자탕", "도시락", "샐러드", "편의점", "짜장면"];
// let menuNum = Math.floor(Math.random() * menu.length);
// let result = menu[menuNum];

// document.write(result);
