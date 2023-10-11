let name = prompt(`이름을 입력해주세요`, "ex) 홍길동");
let height = parseInt(prompt("키를 입력해주세요", "ex) 180"));
let weight = parseInt(prompt("몸무게를 입력해주세요", "ex) 80"));

let normal_w = (height - 100) * 0.9;
let result = weight >= normal_w - 5 && weight <= normal_w + 5;

result = result ? "적정체중이시네요" : "적정체중이 아닙니다";
document.write(`${name}님은 ${result}`);
