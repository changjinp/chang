let fah = parseFloat(prompt(`온도 입력해주세요`));

let cel = ((fah - 32) / 1.8).toFixed(1);

alert(`화씨${fah}도는 섭씨${cel}도 입니다`);
