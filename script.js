$(function(){
    //トップスクロール
    $('#scroll-to-top').click(function(){
        $("html,body").animate({scrollTop:0},200);
    })

    //ヘッダーナビゲーション
    function scroll(id){
        const position = $(id).offset().top;
        console.log(position);
        const duration_time = 100;
        $("html,body").animate({scrollTop:position},duration_time);
        if ($('.hamburger').hasClass('active')) {
            console.log('クリックされました');
            $('.hamburger').removeClass('active');
            $('.header-nav').removeClass('active');
        }
    }
    $("#about-me-btn").click(function(){scroll('#about-me')})
    $("#skill-btn").click(function(){scroll('#skill')})
    $("#works-btn").click(function(){scroll('#works')})
    $("#hobby-btn").click(function(){scroll('#hobby')})
    //ハンバーガーメニュー
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header-nav').addClass('active');
        } else {
            $('.header-nav').removeClass('active');
        }
    });
    //スライドショー
    $(".slide-main li").css({"position":"relative","overflow":"hidden"});
    $(".slide-main li").hide().css({"position":"absolute","top":0,"left":0});
    $(".slide-main li:first").addClass("fade").show();
    setInterval(function(){
        var $active = $(".slide-main li.fade");
        var $next = $active.next("li").length?$active.next("li"):$(".slide-main li:first");
        $active.fadeOut(1000).removeClass("fade");
        $next.fadeIn(1000).addClass("fade");
    },2000);
});