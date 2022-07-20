/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".fa-arrow-alt-circle-up").removeClass("invisible");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".fa-arrow-alt-circle-up").addClass("invisible");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// remove the focused state after click,
// otherwise bootstrap will still highlight the link
$("a").mouseup(function () {
    $(this).blur();
})

function screenResize() {
    var dropdowns = document.getElementsByClassName("dropdown");
    if ($(window).innerWidth() > 1100) {
        $(".navbar-main-collapse").removeClass("blackdiv");
        $(".navbar-toggler").removeClass("hidden").addClass("hidden");
        $(".small-menu").removeClass("hidden").addClass("hidden");
        $(".full-menu").removeClass("hidden")
    } else {
        $(".navbar-main-collapse").removeClass("blackdiv").addClass("blackdiv");
        $(".navbar-toggler").removeClass("hidden");
        $(".small-menu").removeClass("hidden");
        $(".full-menu").removeClass("hidden").addClass("hidden");
    }
}

// Fire.
screenResize();

$(window).resize(function () {
    screenResize();
});

$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});