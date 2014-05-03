// Write our base functions

var maxSalary = 0;

function createNode (location){

	
	// Row Container
	var salaryContainer = $("<div class='salary-container'>");
	
	// Text Information about Salaries 
	var salary = $("<div class='salary'>").text("$"+data[location][18]);
	var name = $("<div class='name'>").text(data[location][8]);
	var refNum = $("<div class='ref-number'>").text("Ref # "+location);
	
	
	var width = (parseFloat(data[location][18])/maxSalary*100)
	var graph = $("<div class='graph'>");
	var graphbar = $("<div class='graph-bar'>");
	
	$("#salaries").append(salaryContainer);
	$(salaryContainer).append(refNum, name, salary, graph);
	$(graph).append(graphbar);
		$(graphbar).css("width", width+"%");
	
	
	if (location % 2 === 0) {
		$(salaryContainer).addClass("even-row");
	}	
	
}




// When the page loads, add in our event handlers
$(function() {

	$(function() {
      for(var j=0;j<data.length;j++) {
		  maxSalary = Math.max(data[j][18], maxSalary);
      }
    });
    
	$(function() {
      for(var i=0;i<data.length;i++) {

        createNode(i);  
      }
    });
	
});





