//프로토타입을 상속하는 새로운 객체를 생성하는 방법
// 2가지 나눠서
// 1) 고전적인 방식 생성자 함수
// 2) class를 활용한 생성자 함수 만들어서 객체 생성 방법

////// 1번방법

//book 생성자 함수 정의
function Book(title, price) {
  this.title = title;
  this.price = price;
}

// book 이라는 생성자 함수 메서드(함수) 정의

Book.prototype.buy = function () {
  console.log(`${this.title}을 ${this.price}원에 구매하였습니다`);
};

//생성자 함수를 통해 객체를 활용해 인스턴스 객체 만들어보자

const book1 = new Book("해리포터", 10000);
book1.buy();

function Textbook(title, price, major) {
  Book.call(this, title, price);
  this.major = major;
}
Textbook.prototype.buyTextbook = function () {
  console.log(`${this.major}전공서적, ${this.title}을 구매했습니다`);
};

Object.setPrototypeOf(Textbook.prototype, Book.prototype);

const book2 = new Textbook("자바", 10000, "computer");
book2.buyTextbook();
