//object()
////구하는 식/////

function testScore(name, kor, eng) {
  this.userName = name;
  this.korNum = kor;
  this.engNum = eng;

  this.getTestInfo = function () {
    document.write(`이름: ${this.userName}<br/>`);
    document.write(`국어: ${this.korNum}<br/>`);
    document.write(`영어: ${this.engNum}<br/>`);
  };
  this.getAvg = function () {
    return (this.korNum + this.engNum) / 2;
  };
}

///// 구하려는 값///////

let kimgun = new testScore("김군", 80, 90);
kimgun.getTestInfo();
document.write(`평균점수:${kimgun.getAvg()} <br/><br/>`);

let ohgun = new testScore("오군", 100, 80);
ohgun.getTestInfo();
document.write(`평균점수:${ohgun.getAvg()}`);

//기본 토대가 되어지는 함수 => 프로토타입
//토대가 되어지는 함수를 활용해 만들어지는값을 인스턴스라고 한다
