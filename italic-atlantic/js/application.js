// Write our base functions
function showProduct(title){
	var item = Items[title];
	$(".overlay").removeClass("hide");
	$(".details").removeClass("hide");
	editDetails(item);
};

function editDetails(item){
	var varient = "varient";
	var sizes = "sizes";
	$("#detail-title").text(item.title);
	$("#detail-image").attr("src", item.images[0])
	$("#detail-designer").text("Designed by " + item.designer);
	$("#detail-count").text(item.count + "/30 Avaliable");	
};


function hideProduct(){
	$(".overlay").addClass("hide");
	$(".details").addClass("hide");
};


// When the page loads, add in our event handlers
$(function() {



$(".item").click(function() {
	var key = $(this).data("product-id");

	showProduct(key);
});

$(".overlay").click(function() {
	hideProduct();
	$('.overlay').css( 'cursor', 'pointer' );
});


// Height Adjustment 

var heightCH2 = $(window).width() * .83; 
	$("#chapter2").css("height", heightCH2);
	
var heightCH3 = $(window).width() * 1.2; 
	$("#chapter3").css("height", heightCH3);

window.onresize = function() {
	var heightCH2 = $(window).width() * .83; 
	var heightCH3 = $(window).width() * 1.2; 
	$("#chapter2").css("height", heightCH2);
	$("#chapter3").css("height", heightCH3);
}


// Smooth Scroll Plugin

smoothScroll.init({
	speed: 1000, 
	easing: 'easeInOutQuint', 
	updateURL: false, 
	offset: 65
});

// Navigation Auto Hide on Scroll

$().showUp('.navbar', {
	upClass: 'navbar-show',
	downClass: 'navbar-hide'
});


//Cursor to Pointer on Elements
$('.item, .overlay, .detail-selector, #add-to-cart').css( 'cursor', 'pointer' );

});


