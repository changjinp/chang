/**객체 구성요소
 * key(키) & value(값) => property (프로퍼티)
 */
// 삭제방법 : delete book1.pages

// let book1 = {
//   title: "자바",
//   pages: 648,
// };

// console.log(book1);

//2번쨰 넣는방법
// let book3 = new Object();
// book3.title = "타입스크립트";
// book3.page = 550;
// console.log("book3");

///////////////////////////////////

// let student = {
//   name: "park",
//   score: {
//     history: 85,
//     science: 94,
//     avg: function () {
//       return (this.history + this.science) / 2;
//     },
//   },
// };

///여러번 쓰려면 this객체로 이름이 바뀌더라도 사용 가능

// let book3 = {
//   title: "nodejs",
//   pages: 360,
//   done: true,
//   buy: function () {
//     console.log("이책구입했습니다");
//   },
//   finish: function () {
//     this.done === false ? console.log("읽는중") : console.log("완독");
//   },
// };

//원시타입 // 참조주소복사///

let bag1 = {
  color: "blue",
  width: 30,
  height: 30,
};
