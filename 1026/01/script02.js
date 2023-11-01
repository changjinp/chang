// class 생성자 함수

/**
 class Book(){
  constructor(a,b,c)
  this.a = a;
  this.b = b;
  this.c = c;
 }

 2)객체생성 Book
 3) 해당 객체로 instance객체 생성
 => let contents = new Book()
  
 */

class Book {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
    this.finish = function () {
      this.done === false ? (str = "읽는 중") : (str = "완독");
      return str;
    };
  }
}

const book1 = new Book("엡표준 자바", 648, false);
console.log(book1);
