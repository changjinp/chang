const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");
const title = document.querySelector("#container > h2");

orderButton.addEventListener("click", () => {
  let newP = document.createElement("p");
  let newImg = document.createElement("img");
  let srcNode = document.createAttribute("src");
  srcNode.value =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn4JjsXRFsFeWNTs0gLOXDWxoneilsZdz5UY31rMXd2OP00wT09Af-Ay_RVj57CwkOu0Y&usqp=CAU";
  newImg.setAttributeNode(srcNode);
  orderInfo.appendChild(newImg);

  let textNode = document.createTextNode(title.innerText);

  newP.appendChild(textNode);
  newP.style.fontSize = "0.8em";
  newP.style.color = "#00f";
  orderInfo.appendChild(newP);
});
