$(function() {
	setTimeout(function() { shrink() }, 1000);

});

function shrink() {
	setTimeout(function(){$("#logo-github").css("animation", "logo_enlarge 2s ease-in forwards"); }, 4000);	
	setTimeout(function(){$("#logo-fb").css("animation", "logo_enlarge 2s ease-in forwards");}, 3000);
	setTimeout(function(){$("#logo-google").css("animation", "logo_enlarge 2s ease-in forwards"); }, 2000);
	setTimeout(function(){$("#logo-spotify").css("animation", "logo_enlarge 2s ease-in forwards"); }, 1000);
	$("#logo-youtube").css("animation", "logo_enlarge 2s ease-in forwards");
	setTimeout(function(){
		$("#sun").css("animation", "sun_shrink 4s linear forwards");
		$("#logo-github").css("display", "none");
		$("#logo-fb").css("display", "none");
		$("#logo-google").css("display", "none");
		$("#logo-spotify").css("display", "none");
		$("#logo-youtube").css("display", "none");
	}, 6000);
}