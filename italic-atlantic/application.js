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

smoothScroll.init({
	speed: 800, 
	easing: 'easeInOutQuint', // Easing pattern to use
	updateURL: false, // Boolean. Whether or not to update the URL with the anchor hash on scroll
	offset: 65
});

$(".item").click(function() {
	var key = $(this).data("product-id");

	showProduct(key);
});

$(".overlay").click(function() {
	hideProduct();
	$('.overlay').css( 'cursor', 'pointer' );
});


//Cursor to Pointer on Elements
$('.item, .overlay, .detail-selector, #add-to-cart').css( 'cursor', 'pointer' );

});


