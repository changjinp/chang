const title = document.querySelector("#title");
const author = document.querySelector("#author");

const save = document.querySelector("#save");
const bookList = document.querySelector("#bookList");

save.addEventListener("click", (e) => {
  e.preventDefault();
  const item = document.createElement("li");
  item.innerHTML = `${title.value}-${author.value}
  <span class="delButton">삭제</span>`;
  bookList.appendChild(item);

  //저장하고 채워져 있던 칸 비워지게 해준다
  title.value = "";
  author.value = "";

  //삭제버튼
  const delButtons = document.querySelectorAll(".delButton");
  for (let delButton of delButtons) {
    //for of문 하나씩 가져와서 선택했을때 반복한다
    delButton.addEventListener("click", removeItem);
  }
});

function removeItem() {
  let list = this.parentNode;
  list.parentNode.removeChild(list);
}
