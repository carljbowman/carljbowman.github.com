// Cart / Gobal Variables

var Cart = { };

var totalQuantity = 0;
var totalCost = 0;


// Write our base functions

function checkOut() {
  hideCart();
  var stripeKey = 'pk_test_lZEL9jdjUMjlSigqLLAeV5f0';

  var description = $("#total-price").text();
  var amount = totalCost * 100;

  var handler = StripeCheckout.configure({
    key: stripeKey,
    image: 'http://carljbowman.github.io/italic-atlantic/images/captainSm.png',
    token: function(token, args) {
      $.post("/buy", {
        token: token.id,
        amount: amount,
        description: description
      },function(data) {
        alert(data.message);
      });
    }
  });


  handler.open({
    name: 'Italic Atlantic',
    description: description,
    amount: amount
  });

}




function showCart(){
	$(".overlay").removeClass("hide");
	$(".cart").removeClass("hide");
	editCart();
};


function hideCart(){
	$(".overlay").addClass("hide");
	$(".cart").addClass("hide");
};


function editCart() {	
	$("#cart-item-total").text("Total: $"+totalCost+".00");
	$("#cart-items").empty();	
	
	if (totalQuantity <= 0) {
		$("#cart-item-total").hide();
		$("#total").hide();
		$("#cart-items").append("<p>Ayyyye! Ye' got no Cargo.</p>");
	}
	
	else {
	$("#cart-item-total").show();
	$("#total").show();

	for(var key in Cart) {
     // Lookup the value from the object
     var shirt = Items[key]; 
	 
	 $("#cart-items").append("<div class='cart-item'><div class='cart-img-crop'><img class='cart-img' src='"+shirt.images[0]+"' alt='"+key+"'></div><div class='cart-item-details'><h2 class='cart-item-title'>"+shirt.title+"</h2><h2 class='cart-item-varient'>Size: "+shirt.sizes[0]+"</h2><h2 class='cart-item-varient'>Color: "+shirt.varient[0]+"</h2><h2 class='cart-item-price'>Price: $"+shirt.price+" x Quantity: 1</h2><h2 class='cart-item-subtotal'>Subtotal $25.00</h2></div></div>");
	 
   }}

};



function showProduct(title){
	var item = Items[title];
	$(".overlay").removeClass("hide");
	$(".details").removeClass("hide");
	editDetails(item);
	
	$("#add-to-cart").click(function(){
		addItem(title);
	});
};

function editDetails(item){
	var varient = "varient";
	var sizes = "sizes";
	$("#detail-title").text(item.title);
	$("#detail-image").attr("src", item.images[0])
	$("#detail-designer").text("Designed by " + item.designer);
	$("#detail-count").text(item.count + "/30 Avaliable");	
	$("#detail-varient").empty();
		for (var i=0; i<item.varient.length; i++) {
			var varient = item.varient[i];
			$("#detail-varient").append(new Option(varient, varient));
		}
	$("#limited").hide();	
};

function addItem(title){
	
	if(!Cart[title]) { Cart[title] = 0; Cart[title] += 1;}
	
	else if (Cart[title] >= 1) { $("#limited").show(); }
		
	updateCart();
};

function updateCart() {
	
	totalQuantity = 0;
	totalCost = 0;
	
	for(var key in Cart) {
     // Lookup the value from the object
     var value = Cart[key]; 
     
     totalCost += (value*Items[key].price)
     
     totalQuantity += value;
   }
   
   
   $("#cargo").text("Cargo: " + totalQuantity);
   $("#total-price").text("$" + totalCost.toFixed(2));
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
	hideCart();
});

$("#detail-close").click(function() {
	hideProduct();
});

$("#cart-close").click(function() {
	hideCart();
});

$("#cart").click(function() {	
	if(!$(".details").hasClass("hide")) {hideProduct()};	
	showCart();
});

$("#checkout").click(function() {
	checkOut();
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
});

// Navigation Auto Hide on Scroll

$().showUp('.navbar', {
	upClass: 'navbar-show',
	downClass: 'navbar-hide'
});


//Cursor to Pointer on Elements
$('.item, .overlay, .detail-selector, #add-to-cart, #detail-close, #checkout, #cart-close, #cart').css( 'cursor', 'pointer' );

});


