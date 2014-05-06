$(function() {


	// Width and Height of SVG
	var w = 960;
	var h = 500;
	var barPadding = 1;
	
	// Creating SVG 
	var svg = d3.select("#datavis")
 			 	.append("svg");
 			 	
 	    svg.attr("width", w)
 		   .attr("height", h);



 		   
 	// RenderGraph 
 	
 	var renderGraph = function(data) {
	 	
	 	svg.selectAll("rect")
			   .data(data)
			   .enter()
			   .append("rect")
			   .attr("x", function(d, i) {
			   		return i * (w / data.length);
			   })
			   .attr("y", function(d) {
			   		return h - (d * 4);
			   })
			   .attr("width", w / data.length - barPadding)
			   .attr("height", function(d) {
			   		return d * 4;
			   })
			   .attr("fill", "teal");
 	}	

});
   
 			 	
