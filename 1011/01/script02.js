// let aa = parseInt(prompt("교통비를 입력해주세요"));
// let bb = parseInt(prompt("식비를 입력해주세요"));
// let cc = parseInt(prompt("음료비를 입력해주세요"));

// let result = aa + bb + cc < 10000;

// result = result ? "돈관리잘했어요" : "아껴주세요";
// document.write(result);

let traffic = parseInt(prompt("교통비를 입력해주세요"));
let eat = parseInt(prompt("식비를 입력해주세요"));
let drink = parseInt(prompt("음료비를 입력해주세요"));

let normal = traffic + eat + drink;

let result = normal < 10000;
let result1 = 10000 - normal;
let result2 = normal - 10000;

result = result
  ? `${result1}원 남았어요 관리잘하셨어요`
  : `${result2}원 초과 노력해주세요`;

document.write(result);
