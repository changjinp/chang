/*
toUppercase; // 대문자로
toLoweCase; // 소문자로
substring(); // 시작위치부터  잡아준다
slice(); // 마이너스면 뒤에서 부터 시작
split();
*/

const email = document.querySelector("#email");
const btn = document.querySelector("#btn");
const result = document.querySelector(".result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value !== "") {
    let userName = email.value.split("@")[0];
    let half = userName.length / 2;
    userName = userName.substring(0, userName.length - half);
    let domain = email.value.split("@")[1];
    result.innerText = `${userName}***@${domain}`;
  }
});
