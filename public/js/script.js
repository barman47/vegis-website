$(document).ready(function () {
    $('.sidenav').sidenav();
    var header = $("nav");
    var links = $('.links');
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
            links.addClass('scrolled-links');
        } else {
            header.removeClass("scrolled");
            links.removeClass('scrolled-links');
        }
    });
});
