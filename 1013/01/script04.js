$(".stars .fas").click(function () {
  $(this).addClass("actvie");
  $(this).prevAll().addClass("actvie");
  $(this).nextAll().removeClass("actvie");

  let num = $(this).index();
  let starRate = num + 1;
  if (starRate == 1) {
    $(".print").html(`별로에요`);
  } else if (starRate == 2) {
    $(".print").html(`보통이에요`);
  } else if (starRate == 3) {
    $(".print").html(`그냥그래요`);
  } else if (starRate == 4) {
    $(".print").html(`마음에 들어요`);
  } else {
    $(".print").html("아주좋아요");
  }
});
