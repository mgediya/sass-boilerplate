var $ = jQuery.noConflict();
$(() => {
    /* Responsive Jquery Navigation */
    var $hamBurger = $('.hamburger');
    var $overlay = $('.mbnav__backdrop');

    function menuClose() {
        $hamBurger.removeClass('is-clicked');
        $('body').removeClass('scroll-fixed');
        $('.mbnav').removeClass('is-open');
        $('.mbnav .menu-wrap li').removeClass('is-open');
        $('.mbnav__inner > .menu-wrap').css('--leftSlide', '0');
    }

    /* Mobile overlay click */
    $overlay.click(function () {
        menuClose();
    });

    /* Responsive Jquery Navigation */
    $hamBurger.click(function (event) {
        if ($(this).hasClass('is-clicked')) {
            menuClose();
        } else {
            $(this).addClass('is-clicked');
            $('.mbnav').addClass('is-open');
            $('body').addClass('scroll-fixed');
        };
    });

    var clickable = $('.mbnav__state').attr('data-clickable');
    $('.mbnav li:has(ul)').addClass('has-sub');
    $('.mbnav li > ul').addClass('sub-menu');
    $('.mbnav .has-sub>a').after('<em class="mbnav__caret">');
    $('.mbnav ul > li > ul.sub-menu').prepend('<li><div class="back-click">Main Menu</div></li>');

    if (clickable == 'true') {
        $('.mbnav .has-sub>.mbnav__caret').addClass('trigger-caret');
    } else {
        $('.mbnav .has-sub>a').addClass('trigger-caret').attr('href', 'javascript:;');
    }

    // wrap Div
    $(".mbnav__inner > *").wrapAll("<div class='menu-wrap'><div class='menu-inner'></div></div>");
    $(".mbnav__inner ul li.has-sub ul").wrap("<div class='menu-wrap'><div class='menu-inner'></div></div>");

    /* menu open and close on single click */
    $('.mbnav .has-sub>.trigger-caret').click(function () {
        var element = $(this).parent('li');
        var elementUl = $(this).parent().parent('ul').parent().parent('.menu-wrap');
        element.addClass('is-open');
        $('body').addClass('scroll-fixed');
    });
    // var ulLiEm = '.menu-wrap > .menu-inner > ul > li';
    // $('.mbnav__inner > ' + ulLiEm + ' > em').on('click', function () {
    //     $('.mbnav__inner > .menu-wrap').css('--leftSlide', '100%');
    // });
    // $('.mbnav__inner > ' + ulLiEm + ' > ' + ulLiEm + ' > em').on('click', function () {
    //     $('.mbnav__inner > .menu-wrap').css('--leftSlide', '200%');
    // });
    // $('.mbnav__inner > ' + ulLiEm + ' > ' + ulLiEm + ' > ' + ulLiEm + ' > em').on('click', function () {
    //     $('.mbnav__inner > .menu-wrap').css('--leftSlide', '300%');
    // });

    $('.mbnav__inner .mbnav__caret ').on('click', function () {
        var menuLeftMove = $('.mbnav__inner > .menu-wrap');
        var backMove = menuLeftMove.css('--leftSlide');
        $('.mbnav__inner > .menu-wrap').css('--leftSlide', (parseInt(backMove) + 100) + '%');
    });
    $('.mbnav__inner .back-click').on('click', function () {
        $(this).parent('li').parent('.sub-menu').parent('.menu-inner').parent('.menu-wrap').parent('li').removeClass('is-open');
        var menuLeftMove = $('.mbnav__inner > .menu-wrap');
        var backMove = menuLeftMove.css('--leftSlide');
        menuLeftMove.css('--leftSlide', (parseInt(backMove) - 100) + '%');
    });
    $('.mbnav .menu-wrap > .menu-inner').css('padding-top', $('header.main-header').outerHeight());
});