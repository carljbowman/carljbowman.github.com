// Write our base functions
function showProduct(name){
	var robot = Robots[name];
	$(".overlay").removeClass("hide");
	$(".details").removeClass("hide");
	changeDetails(robot);
};

function hideProduct(){
	$(".overlay").addClass("hide");
	$(".details").addClass("hide");
};

function changeDetails(robot){
	$("#detail-title").text(robot.title);
	$("#detail-image").attr("src", robot.image);
	$("#detail-description").text(robot.description);
	$("#detail-price").text("$" + robot.price);
};





// When the page loads, add in our event handlers
$(function() {



$(".product").click(function() {
	var name = $(this).data("product-id");
	showProduct(name);
});

$(".overlay").click(function() {
	hideProduct();
});



// ------------- CART --------------
var cart = { frog : 2, bird : 1 };


});