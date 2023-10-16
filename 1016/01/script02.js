// 전역변수 Global
// 지역변수 Local
// 블록변수 Block

////지역변수를 전역에서 호출 불가능/////
/*
function sum(a, b) {
  let result = a + b;
}
console.log(result);
*/
////////전역변수은 어디서든(지역변수) 사용가능////////////
/*
let hi = "hellow";
function greeting() {
  console.log(hi);
}
greeting();
*/

/////////로컬변수는 글로벌에서 불가능 / 나머진 가능 //////////////
/*
let hi = "heollw";
function change() {
  hi = "bye";
}

console.log(hi); // hi = 글로벌
change(); // 이걸로 bye로 바꿔서 밑에서 bye로 출력
console.log(hi);
*/

///블록 스코프/////
/*
const factor = 5;

function calc(num) {
  return num * factor;
}

{
  let result = calc(10);
  document.write(`result : ${result}`);
}
*/

/////////익명함수 function <--여기에 이름을 안줄때  () //////////
/*
let sum = function (a, b) {
  return a + b;
};

console.log(`함수실행결과: ${sum(10, 20)}`);
*/

//////고차함수/////////
/*
(function (a, b) {
  let sum = a + b;
  console.log(`함수실행결과:${sum}`);
})(100, 200);
*/
/////////////

/////////★ 화살표 함수 ★/////익명함수를 써야 쓸 수 있다/////
/*
let hi = () => `gd`;

console.log(hi());
*/

/*
let multple = (a, b) => a * b;
console.log(`두수곱한결과${multple(10, 20)}입니다.`);
*/

/////콜백함수(함수안에 함수)///////////
/*
const btn = document.querySelector("button");
function display() {
  alert("클릭했습니다");
}

btn.addEventListener("click", display);
*/

//////콜백함수 예시/////////////
/*
function showData(name, age) {
  alert(`안녕하세요 ${name}님 나이가 ${age}살 이군요`);
}

function getData(callback) {
  let userName = prompt("이름을 입력하세요");
  let userAge = parseInt(prompt("나이를 입력하세요"));
  callback(userName, userAge);
}
getData(showData);
*/
//////////////////////
/*
let sum = (a, b) => a + b;
console.log(sum(2, 10));

function hello() {
  return "안녕하세요";
}
function bye() {
  return "안녕히가세요";
} // fn = 함수
function userCheck(name, fn) {
  console.log(`${name}님`, fn());
}

userCheck("홍길동", hello);
userCheck("도레미", bye);
*/
/////////////////////////////

// 전개연산자 or 전개구문
// ... 는 배열안에 것들을 그대로 가져온다
/*
let fruits = ["apple", "banana", "grape"];
console.log(fruits);
console.log(...fruits);
*/

///전개연산자 ... 아이템값만 가져온다/////
// for of 배열안에있는 걸 반복하고 싶을때
/*
function addNum(...numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}
console.log(addNum(1, 3));
console.log(addNum(1, 3, 5, 7));
*/

////
