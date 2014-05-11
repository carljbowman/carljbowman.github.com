// Write our base functions


// When the page loads, add in our event handlers
$(function() {
    
   	$(".toggle").click(function() {
		var key = $(this).data("type-id");
		
		if ($(this).hasClass(key)){
			toggleOff(key);
			$(this).removeClass(key);
		}
		
		else {
			toggleOn(key);
			$(this).addClass(key);
		}
	});
    
	
});





