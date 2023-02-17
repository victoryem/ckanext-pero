$(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 95) {
        $("#site-header").addClass("nav-fixed");
        $("#site-header").addClass("bg-white");
        $("#site-header").removeClass("bg-transparent");
        $("#site").removeClass("boss");
    } else {
        $("#site-header").removeClass("nav-fixed");
        $("#site-header").addClass("bg-transparent");
        $("#site").addClass("boss");
    }
});

 

