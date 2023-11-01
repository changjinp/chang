const string = prompt("문자열을 입력해주세요");
const letter = prompt("단어를 입력해주세요");

let counting = (str, ch) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      count += 1;
    }
  }
  return count;
};
const result = counting(string, letter);
alert(`${string}에는 ${letter}가 ${result}개`);
