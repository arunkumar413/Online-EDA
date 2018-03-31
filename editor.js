$(document).ready(function() {
 s = Snap("#mycanvas");
 g = new Grid();
 components = [];   // holds all the parts added on the canvas
 groups = []; // parts are svg grouped for working with snapsvg
 parts = {ic8pin: IC8pin,resistor:Resistor};
 command=' ';
	$("#mybut").click(add_part);
	//$("#wire").click(add_wire);
	//$("#zoom").click(zoom_inc);
	//$("#zoom").click(zoom_dec);
    $('#remove').click({param: 'rem'}, set_command);
    $('#rotate').click({param:'rotate'},set_command);





	function add_part() {
		var selection = document.getElementById("mysel");
		var selection2 = selection.options[selection.selectedIndex].text;
        var temp= new parts[selection2]();
       components.push(temp);
       groups.push(temp.grp);// add the part in to the array
	} //end of add_part



	function set_command(evt){
        command=evt.data.param;
    }







}); //final end
