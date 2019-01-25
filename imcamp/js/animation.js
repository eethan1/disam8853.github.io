$(window).on('load', function() {
    aniInit();

    setTimeout(function() { shrink() }, 5000);

});

function shrink() {
    setTimeout(function() { $("#logo-github").css("animation", "logo_enlarge 2s forwards"); }, 2000);
    setTimeout(function() { $("#logo-fb").css("animation", "logo_enlarge 2s forwards"); }, 1000);
    setTimeout(function() { $("#logo-youtube").css("animation", "logo_enlarge 2s forwards"); }, 3000);
    $("#logo-google").css("animation", "logo_enlarge 2s forwards");
    setTimeout(function() { $("#logo-spotify").css("animation", "logo_enlarge 2s forwards"); }, 4000);

    setTimeout(function() {
        $("#sun").css("animation", "sun_shrink 4s linear forwards");
        $("#console").css("animation", "console_top 4s linear forwards")
            .fadeIn(4000);
        $("#logo-github").css("display", "none");
        $("#logo-fb").css("display", "none");
        $("#logo-google").css("display", "none");
        $("#logo-spotify").css("display", "none");
        $("#logo-youtube").css("display", "none");

        setTimeout(function() { Typer.autoAddText(100); }, 5000);
    }, 6000);
}

function aniInit() {
    $("#logo-github").css("animation", "github-init 2s linear forwards");
    $("#logo-fb").css("animation", "fb-init 2s linear forwards");
    $("#logo-google").css("animation", "google-init 2s linear forwards");
    $("#logo-spotify").css("animation", "spotify-init 2s linear forwards");
    $("#logo-youtube").css("animation", "youtube-init 2s linear forwards");
    $(".logo").fadeIn(2000);

    setTimeout(function() {
        $("#logo-github").css("animation", "myOrbit 5s linear infinite");
        $("#logo-fb").css("animation", "myOrbit 5s linear -1s infinite");
        $("#logo-google").css("animation", "myOrbit 5s linear -2s infinite");
        $("#logo-spotify").css("animation", "myOrbit 5s linear -3s infinite");
        $("#logo-youtube").css("animation", "myOrbit 5s linear -4s infinite");
    }, 2000);



}