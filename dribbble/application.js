// Write our base functions



function createShot(shot, i) {
	var shotContainer = $("<div class='shot-container' data-shot-key='data.shots["+i+"]'>");  
      
    var title = $("<div class='title'>").text(shot.title);
    var designer = $("<div class='designer'>").text(shot.player.name);
    var views = $("<div class='views'>").text(shot.views_count);
      	var viewsEye = $("<img class='views-image'>").attr("src", 'images/views.png');
      
    
    var image = $("<img class='image'>").attr("src", shot.image_url);
    
        
     $("#shots").append(shotContainer);
     $(shotContainer).append(image);
     
     $(shotContainer).click(function() {
		var key = $(this).data("shot-key");
		$("#info").text(key.title);
	}); 
	 
};



// When the page loads, add in our event handlers
$(function() {
    
    
    $.getJSON("http://api.dribbble.com/shots/popular?callback=?",function(data) {
    	console.log(data);
      for(var i=0;i<data.shots.length;i++) {

        createShot(data.shots[i], i);   
        	
      }
    });
    
    
    
	
});





