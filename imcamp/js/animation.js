var skip = false,
    skipAll = false;
if (location.hash.substr(1) == "skip") {
    skip = true;
    skipAll = true;
    skipAllAni();
}

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

    // 跳轉方法
    // var hash = location.hash.substr(1);
    // console.log(hash);
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
                        }, 3500);
                    }, 3000);
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

function skipAllAni() {
    $(".logo").hide();
    $("#console").hide();
    $("#nav").hide();
    $(".clouds").hide();
    $("#sun").css("animation", "sunshine 4s linear infinite");
    $(".planet").fadeIn(1000);
    $("#rocket").fadeIn(1000);

    $(".planet")
        .on("mouseenter", function() {
            $(".planet").css("-webkit-animation-play-state", "paused")
                .css("animation-play-state", "paused");
            $(this).css("width", "25vmin");

        })
        .on("mouseleave", function() {
            $(".planet").css("-webkit-animation-play-state", "running")
                .css("animation-play-state", "running");
            $(this).css("width", "15vmin");
        })
        .on("click touchstart", function() {
            // stop all planets (maybe not necessary)
            $(".planet").each(function() {
                var el = $(this),
                    newone = el.clone(true),
                    loc = el.css("transform");

                newone.css({
                    "animation": "none",
                    "transform": loc
                });
                el.before(newone);
                el.remove();

                console.log(loc);
            });
            // landing on the planet, diplay the information
            var st = $(this).data("cate");

            $("#rocket").fadeOut(2000);

            $(".white-light").fadeIn(2000, function() {
                $("#sun").fadeOut(2000);
                $(".planet").fadeOut(2000, function() {
                    if (st == "information") {
                        window.location.href = "information/index.html";
                    } else if (st == "photos") {
                        window.location.href = "photos/index.html";
                    } else if (st == "signup") {
                        window.location.href = "signup/index.html";
                    } else if (st == "about") {
                        window.location.href = "about/index.html";
                    } else if (st == "course") {
                        window.location.href = "course/index.html";
                    }

                });
            });
        });
}

function enterInit() {
    window.scrollBy(0, -100);
    $("#nav").fadeOut(2000);
    $(".clouds").fadeOut(4000);
    $("#console").fadeOut(2000, function() {
        $("#sun").css("animation", "sun_shrink 2s linear forwards reverse");
        setTimeout(function() {
            // must set to 2000 !!!!
            $(".planet").fadeIn(500);
            $("#rocket").fadeIn(500);
            var el = $("#sun"),
                newone = el.clone(true);

            newone.css({
                "animation": "sunshine 4s linear infinite",
                "width": "30vmin",
                "top": "calc(50vh - 14.28vmin)",
                "left": "calc(50vw - 15vmin)"
            });
            el.before(newone);
            el.remove();

        }, 2000);
    });

    $(".planet")
        .on("mouseenter", function() {
            $(".planet").css("-webkit-animation-play-state", "paused")
                .css("animation-play-state", "paused");
            $(this).css("width", "25vmin");

        })
        .on("mouseleave", function() {
            $(".planet").css("-webkit-animation-play-state", "running")
                .css("animation-play-state", "running");
            $(this).css("width", "15vmin");
        })
        .on("click", function() {
            var offset = $(this).offset();

            // stop all planets (maybe not necessary)
            $(".planet").each(function() {
                var el = $(this),
                    newone = el.clone(true),
                    loc = el.css("transform");

                newone.css({
                    "animation": "none",
                    "transform": loc
                });
                el.before(newone);
                el.remove();

                console.log(loc);
            });
            // landing on the planet, diplay the information
            var st = $(this).data("cate");
            // land the rocket on the planet
            // var el = $("#rocket"),
            //     rocOff = el.offset(),
            //     newRocket = el.clone(true),
            //     rocBottom = $(window).height() - offset.top - newRocket.height()*Math.cos(57*Math.PI/180);
            // newRocket.css({
            //         "animation": "none"
            //     });
            // el.before(newRocket);
            
            // el.remove();

            // console.log(offset);
            // newRocket.css({"bottom": rocBottom, "left": offset.left});
            $("#rocket").fadeOut(2000);


            $(".white-light").fadeIn(2000, function() {
                $("#sun").fadeOut(2000);
                $(".planet").fadeOut(2000, function() {
                    if (st == "information") {
                        window.location.href = "information/index.html";
                    } else if (st == "photos") {
                        window.location.href = "photos/index.html";
                    } else if (st == "signup") {
                        window.location.href = "signup/index.html";
                    } else if (st == "about") {
                        window.location.href = "about/index.html";
                    } else if (st == "course") {
                        window.location.href = "course/index.html";
                    }

                });
            });
        });
}