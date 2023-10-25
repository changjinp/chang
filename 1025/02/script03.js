// 클래스를 사용해서 객체 만들기
//생성자 함수★★★★★★★ㅁ8ㅁ8ㅁ8ㅁ8ㅁ8ㅁ8★

class Book5 {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
  finish() {
    let str = "";
    this.done = false ? (str = "읽는 중") : (str = "완독");
    return str;
  }
}
let book6 = new Book5("자바스크립트01", 648, false);
let book7 = new Book5("자바스크립트02", 553, true);

console.log(`${book6.title}-${book6.pages}-${book6.finish()}`);
console.log(`${book7.title}-${book6.pages}-${book7.finish()}`);
