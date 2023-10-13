//attr = 속성을 불러온다
$(".navi li").mouseenter(function () {
  let changeImage = $(this).attr("data-img");
  $(".photo").css({ background: `url(${changeImage})` });
});
$(".navi li").mouseleave(function () {
  $(".photo").css({ background: "" });
});
