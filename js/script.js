$(".navbar-toggler").on("click", function () {
    if ($("#menu").attr("src") == "images/icons/menu.png") {
        $("#menu").attr("src", "images/icons/close.png");
    } else {
        $("#menu").attr("src", "images/icons/menu.png");
    }
});

$(".toggle").on("click", function () {
    if ($(".toggle-img").attr("src") == "images/icons/sun.png") {
        $(".toggler").attr({ "src": "images/icons/toggle-on.png", "alt": "toggle-on" });
        $("body").css({ "background-image": "radial-gradient(circle, #131f22 25%, #16171a)" });
        $(".heading, .about-para, .toggle-para").css({ "color": "white" });
        $(".about-para").css({ "font-weight": "200" });
        $(".toggle-img").attr({ "src": "images/icons/moon.png", "alt": "moon" });
        $(".profileimage").css({ "box-shadow": "2px 10px 10px 5px #0f1012 " });
    } else {
        $("body").css({ "background-image": "none" });
        $(".heading, .about-para, .toggle-para").css({ "color": "#232b3a" });
        $(".about-para").css({ "font-weight": "300" });
        $(".profileimage").css({ "box-shadow": "2px 10px 10px 5px #5e6777" });
        $(".toggler").attr({ "src": "images/icons/toggle-off.png", "alt": "toggle-off" });
        $(".toggle-img").attr({ "src": "images/icons/sun.png", "alt": "sun" });
    }
});

