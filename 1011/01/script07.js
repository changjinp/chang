//////////중첩 for문////////////
// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열 <br/>`);
//   }
//   document.write("<br/>");
// }

//////////////구구단 1~5단 미션/////////////////
// 하던거
// for (let i = 2; i <= 9; i++) {
//   for (let k = ) {
//     document.write(`${i} ${k} <br/>`);
//   }
//   document.write("<br/>");
// }

// for (let a = 1; a <= 5; a++) {
//   document.write(`<h2>[${a}단]</h2>`);
//   for (let b = 1; b <= 9; b++) {
//     document.write(`${a} x ${b} = ${a * b} <br/>`);
//   }
// }

////////////////////////////////////////////////////////

let num = 1;
let t = `<table border=1>`;
for (let i = 1; i <= 5; i++) {
  t += `<tr>`;
  for (let k = 1; k <= 5; k++) {
    t += `<td>${num}</td>`;
    num++;
  }
  t += `</tr>`;
}
t += `</table>`;

document.write(t);
