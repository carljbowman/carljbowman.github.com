$(function(){


	// Prices of Items
	var prices = { "Shoes": 20, "Hat": 10, "Socks": 5 };

	// Users Cart
	var cart = { "Shoes": 2, "Hat": 1, "Socks": 3 };

	//Alerts User When Item added to Cart
	$("button").click(function() {
    var item = $(this).data("type");
    alert("Added " + item);
	});

	
	//Appends 1 Item to the Page
	function showItem(name, quantity, price) {
    var item = $("<div class='item'>");
    
    item.append( $("<div class='name'>").text(name) );
    item.append( $("<div class='price'>").text(quantity + " X $" + price + "=") );
    item.append( $("<div class='subtotal''>").text("$" + (quantity * price)) );    
    
    $(".cart").append(item);
	}
	
	
	// Calling ShowCart
	showCart(cart);
	
	
	function showCart(items) {
		for(var itemName in items) {
			var name = itemName;
			var quantity = items[itemName];
			var price = prices[itemName];
			showItem(name, quantity, price);		
		}
	}
	
});