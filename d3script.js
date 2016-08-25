
$( document ).ready(function() {
  // Your d3 code here


//var mysvg = d3.select("svg")
 //.attr("width", 500)
   // .attr("height", 500);
    

//var img = mysvg.append("svg:image")
   // .attr("xlink:href", "/IC-8pin.svg"); //
	
    	
		    $("#mybut").click(add_part);
			$("#wire").click(add_wire);
			//$("#remove").click(remove_part);

			

			
			
			
			
			function add_part ()
			{
d3.select("svg")
.append("object")
.attr("data", "/parts/IC-8pin.svg")
.attr("type", "image/svg+xml");
			
			
			} //end of add_part
	
		function add_wire()
		 {
			 
			 
			 
		 } //end of add_wire
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		});