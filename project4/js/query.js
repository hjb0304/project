$(document).ready(function () {
    // 해시 스크롤
    $("#gnb ul li a").click(function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        }
    });

    // 탑버튼
    $("#top-btn").click(function () {
        $('html, body').animate({
            scrollTop: $('html, body').offset().top
        }, 500);
    });

    // 고정 메뉴
    var prev = window.pageYOffset;

    window.onscroll = function () {
        var current = window.pageYOffset;
        if (prev > current) {
            $("header").css("top", "0");
        } else {
            $("header").css("top", "-96px");
            prev = current;
        }
    }

    // 슬라이드 질문 3번
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 675, //브라우저 너비 
                settings: {
                    slidesToShow: 2, // 보여지는 슬라이드 썸네일 개수
                    slidesToScroll: 2, // 한번 슬라이드 넘어갈 때 슬라이드 썸네일 개수
                }
            }
        ]
    });

        // 알림창
        $('a[href="#"').click(function (e) {
            e.preventDefault();
        });
    
        $('a[href="#;"').click(function (e) {
            alert("아직 준비중인 페이지입니다.")
        });
});