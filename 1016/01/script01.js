// function calcSum() {
//   let sum = 0;
//   for (let i = 1; i <= 10; i++) {
//     sum += i;
//     console.log(`1부터 10까지 더하면 ${sum}입니다`);
//   }
// }
// calcSum();

/*매개변수에 인자값을 위에 안썼으면 밑에 넣어야 호출된다 */

// function sum(a, b) {
//   let result = a + b;
//   alert(`두수의합: ${result}`);
// }
// sum(1, 2);

//////////////////////////////////////

// function calcSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(`1부터 ${n}까지 더하면 ${sum}입니다`);
// }
// calcSum(10);

///////★/////사용자가 입력한 값을 받아 처리/////////변수 ★////////////
///parseInt로 정수로 변환되어 num에 들어감
/*
let num = parseInt(prompt("몇까지더할까요"));

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum; //변수로 전환 /
  // 함수에 결과값으로 변수자리에 출력하고 싶을때 return 써서 변수로 바꿔서 밑에서 호출
}
document.write(`1부터${num}까지 더하면 ${calcSum(num)}`);
*/
//////////사용자로 2개의 값을 곱한 결과 ///////////////////
/*
let num1 = parseInt(prompt("첫번째값을 입력해주세요"));
let num2 = parseInt(prompt("두번째값을 입력해주세요"));

function multple(a, b) {
  return a * b;
}

let result = multple(num1, num2);

console.log(`두수를 곱한 결과는 ${result}입니다`);
*/
//////////////////////////////////////////
//////////매개변수는 제한이 없다 (abc)//////////
////인자값이 없어도 매개변수에 값을주면 그걸 받아온다////
/*
function multple(a, b, c = 10) {
  return a * b + c;
}
console.log(multple(2, 4, 8));
console.log(multple(2, 4));
*/

////
