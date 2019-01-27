var skip = false;

$(function() {
    $("#skip-btn").hover(function() {
        $("#skip-img").css("transform", "translate(5rem, -1.2rem)");
    }, function() {
        $("#skip-img").css("transform", "");
    });
    $("#skip-btn").click(function() {
        skipAni();
        skip = true;
        // clearTimeout(begin);
    });
});


$(window).on('load', function() {
    if (!skip)
        aniInit();

    setTimeout(function() {
        if (!skip)
            shrink()
    }, 5000);

});

function shrink() {
    setTimeout(function() { $("#logo-github").css("animation", "logo_enlarge 2s forwards"); }, 2000);
    setTimeout(function() { $("#logo-fb").css("animation", "logo_enlarge 2s forwards"); }, 1000);
    setTimeout(function() { $("#logo-youtube").css("animation", "logo_enlarge 2s forwards"); }, 3000);
    $("#logo-google").css("animation", "logo_enlarge 2s forwards");
    setTimeout(function() { $("#logo-spotify").css("animation", "logo_enlarge 2s forwards"); }, 4000);

    setTimeout(function() {
        if (!skip) {
            $("#sun").css("animation", "sun_shrink 4s linear forwards");
            $("#console").css("animation", "console_top 4s linear forwards")
                .fadeIn(4000);
            $("#logo-github").css("display", "none");
            $("#logo-fb").css("display", "none");
            $("#logo-google").css("display", "none");
            $("#logo-spotify").css("display", "none");
            $("#logo-youtube").css("display", "none");

            $("#console").one("click", function() {
                Typer.autoAddText(500);
                setTimeout(function() {
                    Typer.text = "Are you sure? [Y/N]: ";
                    Typer.index = 0;
                    Typer.responseText(100, oriStr = $("#console").html());
                    setTimeout(function() {
                        Typer.text = "Y<br/><br/>Welcome to 2019 NTU IM CAMP !!!";
                        Typer.index = 0;
                        var x = new Audio('audio/typing.mp3');
                        x.play();
                        Typer.responseText(100, oriStr = $("#console").html());

                        setTimeout(function() {
                            var el = $("#sun"),
                                newone = el.clone(true);
                            el.remove();
                            newone.css({
                                "animation": "",
                                "width": "20vmin",
                                "top": "20vh",
                                "left": "calc(50vw - 10vmin)"
                            });
                            $("#logo-fb").before(newone);
                            enterInit();
                        }, 3000);
                    }, 2000);
                }, 3000);
            });
        }
    }, 6000);
}

function aniInit() {
    $("#logo-github").css("animation", "github-init 2s ease-in-out forwards");
    $("#logo-fb").css("animation", "fb-init 2s ease-in-out forwards");
    $("#logo-google").css("animation", "google-init 2s ease-in-out forwards");
    $("#logo-spotify").css("animation", "spotify-init 2s ease-in-out forwards");
    $("#logo-youtube").css("animation", "youtube-init 2s ease-in-out forwards");
    $(".logo").fadeIn(2500);

    setTimeout(function() {
        $("#logo-github").css("animation", "myOrbit 5s linear infinite");
        $("#logo-fb").css("animation", "myOrbit 5s linear -1s infinite");
        $("#logo-google").css("animation", "myOrbit 5s linear -2s infinite");
        $("#logo-spotify").css("animation", "myOrbit 5s linear -3s infinite");
        $("#logo-youtube").css("animation", "myOrbit 5s linear -4s infinite");
    }, 2000);
}

function skipAni() {
    $(".logo").hide();
    $("#console").show()
        .html("ntu_im_camp:/$ launch camp<br>Are you sure? [Y/N]: Y<br><br>Welcome to 2019 NTU IM CAMP !!!")
        .css("top", "50vh");
    $("#sun").css("width", "20vmin")
        .css("top", "20vh")
        .css("left", "calc(50vw - 10vmin)");

    setTimeout(function() { enterInit(); }, 1000);
}

function enterInit() {
    $("#nav").fadeOut(2000);
    $(".clouds").fadeOut(4000);
    $("#console").fadeOut(2000, function() {
        $("#sun").css("animation", "sun_shrink 2s linear forwards reverse");
        setTimeout(function(){
            $(".planet").fadeIn(2000);
        }, 2000);
    });

    $(".planet")
    .mouseenter(function(){
        $(".planet").css("-webkit-animation-play-state", "paused")
                    .css("animation-play-state", "paused");

    })
    .mouseleave(function(){
        $(".planet").css("-webkit-animation-play-state", "running")
                    .css("animation-play-state", "running");
    });
}