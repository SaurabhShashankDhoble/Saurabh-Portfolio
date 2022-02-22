$(".navbar-toggler").on("click", function () {
    if ($("#menu").attr("src") == "images/icons/menu.png") {
        $("#menu").attr("src", "images/icons/close.png");
    } else {
        $("#menu").attr("src", "images/icons/menu.png");
    }
})