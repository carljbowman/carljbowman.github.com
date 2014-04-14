// Write our base functions



function createShot(shot, i) {
	var shotContainer = $("<div class='shot-container' data-shot-key='data.shots["+i+"]'>");  
      
    var title = $("<div class='title'>").text(shot.title);
    var designer = $("<div class='designer'>").text(shot.player.name);
    var designerPhoto = $("<img class='designerPhoto'>").attr("src", shot.player.avatar_url);
    var info = $("<div class='title'>").text(shot.title);
    var views = $("<div class='views'>").text(shot.views_count);
      	var viewsEye = $("<img class='views-image'>").attr("src", 'images/views.png');
      
    
    var image = $("<img class='image'>").attr("src", shot.image_url);
    var imagelg = $("<img class='imagelg'>").attr("src", shot.image_url);
    
        
     $("#shots").append(shotContainer);
     $(shotContainer).append(image);
     
     $(shotContainer).mouseenter(function() {
		$("#info").empty().fadeIn(500).append(designerPhoto, designer, title, views, viewsEye);
		
	}); 
	
	$(shotContainer).click(function() {
		$("#overlay").empty().slideDown(1000).append(imagelg);
	}); 
	
	$("#overlay").click(function() {
		$("#overlay").slideUp(1000);
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





