// let x = 10;
// if (x >= 5) {
//   console.log(`x는 5보다 큽니다`);
// }
// let y = 10;
// if (y < 5) {
//   console.log(`y는 5보다 작습니다`);
// }

// y -= 5; // y에 5를 빼라

// console.log(y);

/////////////////////////////2번//////////////////////////////////////

// let userInput = prompt("이름을 임력하세요");

// if (userInput === null) {
//   alert("취소하셨습니다.");
// } else {
//   alert(`${userInput}님 환영합니다`);
// }

/////////////////////////3번 if 조건문//////////////////////////////

// let score = parseInt(prompt("SCSS 시험점수:"));

// if (score != null) {
//   if (score >= 90) {
//     alert("A");
//   } else if (score >= 80) {
//     alert("b");
//   } else {
//     alert("c");
//   }
// }

///////////////////////////4번//////////////////////////////

// let userInput = prompt("이름을 입력");

// if (userInput !== null) {
//   alert(userInput);
// }

///////////////////////////5번//////////////////////////////

// let userNumber = prompt("숫자를 입력");
// console.log(userNumber);
// if (userNumber !== null && userNumber !== "") {
//   userNumber = parseInt(userNumber);
//   userNumber % 2 === 0
//     ? alert(`${userNumber} : 짝수`)
//     : alert(`${userNumber} : 홀수`);
// } else {
//   alert("정상입력해주세요");
// }

///////////////////////////6번//////////////////////////////

// let result = confirm("회원탈퇴 하겠습니까");
// if (result) {
//   document.write("정상탈퇴완료");
// } else {
//   document.write("탈퇴취소처리되었습니다");
// }

///////////////////////////7번//////////////////////////////

// let month = parseInt(prompt("몇월입니까", "10"));

// if (month >= 9 && month <= 11) {
//   document.write("가을");
// } else if (month >= 6 && month <= 8) {
//   document.write("여름");
// } else if (month >= 3 && month <= 5) {
//   document.write("봄");
// } else {
//   document.write("겨울");
// }

/////////////////////★8번 미션★////////////////////////

/*
1. 조건값을 정의할 수 있는 변수
2. 사용자로부터 id pw 값 받아서 정의
3. 사용자로부터 받은 해당 값과 조건값이 일치하는지 평가
*/

let id = "ezen";
let pw = "1234";

let user_id = prompt("당신의 아이디는?");

if (id === user_id) {
  let user_pw = prompt("비밀번호는");
  if (pw === user_pw) {
    alert(`${user_id}님 반갑습니다`);
  } else {
    alert(`${user_id}님 비밀번호가 일치하지 않습니다`);
    location.reload();
  }
} else {
  alert(`아이디가 일치하지 않습니다`);
  location.reload();
}
