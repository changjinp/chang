let n = parseInt(prompt("1보다 큰 숫자를 입력하세요"));
let sum = 0;
//취소버튼을 누르지 않거나 1을 초과하는 숫자를 넣기만 한다면 실행시켜라
// for을 써서 반복문을 쓴다
if (n !== null && n > 1) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      continue; //홀수면 건너띄어라
    }
    sum += i; //짝수인 값만 더해라
    document.write(`${i} ---- ${sum} <br/>`);
  }
}
