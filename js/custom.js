$(function () {
  $("header li").on("click", function () {
    //header li를 클릭하면 실행하라
    let i = $(this).index(); //클릭 이벤트가 발생한 아이의 순번을 i변수에 담아라.
    console.log(i); //콘솔에 i 값을 보여라

    let target = $("#container section").eq(i).offset().top; //컨테이너의 섹션 중에서 i순번에 맞는 녀석의 body 0,0을 기준으로 y값을 구하여 target 변수에 담아라.
    console.log(target); //콘솔에 target 값을 보여라
    $("html").stop().animate({ scrollTop: target }); //html 문서의 scrollTop을 target 변수에 담긴 값만큼 움직여라.

    // $("#navi li").removeClass("on");
    // $("#navi li").eq(i).addClass("on");
  });

  $(window).on("scroll", function () {
    let sc = $(this).scrollTop();

    let page1 = $("section.page1").offset().top;
    let page2 = $("section.page2").offset().top;
    let page3 = $("section.page3").offset().top;
    let page4 = $("section.page4").offset().top;
    console.log(
      "스크롤탑",
      sc,
      "page1",
      page1,
      "page2",
      page2,
      "page3",
      page3,
      "page4",
      page4
    );

    if (sc >= page1 - 200 && sc <= page2) {
      $("#navi li").removeClass("on");
      $("#navi li:nth-child(1)").addClass("on");
      $("section.page1 h2").addClass("activepage1");
    } else {
      $("section.page1 h2").removeClass("activepage1");
    }

    if (sc >= page2 - 150 && sc <= page3 - 150) {
      $("#navi li").removeClass("on");
      $("#navi li:nth-child(2)").addClass("on");
      $("section.page2 li").addClass("active");
    } else {
      $("section.page2 li").removeClass("active");
    }

    if (sc >= page3 - 150 && sc <= page4) {
      $("#navi li").removeClass("on");
      $("#navi li:nth-child(3)").addClass("on");
      $("section.page3 div").addClass("activepage3");
    } else {
      $("section.page3 div").removeClass("activepage3");
    }

    if (sc >= page4) {
      $("#navi li").removeClass("on");
      $("#navi li:nth-child(4)").addClass("on");
      $("section.page4 h2").addClass("activepage4");
    } else {
      $("section.page4 h2").removeClass("activepage4");
    }
  });
});
