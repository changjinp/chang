const selectMenu = document.querySelector("#major");
let displaySelect = () => {
  let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;
  alert(`[${selectedText}]선택`);
};

selectMenu.onchange = displaySelect;
