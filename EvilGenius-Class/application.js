// Write our base functions
function showProduct(name){
	var robot = Robots[name];
	$(".overlay").removeClass("hide");
	$(".details").removeClass("hide");
	changeDetails(robot);
	
	$("#add-to-cart").click(function(){
		addItem(name);
	});
};

function hideProduct(){
	$(".overlay").addClass("hide");
	$(".details").addClass("hide");
	$("#add-to-cart").off("click");
};

function changeDetails(robot){
	$("#detail-title").text(robot.title);
	$("#detail-image").attr("src", robot.image);
	$("#detail-description").text(robot.description);
	$("#detail-price").text("$" + robot.price);
};


function addItem(name){
	var quantity = parseInt($("#detail-quantity").val());
	
	if(!myCart[name]) { myCart[name] = 0; }
	myCart[name] += quantity;
	
	updateCart();
};

function updateCart() {
	
	totalQuantity = 0;
	totalCost = 0;
	
	for(var key in myCart) {
     // Lookup the value from the object
     var value = myCart[key]; 
     
     totalCost += (value*Robots[key].price)
     
     totalQuantity += value;
   }
   
   
   $("#cart").text("Cart has " + totalQuantity + " item(s). Costs: $" + totalCost.toFixed(2));
};



// ------------- CART --------------
var myCart = { };

var totalQuantity = 0;
var totalCost = 0;


// When the page loads, add in our event handlers
$(function() {

$(".product").click(function() {
	var name = $(this).data("product-id");
	showProduct(name);
});

$(".overlay").click(function() {
	hideProduct();
});





});