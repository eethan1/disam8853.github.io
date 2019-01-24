// setInterval(function() {
// 	var console = $("#console");
// 	var cont = console.html();
//     if (cont.substring(cont.length - 1, cont.length) === "|") // if last char is the cursor
//         console.html(console.html().substring(0, cont.length - 1)); // remove it
//     else
//     	$("#console").append("|");// else write it
// }, 500); // initialize timer for blinking cursor


$(function() {
	$("#cli").keyup(function(e) {
		if (e.which == 13) { // ENTER
			console.log("Adsf");

			var command = $("#cli").val();

			$("#cli").val("");

			if (command == "NTUIM") {
				$("#cli").val("welcome to NTUIM!");
			}
		}
	});
});