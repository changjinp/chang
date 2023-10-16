// hoisting    화살표에선 불가하다
/*
let count = 0;
myFunc();
function myFunc() {
  count++;
  console.log(`hello ${count}`);
}
myFunc();

let theFnc = () => {
  count++;
  console.log(`bye ${count}`);
};
theFnc();
*/

//////

/*
let color = ["white", "yellow", "aqua", "purple"];
let i = 0;
function changeColor() {
  i++;
  if (i >= color.length) {
    i = 0;
  }
  let bodyTag = document.querySelector("#thebody");
  bodyTag.style.background = color[i];
}
changeColor();
*/

//////
