// 호버 드롭다운 메뉴
$(document).ready(function () {
    $("#gnb ul.main_list").hover(function () {
    $("#gnb ul.sub_list").stop().slideDown();

    }, function () {
    $("ul.sub_list").stop().slideUp();
    });

    // 모바일 서랍 메뉴
    var toggle = 0;
    $("#gnb2 #hamburger").click(function () {
        if (toggle == 0) {
            $("#gnb2 ul.main_list").css("left", "0");
            $("#overlayer").show();
            toggle = 1;
        } else {
            $("#gnb2 ul.main_list").css("left", "-100%");
            $("#overlayer").hide();
            toggle = 0;
        }
    });
    // 닫기 버튼
    $("#gnb2 .close").click(function () {
        $("#gnb2 ul.main_list").css("left", "-100%");
        $("#overlayer").hide();
    });

    $("#overlayer").click(function () {
        $(".main_list").css("left", "-100%");
        $("#overlayer").hide();
    })

    // 모바일 클릭 드롭다운
    $("#gnb2 ul.main_list>li>a").click(function () {
        $(this).siblings("#gnb2 ul.sub_list").slideDown();
        $(".main_list>li").children("#gnb2 ul.sub_list:not(:animated)").slideUp();
    });

    // 메인메뉴 색
    $("#gnb2 ul.main_list li.list").click(function(){
        $(this).siblings("#gnb2 ul.main_list li.list").css("background-color", "#ffffff")
        $(this).css("background-color", "#d4f1f4")
    });

    // 모바일 공지사항
    $("#notice2 li:gt(0)").css("bottom", "-44px")

    var now = 0;
    var notice = 7;
    setInterval(function (){
        slide();
    }, 2000);

    function slide(){
        now = now == notice ? 0 : ++now;
        $("#notice2 li").eq(now).animate({"bottom": "0"}, 2000);
        $("#notice2 li").eq(now - 1).animate({"bottom": "44px"}, 2000, function (){
            $(this).css("bottom", "-44px");
        });
    }

    // 알림창
    $('a[href="#"').click(function (e) {
        e.preventDefault();
    });

    $('a[href="#;"').click(function (e) {
        alert("아직 준비중인 페이지입니다. 자료 검색-분야별 도서 페이지를 이용해 주세요.")
    });
});