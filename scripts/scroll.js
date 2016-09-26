// Cache selectors outside callback for performance. 
var $window = $(window);
var aboutsectionTop = $('#aboutsection').offset().top;
var somervillesectionTop;
var worksectionTop;
var wmfosectionTop;

$(document).ready (function() {
	var $window = $(window);
	var aboutsectionTop = $('#aboutsection').offset().top;
	var somervillesectionTop;
	var worksectionTop;
	var wmfosectionTop;
	if ($window.width() > (3/2)*$window.height()) {
		$("#musicsection").addClass("verticalmusic");
		$("#recentTracks").addClass("verticalmusic");
		$(".hello").css("font-size", "9vh")
		$(".abouttext").css("font-size", "2vh")
		$(".somervilletext").css("font-size", "1.8vh")
		$(".wmfotext").css("font-size", "2vh")


		$(".abouttext").css("line-height", "7vh")
		$(".somervilletext").css("line-height", "7vh")
		$(".wmfotext").css("line-height", "7vh")
	}

});


$window.resize(function() {
	aboutsectionTop = $('#aboutsection').offset().top;
   	somervillesectionTop = $('#somervillesection').offset().top;
   	worksectionTop = $('#somervillesection').offset().top;

   	$window.scrollTop(0);

   	if ($window.width() > (3/2)*$window.height()) {
		$("#musicsection").addClass("verticalmusic");
		$("#recentTracks").addClass("verticalmusic");
		$(".hello").css("font-size", "9vh");
		$(".abouttext").css("font-size", "2vh");
		$(".somervilletext").css("font-size", "1.8vh")
		$(".wmfotext").css("font-size", "2vh")

		$(".abouttext").css("line-height", "7vh")
		$(".somervilletext").css("line-height", "7vh")
		$(".wmfotext").css("line-height", "7vh")

	}else {
		$("#musicsection").removeClass("verticalmusic");
		$("#recentTracks").removeClass("verticalmusic");
		$(".hello").css("font-size", "6vw");
		$(".abouttext").css("font-size", "1.5vw");
		$(".somervilletext").css("font-size", "1.3vw")
		$(".wmfotext").css("font-size", "1.5vw");

		$(".abouttext").css("line-height", "4.5vw")
		$(".somervilletext").css("line-height", "5vw")
		$(".wmfotext").css("line-height", "5vw")
	}
});

$window.scroll(function() {

	worksectionTop = $('#worksection').offset().top;
	wmfosectionTop = $('#wmfosection').offset().top;
	//SCROLL DOWN

	if ($window.scrollTop() > aboutsectionTop) {
		$("#aboutsection").addClass('sticky');
		$("#somervillesection").addClass('poststicky');
	}
	if ($('#aboutsection').attr("class").includes("sticky") && !$('#aboutsection').attr("class").includes("donesticky")) {
		somervillesectionTop = $('#somervillesection').offset().top;
	}
	if ($window.scrollTop() > somervillesectionTop) {
		$("#somervillesection").addClass('sticky');
		$("#worksection").addClass('poststicky');
		$("#aboutsection").addClass('donesticky');
	}

	if ($window.scrollTop() < somervillesectionTop) {
		$("#somervillesection").removeClass('sticky');
		$("#worksection").removeClass('poststicky');
		$("#aboutsection").removeClass('donesticky');
	}

	if ($window.scrollTop() < aboutsectionTop) {
		$("#aboutsection").removeClass('sticky');
		$("#somervillesection").removeClass('poststicky');
	}

	if ($window.width() < (3/2)*$window.height()) {

	 	if ($window.scrollTop() + (2/3)*$window.width() > $window.width() * 3 + $window.height()) {
			$("#musicsection").fadeIn("fast", function() {});
		}
		else if ($window.scrollTop() + (2/3)*$window.width() > $window.width() * 3.2) {
			$("#musicsection").fadeOut("fast", function() {});
		}
		else if ($window.scrollTop() + (2/3)*$window.width() + $window.height() > $window.width() * 3.2) {
			$("#musicsection").fadeIn("fast", function() {});
		}
	}


	//console.log($('#worksection').offset().top + " ---- " + (3.41017* $window.height()- ($window.height()- (2/3)*$window.width())));
	
	// if ($window.scrollTop() + $window.height()  < worksectionTop && !$('#aboutsection').attr("class").includes("donesticky")){
	// 	$("#musicsection").fadeIn("fast", function() {});
	// }
	// else if ($window.scrollTop() + $window.height()  > wmfosectionTop + .2*$window.height() && $('#aboutsection').attr("class").includes("donesticky")){
	// 	$("#musicsection").fadeIn("fast", function() {});
	// }
	// else if($window.scrollTop() + $window.height() > worksectionTop && $('#aboutsection').attr("class").includes("donesticky")) {
	// 	$("#musicsection").fadeOut("fast", function() {});
	// }

	// if($window.scrollTop() + ($window.width()*2)/3 > worksectionTop + $window.height()) {
	// 	console.log("here");
	// 	index = 4;
	// 	$("#musicsection").css("z-index", index);
	// }
	// else if ($window.scrollTop() + $window.height() > $('#worksection').offset().top + 1.4*$window.height()) {
	// 	console.log("else if");
	// 	index = -1;
	// 	$("#musicsection").css("z-index", index);
	// }




	// if ($('#somervillesection').attr("class").includes("sticky") && !$('#somervillesection').attr("class").includes("donesticky")) {
	// 	worksectionTop = $('#worksection').offset().top;
	// }
	// if ($window.scrollTop() > worksectionTop) {
	// 	console.log("about stickify");

	// 	$("#worksection").addClass('sticky');
	// 	$("#wmfosection").addClass('poststicky');
	// 	$("#somervillesection").addClass('donesticky');
		
	// }


	// if ($('#worksection').attr("class").includes("sticky") && !$('#worksection').attr("class").includes("donesticky")) {
	// 	wmfosectionTop = $('#wmfosection').offset().top;
	// }
	// if ($window.scrollTop() > wmfosectionTop) {
	// 	console.log("about stickify");

	// 	$("#wmfosection").addClass('sticky');
	// 	//$("#worksection").addClass('donesticky');
	// 	if ($window.scrollTop() + $(window).height() == $(document).height()) {
	// 		$("#wmfosection").addClass('stickyfinish');
	// 	}
	// }

	//SCROLL UP

	// if ($window.scrollTop() < wmfosectionTop & $('#wmfosection').attr("class").includes("stickyfinish")) {
	// 	console.log("in second");
	// 	$("#wmfosection").removeClass('stickyfinish');
	// 	$("#wmfosection").removeClass('sticky');
	// 	$("#worksection").removeClass('donesticky');
	// }

	// if (!$('#somervillesection').attr("class").includes("sticky") && $('#somervillesection').attr("class").includes("donesticky")) {
	// 	worksectionTop = $('#worksection').offset().top;
	// }
	// if ($window.scrollTop() < worksectionTop) {
	// 	$("#wmfosection").removeClass('poststicky');
	// 	$("#somervillesection").removeClass('donesticky');
	// }

	// if (!$('#aboutsection').attr("class").includes("sticky") && $('#aboutsection').attr("class").includes("donesticky")) {
	// 	somervillesectionTop = $('#somervillesection').offset().top;
	// }
	// if ($window.scrollTop() < somervillesectionTop) {
	// 	$("#somervillesection").removeClass('sticky');
	// 	$("#worksection").removeClass('poststicky');
	// 	$("#aboutsection").removeClass('donesticky');
	// }

	// if ($('#aboutsection').attr("class").includes("donesticky")) {
	// 	aboutsectionTop = $('#aboutsection').offset().top;
	// }

	// if ($window.scrollTop() < aboutsectionTop) {
	// 	$("#aboutsection").removeClass('sticky');
	// 	$("#somervillesection").removeClass('poststicky');
	// }


});

