$(document).ready(function() {
	s = Snap("#mycanvas");
    components = [];
    var recent;

	$("#mybut").click(add_part);
	$("#wire").click(add_wire);
	$("#remove").click(remove_part);
	$("#move").click(move);
	//$("#zoom").click(zoom_inc);
	//$("#zoom").click(zoom_dec);



	function add_part() {
		var selection = document.getElementById("mysel");
		var selection2 = selection.options[selection.selectedIndex].text;
        var temp=parts[selection2]();
       console.log(temp);
       components.push(temp);
       recent = components.length-1
       components[recent].drag();
		

	} //end of add_part


	//start of drag handlers	
	var drag_move = function(dx, dy) {
		this.attr({
			transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
		});
	}

	var start = function() {
		this.data('origTransform', this.transform().local);
	}

	var drag_stop = function() {
		
	} // end of drag handlers

	function drag_part() {

	} //end of drag part

	function add_wire() {
		
		

	} //end of add_wire

	


}); //final end
