$(document).ready(function () { // 클릭 드롭다운 메뉴
    
    $(".main_list > a").click(function () {
        
        $(this).siblings("ul.sub_menu").slideDown();
        $('.main_list').children("ul.sub_menu:not(:animated)").slideUp();
            
    });

    // 모바일 서랍메뉴
    var toggle = 0;
    $("#hamburger").click(function () {
        if (toggle == 0) {
            $("#drawer_menu").css("left", "0");
            $("#overlayer").show();
            toggle = 1;
        } else {
            $("#drawer_menu").css("left", "-100%");
            toggle = 0;
            $("#overlayer").hide();
        }
    });

    // 메뉴 닫기
    $(".close").click(function () {
        $("#drawer_menu").css("left", "-100%");
        $("#overlayer").hide();

    })

    $("#overlayer").click(function () {
        $("#drawer_menu").css("left", "-100%");
        $("#overlayer").hide();
    })

    // 알림창
    $('a[href="#"').click(function (e) {
        e.preventDefault();
    });

    $('a[href="#;"').click(function (e) {
        alert("아직 준비중인 페이지입니다.")
    });
});