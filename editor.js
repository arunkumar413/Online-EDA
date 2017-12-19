/*globals groups:true components*/
$(document).ready(function() {
 s = Snap("#mycanvas");
 components = [];   // holds all the parts added on the canvas
 groups = []; // parts are svg grouped for working with snapsvg

	$("#mybut").click(add_part);
	$("#wire").click(add_wire);
	$("#remove").click(remove_part);
	$("#move").click(make_drag);
	//$("#zoom").click(zoom_inc);
	//$("#zoom").click(zoom_dec);



	function add_part() {
		var selection = document.getElementById("mysel");
		var selection2 = selection.options[selection.selectedIndex].text;
        var temp= new parts[selection2]();
       components.push(temp);
       groups.push(temp.grp);// add the part in to the array
		

	} //end of add_part


	//start of drag handlers	
	var drag_move = function(dx, dy) {
		this.attr({
			transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
		});
	};

	var drag_start = function() {
		this.data('origTransform', this.transform().local);
	};

	var drag_stop = function(i,event) {
	    console.log("finished dragging");
	    console.log(i);
	    //drag_par_x = this.attr("transform").globalMatrix.e; //transformed x
		//drag_par_y = this.attr("transform").globalMatrix.f; //transformed y
	}; // end of drag handlers

	

	function add_wire() {

	} //end of add_wire

	function make_drag(){
	    for (var i=0;i<groups.length;i++){
	        groups[i].drag(drag_move,drag_start,drag_stop.bind(null,i));
	    } //end of make_drag
    }


function remove_part(){
    		$('html,body').css('cursor', 'not-allowed');
    		for (var i=0;i<groups.length;i++){
	        groups[i].click(rem);
	        delete components[i];
	    } //en
	        
}

function rem(){
    this.remove();  // remove the clicked part
    $('html,body').css('cursor', 'default');

}


}); //final end
