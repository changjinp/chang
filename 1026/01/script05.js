///2번방법
class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}을 ${this.price}원에 구매하였습니다`);
  }
}

const book1 = new BookC("type", 150000);
book1.buy();

class TextbookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }

  buyTextbook() {
    console.log(`${this.major}존겅서적, ${this.title}을구매`);
  }
}

const book2 = new TextbookC("html", 5000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();
