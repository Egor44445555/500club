$(document).ready(function() {

    /*** Tabs ***/

    $('.tabs-head-item').on("click", function(e) {
        e.preventDefault();
        var id = $(this).attr('data-tab'),
            content = $('.tabs-body-item[data-tab="'+ id +'"]');

        $('.tabs-head-item.active').removeClass('active');
        $(this).addClass('active');

        $('.tabs-body-item.active').removeClass('active');
        content.addClass('active');
    });


    /***/

    $('.checkbox').change(function(){
        var check = $('.checkbox');

        if($(this).prop("checked")){
            $(this).parents('.checkbox-wrap').addClass('check');
        }
        if (check.not(':checked').length == check.length){
            $(this).parents('.checkbox-wrap').removeClass('check');
        }
    });

    $(".spoiler-block .head").on("click", function() {
        $(".spoiler-block-item").removeClass("active");
        $(this).parent().toggleClass("active");
    });


    $(".slider").slick({
        slidesToShow: 5,
        arrows: true,
        dots: false,
        infinite: true,
        draggable: true,
        centerMode: true,
        focusOnSelect: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 3,
                    // centerMode: false
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });

    if($(window).width() < 561) {
        $(".influence-block").slick({
            slidesToShow: 2,
            arrows: false,
            dots: false,
            infinite: true,
            centerMode: true,
            draggable: true,
            swipeToSlide: true,
            touchMove: true,
            accessibility: true,
            touchThreshold: 100,
            speed: 200,
            responsive: [
                {
                    breakpoint: 427,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }

    $('.form-scroll').on('click',  function(e) {
        var body = $("html, body");
        // var scrollDown = $('.first-block .video-wrap').height();
        var video = $('.first-block .video-wrap .video .hover').height() - 120;
        var scrollDown = $('.first-block .left-block').height() - video;

        body.animate({scrollTop: scrollDown}, 600);
    });

    $('.blue-head-mobile').on('click',  function(e) {
        var body = $("html, body");
        var scrollDown = $('.wrapper').height() - $('.blue-block').height() - 140;

        body.animate({scrollTop: scrollDown}, 600);
    });


    /*** Modal open ***/

    $('.modal-btn').on('click', function(e) {
        event.preventDefault();

        var id = $(this).attr('href');
        $(id).addClass('show');
        $('body').addClass('noscroll');
    });
    $('.modal-close-btn, .overflow, .footer-close-btn').on('click', function() {
        event.preventDefault();
        $('.modal-wrap').removeClass('show');

        var iframe = $('iframe'),
            src = iframe.attr('src');
            iframe.attr('src', src + '?autoplay=0');
        $('body').removeClass('noscroll');
    });


    $('.phone').mask('(000) 000-0000');
    $('.date').mask('00/00/0000');
    $('.fax').mask('(000) 000-0000');

    $('.number').bind('keypress', function (event) {
        var regex = new RegExp("^[0-9]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    $('.text').bind('keypress', function (event) {
        var regex = new RegExp("[a-zA-Z]");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    $('.text-number').bind('keypress', function (event) {
        var regex = new RegExp("[a-zA-Z0-9]");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });


    /*** Counter ***/

    var sum = new CountUp('sum', 0, 314, 0, 1.5);


    var titleScroll = $('.title-scroll');
    var animate = $('.animate');
    var influenceBlock = $('.influence-block');
    var twoBlock = $('.two-block');
    var videoBlockWrap = $('.video-block-wrap');
    var video = $('.auto-play-video');
    var footerScroll = $('.footer');

    animate.each(function() {
        if (($(this).offset().top - 100) <= $(window).scrollTop()) {
            $(this).addClass('active');
        }
    });


    var title1 = $(".title1").offset().top;
    var title2 = $(".title2").offset().top;
    var title3 = $(".title3").offset().top;
    var videoWrap = $(".video-block-wrap").offset().top;
    var blueBlock = $(".blue-block").offset().top;
    var blueBlockHeight = $(".blue-block").height();

    function scrollTitle() {
        if($(window).scrollTop() < title1) {
            $('.hidden-title').html('');
            $('.logo').removeClass('hide');
        }
        if($(window).scrollTop() >= title1 ){
            setTimeout(function () {
                $('.hidden-title').addClass('active');
            },300);

            $('.hidden-title').text('Резиденты клуба');
            $('.logo').addClass('hide');
        }
        if($(window).scrollTop() >= title2 ){
            $('.hidden-title').text('На что влияет клуб');
            $('.logo').addClass('hide');
        }
        if($(window).scrollTop() >= videoWrap - 500 ){
            $('.hidden-title').html('').removeClass('active');
            $('.logo').removeClass('hide');
        }
        if($(window).scrollTop() >= title3 ){
            setTimeout(function () {
                $('.hidden-title');
            },300);

            $('.hidden-title').text('Наши резиденты');
            $('.logo').addClass('hide');
        }
        if($(window).scrollTop() >= blueBlock - 300 ){
            $('.hidden-title').text('Оставь заявку');
            $('.logo').addClass('hide');
        }
        if($(window).scrollTop() > blueBlock + blueBlockHeight - 200){
            $('.hidden-title').html('').removeClass('active');
            $('.logo').removeClass('hide');
        }
    }



    $(window).on('scroll',function(e) {
        var windowHeight = $(window).height();
        var windowScroll = $(window).scrollTop();


        var footer = $('.footer-wrap');
        var residentsBlockItem = $('.residents-block-item');
        var residentsBlockItemSecond = $('.residents-block-item:nth-child(2n)');

        var residentsBlockItemTop = residentsBlockItem[0].offsetTop;
        var residentsBlockItemTopStartAnim = residentsBlockItemTop - (windowHeight*.3);
        if(windowScroll > residentsBlockItemTopStartAnim){
            var moveTranslate = 'translateY('+(((windowScroll - residentsBlockItemTopStartAnim)*-0.15) + 240)+'px)',
                moveTranslateSecond = 'translateY('+(((windowScroll - residentsBlockItemTopStartAnim)* 0.15) - 200)+'px)';
            residentsBlockItem.css('transform',moveTranslate);
            residentsBlockItemSecond.css('transform',moveTranslateSecond);
        }

        scrollTitle();
        // titleScroll.each(function() {
        //     var text = $(this).attr('data-title');
        //
        //     if ($(document).scrollTop() + windowHeight >= height) {
        //         $('.logo').html(text);
        //     } else {
        //         $('.logo').html('<img src="images/logo.svg" alt="">');
        //     }
        // });


        animate.each(function() {
            if ($(this).offset().top >= $(window).scrollTop() && $(this).offset().top < $(window).scrollTop() + $(window).innerHeight() - 400) {
                $(this).addClass('active');
            }
        });

        influenceBlock.each(function() {
            if ($(this).offset().top < $(window).scrollTop() + 200) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });

        twoBlock.each(function() {
            if ($(this).offset().top < $(window).scrollTop() + 130) {
                $(this).addClass('active');
            }
        });

        videoBlockWrap.each(function() {
            if ($(this).offset().top < $(window).scrollTop() + 230) {
                $('.auto-play-video').attr('autoplay', true);

                $(this).addClass('active');
            }
        });

        footer.each(function() {
            if ($(this).offset().top < $(window).scrollTop() + 230) {
                sum.start();
            }
        });
    });

    video.on('ended', function () {
        video.parents('.video-block-wrap').addClass('show');
    });
});
