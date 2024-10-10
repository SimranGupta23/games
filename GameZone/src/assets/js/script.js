$(".navbar-toggler").click(function () {
    $(this).toggleClass("menu-opened");
    $("#header .collapse:not(.show)").toggleClass("menu-show");
    $("body").toggleClass("scroll-off");
    $(".overlay").fadeToggle();
});

$(".overlay").click(function () {
    $(this).fadeToggle();
    $("#header .collapse:not(.show)").toggleClass("menu-show");
    $("body").toggleClass("scroll-off");
    $(".navbar-toggler").toggleClass("menu-opened");
});

