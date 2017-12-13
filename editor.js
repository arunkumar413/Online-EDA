$(document).ready(function() {
	s = Snap("#mycanvas");
    components = [];   // holds all the parts added on the canvas


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
       components.push(temp); // add the part in to the array
       make_drag();
		

	} //end of add_part


	//start of drag handlers	
	var drag_move = function(dx, dy) {
		this.attr({
			transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
		});
	}

	var drag_start = function() {
		this.data('origTransform', this.transform().local);
	}

	var drag_stop = function() {
	    console.log("finished dragging");
	    //drag_par_x = this.attr("transform").globalMatrix.e; //transformed x
		//drag_par_y = this.attr("transform").globalMatrix.f; //transformed y
	} // end of drag handlers

	

	function add_wire() {

	} //end of add_wire

	function make_drag(drag_move,drag_start,drag_stop){
	    for (i=0;i<components.length;i++){
	        components[i].drag()
	    } //end of make_drag
    }


function remove_part(){
    		$('html,body').css('cursor', 'not-allowed');
    		for (i=0;i<components.length;i++){
	        components[i].click(rem);
	    } //en
	        
}

function rem(){
    this.remove();
    $('html,body').css('cursor', 'default');

}


}); //final end
