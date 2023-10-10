// 사용자가 입력한 원가격 값 정의
// 사용자가 입력한 할인률 값 정의
// 출력되어야 하는 문장 위치 정의
// 계산하기 버튼 클릭시 이벤트 기능 정의

// 원래가격 정의 showPrice()
// 할인율 정의 rate()

function showPrice() {
  let originPrice = document.querySelector("#oPrice").value;
  console.log(originPrice);

  let rate = document.querySelector("#rate").value;
  console.log(rate);

  let savedPrice = originPrice * (rate / 100);
  console.log(savedPrice);

  let resultPrice = originPrice - savedPrice;
  console.log(resultPrice);

  document.querySelector(
    "#showResult"
  ).innerHTML = `상품의 원래가격은 ${originPrice}원 이고, 할인율은 ${rate}% 입니다.${savedPrice}원을 절약한 ${resultPrice}에 구매할 수 있습니다.`;
}
