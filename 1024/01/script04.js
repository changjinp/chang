const elements = document.querySelector("*");

for (let element of elements) {
  element.addEventListener(
    "click",
    (e) => {
      console.log(
        `event.target : ${e.target.targetName}, event.currentTarget : ${e.currentTarget.tagName}`
      );
    },
    true
  );
}

//선택한 거만 이벤트주고싶을떄 event.target
// 여러 이벤트 event.currentTarget
