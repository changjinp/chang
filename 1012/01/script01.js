/********************
// 객체 : 자료를 저장하고 처리하는 단위//

let shoeDog = {
  author: "phil knight",
  category: "social",
  pages: 500,
  price: 19800,
};

///객체 생성하는 방법///
// 1) 함수형 생성 방법 (*내장함수) 내장함수 사용시 new 쓴다
let tv = new Object();
//key 생성 = tv. 정보들 
tv.color = "white";
tv.price = 300000;
tv.info = function () {
  document.write(`tv색상 :${tv.color} <br/> `);
  document.write(`tv가격 :${tv.price} <br/> `);
};

document.write(`<h1>tv 객체 메서드 호출</h1>`);
tv.info();


// 2) 속성 설정 방법
**********************/

// let car = {
//   color: "black",
//   price: 50000,
//   info: function () {
//     document.write(`car색상:${color} <br/>`);
//     document.write(`car가격:${price} <br/>`);
//   },
// };
// document.write(`<h1>car 객체 메서드 호출</h1>`);
// car.info();

/////////this 객체 => 메서드 : 함수형태 종류 중 하나 //////////

//객체 메서드 : 재활용이 가능한 객체 및 메서드

// let test = {
//   avg: function (math, science) {
//     return math + science;
//   },
// };
// document.write(test.avg(50, 100));

// ////////
// /*재활용이 불가능한 객체및 메서드*/
// let test01 = {
//   math: 50,
//   science: 100,
//   avg: function () {
//     return this.math + this.science;
//   },
// };
// document.write(test01.avg());

////////////////////////////////

/** js에서 날짜 정보 가져올떄 사용하는 메서드 정리
 * 
1. getFullYear() : 년도 가져올때
2. getMonth() : 월 (단, 현재 월 + 1 해줘야함 0부터 시작하기 떄문에)
3. getDate() : 일 
4. getDay() : 요일 (일:0 ~ 토:6)
5. getHours() : 시간 (현시점에서의 시간) 

6. getTime() : 시간 (경과된 시간정보를 '밀리초'개념으로 찾아줌)
 6-1 1밀리초 = 1/1000초 / 1초 = 1000밀리초
1분 = 60초 = 60,000밀리초 (60*1000)
1시간 = 60분 = 3,600,00밀리초 (60*60*1000)
1일 = 24시간 = 86,400,000초 (24*60*60*1000)
1970년 이후 시간만 자동으로 알려준다 

7. getMintes() : 분
8. getSeconds() : 초
*/

///////오늘날짜 구하기///////

// let today = new Date();
// let nowMonth = today.getMonth() + 1;
// let nowDate = today.getDate();

// document.write(`<h1>오늘은 날짜정보</h1>`);
// document.write(`현재월은 ${nowMonth} <br/>`);
// document.write(`현재일은 ${nowDate}`);

/////////////////

// let classOpen = new Date(`2023,08,22`);
// let theMonth = classOpen.getMonth() + 1;
// let theDate = classOpen.getDate();

// document.write(`<h1>개강 날짜 정보</h1>`);
// document.write(`현재월은 ${theMonth} <br/>`);
// document.write(`현재일은 ${theDate}`);

//////////////////////////////////////////////////////////
// floor = 나머지 없애준다  ceil = 반올림해준다
let today = new Date();
let nowYear = today.getFullYear();
let theDate = new Date(nowYear, 11, 31);

let diffDate = theDate.getTime() - today.getTime();
let result = Math.ceil(diffDate / (60 * 60 * 24 * 1000));
console.log(`연말 디데이${result}남았습니다`);
