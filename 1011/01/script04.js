// let subject = prompt("신청할 과목 선택하세요", "1-html, 2-css, 3-js");

// //(subject !== null && subject !== "") 취소,빈문자 아닌 값을 넣었을때//
// // switch case는 1개씩쓰고 break;문으로 끝내고 다시 만들어야한다

// if (subject !== null && subject !== "") {
//   switch (subject) {
//     case "1":
//       document.write("html을 신청했습니다");
//       break;
//     case "2":
//       document.write("css을 신청했습니다");
//       break;
//     case "3":
//       document.write("js을 신청했습니다");
//       break;
//     default:
//       document.write("잘못 입력했습니다");
//   }
// } else {
//   alert("정상적인 과목을 선택해주세요");
// }

////////////////////////2번////////////////////////

// let site = prompt("네이버,다음,구글 중 즐겨찾는 사이트는");
// let url;

// if (site !== null && site !== "") {
//   switch (site) {
//     case "구글":
//       url = "https://www.google.com";
//       break;
//     case "네이버":
//       url = "https://www.naver.com";
//       break;
//     case "다음":
//       url = "https://www.daum.net";
//       break;

//     default:
//       alert("보기에 없는 사이트입니다");
//   }
// }
// if (url) {
//   location.href = url;
// }

////////////////////반복문 1번////////////////////////

// const students = ["Park", "Kim", "Lee", "Kang"];
// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]},<br/>`);
// }

////////////반복문 1-1번 //////////////

// let colors = ["red", "blue,", "green", "white", "black"];
// for (let i = 0; i < colors.length; i++) {
//   document.write(`${colors[i]} <br/><br/>`);
// }

////////////반복문 1-2번 //////////////

// const students = ["Park", "Kim", "Lee", "Kang"];

// class형 함수
// students.forEach(function (student) {
//   document.write(`${student} <br/>`);
// });

// students.forEach((student) => {
//   document.write(`${student} <br/>`);
// });

////////////반복문 1-3번 //////배열할때 가져온다 앞에서 한것들은////////

// const gitBook = {
//   title: "깃 깃허브 입문",
//   pubDate: "2023-10-11",
//   page: 272,
//   finished: true,
// };

// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]} <br/>`);
// }

//////////////반복문 1-4번/////////////////

// const students = ["Park", "Kim", "Lee", "Kang"];
// for (student of students) {
//   document.write(`${student} <br/>`);
// }

/////////////////while문///////////////

// let stars = prompt("별의 갯수 :");
// if (stars !== null && stars !== "") {
//   while (stars > 0) {
//     document.write("*");
//     stars--;
//   }
// }

//////////////////////////////////////////

let stars = prompt("별의 갯수 :");
if (stars !== null && stars !== "") {
  do {
    document.write("*");
    stars--;
  } while (stars > 0);
}
