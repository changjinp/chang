let bag = {
  type: "backpack",
  color: "blue",
  size: 15,
};

//for in문 : 객체 안에 담긴 key value값을 한번에 가져오고 싶을때 사용
for (let key in bag) {
  console.log(`${key} : ${bag[key]}`);
}

///////////////

let book1 = {
  title: "java",
  pages: 648,
  buy: function () {
    console.log("구입했습니다");
  },
};

for (let key in book1) {
  console.log(`${key}`);
}

//배열형태로 반환
let keys = Object.keys(book1);
console.log(keys);

let values = Object.values(book1);
console.log(values);

//중첩배열
let entries = Object.entries(book1);
console.log(entries);
