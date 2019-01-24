$(function() {
	setTimeout(function() { shrink() }, 1000);

});

function shrink() {
	setTimeout(function(){$("#logo-github").css("animation", "logo_enlarge 2s forwards"); }, 4000);	
	setTimeout(function(){$("#logo-fb").css("animation", "logo_enlarge 2s forwards");}, 3000);
	setTimeout(function(){$("#logo-google").css("animation", "logo_enlarge 2s forwards"); }, 2000);
	setTimeout(function(){$("#logo-spotify").css("animation", "logo_enlarge 2s forwards"); }, 1000);
	$("#logo-youtube").css("animation", "logo_enlarge 2s forwards");
	setTimeout(function(){
		$("#sun").css("animation", "sun_shrink 4s linear forwards");
		$("#console").css("animation", "console_top 4s linear forwards")
					 .fadeIn(4000);
		$("#logo-github").css("display", "none");
		$("#logo-fb").css("display", "none");
		$("#logo-google").css("display", "none");
		$("#logo-spotify").css("display", "none");
		$("#logo-youtube").css("display", "none");

		setTimeout(function(){Typer.autoAddText(800);}, 5000);
	}, 6000);
}