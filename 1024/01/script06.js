// 내가함
// const userName = document.querySelector("#userName");
// const major = document.querySelector("#major");

// const save = document.querySelector("#save");

// const list = document.querySelector("#attendant");

// save.addEventListener("click", (e) => {
//   e.preventDefault();
//   const item = document.createElement("tr");
//   item.innerHTML = `<td>${userName.value}</td><td>${major.value}</td>`;
//   list.appendChild(item);
// });

const userNmae = document.querySelector("#userName");
const major = document.querySelector("#major");

const save = document.querySelector("#save");

save.addEventListener("click", (e) => {
  e.preventDefault(); // 무력화시킴
  let tbody = document.querySelector("#attendant > tbody");
  let newTr = document.createElement("tr");
  let nameTd = document.createElement("td");
  nameTd.innerText = userNmae.value;
  userNmae.value = "";
  let majorTd = document.createElement("td");
  majorTd.innerText = major.value;
  major.value = "";

  newTr.appendChild(nameTd);
  newTr.appendChild(majorTd);
  tbody.appendChild(newTr);
});
