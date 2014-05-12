// Write our base functions


// When the page loads, add in our event handlers
$(function() {

    $('*[data-type-id="helvetica"').delay(500).queue(function(){
    													$(this).addClass("helvetica");
    													toggleOn("helvetica");
    													});
    													
    $('*[data-type-id="futura"').delay(1000).queue(function(){
    													$(this).addClass("futura");
    													toggleOn("futura");
    													});
    													
    $('*[data-type-id="knockout"').delay(1500).queue(function(){
    													$(this).addClass("knockout");
    													toggleOn("knockout");
    													});
    													
    $('*[data-type-id="din"').delay(2000).queue(function(){
    													$(this).addClass("din");
    													toggleOn("din");
    													});												
    $('*[data-type-id="opensans"').delay(2500).queue(function(){
    													$(this).addClass("opensans");
    													toggleOn("opensans");
    													});																
    
    
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





