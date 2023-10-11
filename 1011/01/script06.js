//////////////////////미션
/*
사용자로부터 숫자를 받습니다
소수 1과 자기 자신만으로 나눠지는 숫자

그리고 해당숫자가 소수면 해당숫자는 소수입니다 출력
해당숫자가 소수가 아니면 소수가 아닙니다 출력
*/
/*
1. 사용자가 입력한 값 저장할 변수 정의
2. 소수인지 아닌지 판단할 수 있는 연산정의
3. 해당연산이 끝났을때 결과값을 출력하게 할 수 있는 조건문 정의
*/
///////////////////
// let n = parseInt(prompt("숫자를 입력하세요"));
// let  =

// if(n !== null && n !== "") {
//   for(){

//   }
// }

// const number = parseInt(prompt("자연수를 입력하세요"));
// let isPrime;

// if (number === 1) {
//   document.write(`${number}은 소수도 합성수도 아닙니다`);
// } else if (number === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
// }
// if (isPrime) {
//     document.write(`${number}은 소수입니다`);
//   } else {
//     document.write(`${number}는 소수가 아닙니다`);
//   }

/////////////////미션////////////////////
/*length = item의 갯수
 */
// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]} <br/>`);
//   }
// }

///////////////반복문////////////////////
for (let i = 1; i < 100; i++) {
  if (i % 5 == 0 && i % 7 != 0) {
    //5의 배수이면서 7의 배수는 아닌 숫자
    document.write(`<p class="red">${i}</p>`);
  } else if (i % 7 == 0 && i % 5 != 0) {
    document.write(`<p class="green">${i}</p>`);
  } else if (i % 7 == 0 && i % 5 == 0) {
    document.write(`<p class="blue">${i}</p>`);
  }
}
