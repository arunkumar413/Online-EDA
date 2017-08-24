var part = [];  							//used for selecting the part
var part_id;   							//stores the unique id of each part
var get_pins;  							// used for selecting the pins
var total_pins; 							//total number of pins
var pin_id; 								//stores pin id
var s;   								// 
var partcount =0;
var c_points;         					// connection points of all pins
var l= 0; 								//is used to count the number mouse clicks made while drawing the wire
var clickx =[];					
var clicky=[];
var wire=[];   							//stores the wires 
var w= -1; 								//wire index;
var wire_pts=[];		// wire click points
var pt =0;	
var n = 0; //length or the wire_pts array		
var all_cons = []; //stores all the wire connection information
var newcon=[]; //stores the new current connection informatino. This data will be pushed into the allcons
var t=[];   //  variable to store the parsed value
var m ='';
var wires= [];
var final_x;
var final_y;
var chk_clk = false;
z=-1;
var r=-1;  //index of t
var clicked_part;


$( document ).ready(function() {
		    $("#mybut").click(add_part);
			$("#wire").click(add_wire);
			//$("#remove").click(remove_part);
			$("#move").click(move);
			s = Snap("#mycanvas");

			
function add_part ()
{
				var selection = document.getElementById("mysel");
				var selection2 = selection.options[selection.selectedIndex].text;
				partcount += 1;
				selection2=selection2+".svg";				
				var getpart = new XMLHttpRequest();
				getpart.onreadystatechange=function() {

						if (getpart.readyState == 4 && getpart.status == 200)
							{
						var resp = getpart.responseText;
						var resp1 = resp.replace("<svg", "<svg id = p"+partcount);  //after reading the file make the part_id unique
						var resp2 = resp1.replace("<g>", "<g id=g" + partcount + ">");  // after reading the file make the group_id unique
						document.getElementById("mycanvas").innerHTML += resp2; // append the part to the DOM
						console.log(resp2);
						console.log(resp);
						
					
					
						part = s.select("#p"+ partcount);  //select the part
						part_id = part.attr("id");  //get the part id
						console.log(part_id);
						get_pins = part.selectAll("line"); //get all the pins of the part into a set
						var get_cps = part.selectAll(".cp"); //get all the pins of the part into a set
						total_pins = get_pins.length;
						console.log(partcount);
     
						
						// change the pins ids of the part. i.e append the part_id to the pind_id
						for (var i = 0; i < total_pins; i++)    
						
							{ 
						   pin_id =  get_pins[i].attr("id");
						   pin_id =  part_id + pin_id ;    //concatenate part_id to the pin_id.
						   get_pins[i].attr({id: pin_id});    //change the pin id
						   console.log( get_pins[i].attr("id"));
								var temp = get_cps[i].attr("id")
								get_cps[i].attr({"id": "p"+partcount+temp});

							}	
							
							drag_part();
    				}
							
				  };
					
					
				getpart.open("GET", selection2, true);
				getpart.send();
} //end of add_part

	
//start of drag handlers	
var drag_move = function(dx,dy) {
 this.attr({transform: this.data('origTransform') + (this.data('origTransform') ? "T":"t") + [dx, dy]});
}

var start = function() {
this.data('origTransform', this.transform().local );
}

var drag_stop = function() {
console.log('finished dragging');
box = this.getBBox();
//update obstacle();	
drag_par_x = this.attr("transform").globalMatrix.e;  //transformed x
drag_par_y =this.attr("transform").globalMatrix.f; 	//transformed y
bb = this.selectAll(".cp");
console.log(bb);

for (mm=0; mm<bb.length; mm++){
	pin_id = bb[mm].attr("id"); // check if this pin id is in the t[r]
	console.log(pin_id);
	bb_cli_x = Number(bb[mm].attr("x")); //x value of the clicked pin
  bb_cli_y = Number(bb[mm].attr("y"));  //x value of the clicked pin
	
					 console.log("after_drag:"+drag_par_x);
           console.log("after_drag:"+drag_par_y);
   
  bb_final_x =  bb_cli_x+5+drag_par_x;    //exact x position of the pin center
  bb_final_y=   bb_cli_y+5+drag_par_y;      //exact y position of the pin center
	console.log("pin centerx:"+ bb_final_x);
	console.log(t);
	if (t.length==0){break;}
	
	else {
		for (g=0;g<t.length; g++){
		 for (h=0;h<t[g][h].length; h++){
			
			if(t.length!=0 && t[g][h].cp_id==pin_id){
			t[g][h].x= bb_final_x;
			t[g][h].y= bb_final_y;}
			 
				else {break;}
			
		}	
	}
}

}//end of for
	
	
console.log(box.x);
console.log(box.x2);
console.log(box.y);
console.log(box.y2);



} // end of drag handlers



function drag_part()
{
	
							for( var k=1; k<=partcount; k++)
							{
							console.log(k); 
  							s.select("#g"+ k).drag(drag_move,start,drag_stop);
							console.log(k);
							}

			
} //end of drag part
		
function add_wire()
{
			c_points = s.selectAll(".cp");
			for (var k=0; k<c_points.length; k++)
				{
  				c_points[k].click(clicked);
				}
		
			 
			function clicked() {
   				 clicked_part = this.attr("id");
    			 console.log(clicked_part);
    			 alert(clicked_part);
		       cli_x = Number(this.attr("x"));  //x value of the clicked pin
           cli_y = Number(this.attr("y"));  //y value of the clicked pin
					 var t = part.attr("transform");  // transformed values of the part
           
			     par_x = t.globalMatrix.e;  //transformed x
           par_y =t.globalMatrix.f;   //transformed y 
					 
					 console.log(par_x);
           console.log(par_y);
   
           final_x =  cli_x+5+par_x;    //exact x position of the pin center
					 final_y= cli_y+5+par_y;      //exact y position of the pin center
					 console.log(final_x);
					 console.log(final_y);
					 chk_clk = true;  // indicates if a click happened on connection point
				} //end of clicked
			
			s.click( clickHandler);                //get the mouse click postiion
  					
} //end of add_wire
	
function clickHandler(ev, x, y)
	{
	 l++;  //increment the click counter
	          pt = s.node.createSVGPoint();
  					pt.x = x; 
						pt.y = y;
						pt = pt.matrixTransform( s.node.getScreenCTM().inverse());
					  clickx= pt.x;
					  clicky=pt.y;	
						
		        if (l==1 && chk_clk==false){
						w=w+1;  //increment wire counter
						wires[w]=s.path("M"+clickx+","+clicky);	//create a new wire
						all_cons.push([]); //add new connection
            console.log(all_cons);
            console.log(all_cons.length);
							
            all_cons[(all_cons.length)-1].push([wire[w]]); // add new wire to all_cons 
            all_cons[(all_cons.length)-1].push([clickx,clicky, 0, null]);	// add click points to all_cons
		
						}
					  
						else if (l==1 && chk_clk==true){
						clickx = final_x; 
			      clicky =final_y;
            w=w+1;
						wires[w]=s.path("M"+clickx+","+clicky);	
						all_cons.push([]);
            console.log(all_cons);
            console.log(all_cons.length);
							
            all_cons[(all_cons.length)-1].push([wire[w]]);
            all_cons[(all_cons.length)-1].push([clickx,clicky, 1, clicked_part]);	
						}
					
					  
 				
					else if (l>1 && chk_clk==false){
						   all_cons[(all_cons.length)-1].push([clickx,clicky, 0, null]);
						   m = wires[w].attr("d");
						   console.log(m);
						   m=m+"H"+clickx+"V"+clicky;
						   wires[w].attr({"d":m});
						   wires[w].attr({fill:"none",strokeWidth:2,stroke:"blue"});


								}                                                    
					else if (l>1 && chk_clk==true){
						       clickx = final_x; 
			             clicky =final_y;
							     all_cons[(all_cons.length)-1].push([clickx,clicky, 0, clicked_part]);
						       m = wires[w].attr("d");
						       m=m+"H"+clickx+"V"+clicky;
						       wires[w].attr({"d":m});
						       wires[w].attr({fill:"none",strokeWidth:2,stroke:"blue"});
								}
		console.log(all_cons);
					  		s.mousemove(mouse_mover);
					      //end of else if
	
} //end of click handler 
		
	function mouse_mover(ev, x, y)
{
							  
					
	              chk_clk=false;
}  //end of mouse_over	
		
		
		$(document).on('keyup', function (event)
		{
			if (event.keyCode == 27)
			{
			
				s.unmousemove(mouse_mover);
				s.unclick(clickHandler);
				l=0;
			  alert(wires);
				
			}
		});  //end of key up

		
		
		
		
		
		
		
		
		
		
		 });         //final end