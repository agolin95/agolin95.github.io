// Cache selectors outside callback for performance. 
var $window = $(window);
var aboutsectionTop = $('#aboutsection').offset().top;
var somervillesectionTop = $('#somervillesection').offset().top;

$window.resize(function() {
	aboutsectionTop = $('#aboutsection').offset().top;
   	somervillesectionTop = $('#somervillesection').offset().top;
});

$window.scroll(function() {
	$("#aboutsection").toggleClass('sticky', $window.scrollTop() > aboutsectionTop);
	$("#somervillesection").toggleClass('sticky', $window.scrollTop() > aboutsectionTop);
});

