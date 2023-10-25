window.onload = function () {
  const bgCount = 5;
  let randomNumber = Math.floor(Math.random() * bgCount) + 1;
  document.body.style.backgroundImage = `url(img/bg-${randomNumber}.jpg)`;
};
