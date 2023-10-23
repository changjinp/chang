// window.onload = alert("안녕하세요");

// const btn = document.querySelector("button");
// btn.onclick = () => {
//   document.body.style.background = "green";
// };

/** 키 이벤트 
const result = document.querySelector("#result");
document.body.addEventListener("keypress", (e) => {
  result.innerText = `
    code: ${e.code}, 
    key: ${e.key}`;
});
*/

const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const word = document.querySelector("#word").value;
  let count = word.length;
  result.innerHTML = `${count}`;
});
