$(document).ready(function () {
    // gnb 드롭다운
    $("#gnb .main_menu>li").hover(function () {
        $(".sub_menu").stop().slideDown();
    }, function () {
        $(".sub_menu").stop().slideUp();
    });

    // gnb2 드롭다운
    $("#gnb2 .main_menu>li>a").click(function () {
        $(this).siblings(".sub_menu").slideDown();
        $(".main_menu>li").children(".sub_menu:not(:animated)").slideUp();
    });

    // 햄버거 열기
    $(".button #ham").click(function () {
        $("#gnb2").css("left", "0");
    });

    // X로 닫기
    $("#gnb2 .main_menu li:first-child").click(function () {
        $("#gnb2").css("left", "-100%");
    });

    //배경으로 닫기
    $("#gnb2 #bg").click(function () {
        $("#gnb2").css("left", "-100%");
    });

    // 탭
    $(".tap_btn>li").click(function () {
        $(".tap_btn>li").removeClass("on");
        $(this).addClass("on");


        var idx = $(this).index();

        $(".tap_con>li").removeClass("view");
        $(".tap_con>li").eq(idx).addClass("view");
    });

    // 알림창
    $('a[href="#"').click(function (e) {
        e.preventDefault();
    });

    $('a[href="#;"').click(function (e) {
        alert("아직 준비중인 페이지입니다. 메인 페이지 <아이돌 상품> 섹션의 두 번째 상품을 클릭해 주세요.")
    });
});