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

    window.onscroll = function() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.getElementById('top').style.display = 'block';
        } else {
            document.getElementById('top').style.display = 'none';
        }
    };

    $('#topButton').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
