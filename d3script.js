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
						console.log(resp);
						
					
					
						part = s.select("#p"+ partcount);  //select the part
						part_id = part.attr("id");  //get the part id
						console.log(part_id);
						get_pins = part.selectAll("line"); //get all the pins of the part into a set
						total_pins = get_pins.length;
						console.log(partcount);
     
						
						// change the pins ids of the part. i.e append the part_id to the pind_id
						for (var i = 0; i < total_pins; i++)    
						
							{ 
						   pin_id =  get_pins[i].attr("id");
						   pin_id =  part_id + pin_id ;    //concatenate part_id to the pin_id.
						   get_pins[i].attr({id: pin_id});    //change the pin id
						   console.log( get_pins[i].attr("id"));

							}	
							
							drag_part();
    				}
							
				  };
					
					
				getpart.open("GET", selection2, true);
				getpart.send();
} //end of add_part


function drag_part()
{
	
							for( var k=1; k<=partcount; k++)
							{
							console.log(k); 
  							s.select("#g"+ k).drag();
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
		
			 
			function clicked()
				{
   				 var clicked_part = this.attr("id");
    			 console.log(clicked_part);
    			 alert(clicked_part);
				} 
			
			s.click( clickHandler);                //get the mouse click postiion
  					
} //end of add_wire
	
function clickHandler(ev, x, y)
	{
	 l++;
						pt = s.node.createSVGPoint();
  						pt.x = x; 
						pt.y = y;
						pt = pt.matrixTransform( s.node.getScreenCTM().inverse());
					  clickx= pt.x;
					  clicky=pt.y;
					  
					
					if (l==1){
					  console.log(w);
					  w=w+1;
					  wire_pts[w] = new Array();
					  wire_pts[w].push(clickx);
					  wire_pts[w].push(clicky);
					  n = wire_pts[w].length;
					  wire[w] = s.polyline(wire_pts[w]);
					  wire[w].attr({stroke: "#0000FF", fill: "none", strokeWidth: 2});
					  s.mousemove(mouse_mover);
					  
					}
				
					else if (l>1)
					     {
						   n= wire_pts[w].length; 
					  		wire_pts[w][n+2] = clickx ;
					  		wire_pts[w][n+3]= clicky;
							
							wire_pts[w][n] = wire_pts[w][n-2];
							wire_pts[w][n+1] = wire_pts[w][n+3];
							
					  		wire[w].attr({"points": wire_pts[w]});
							n = wire_pts[w].length;
					  		s.mousemove(mouse_mover);
					     }
	
} //end of click handler
		
	function mouse_mover(ev, x, y)
{
							  
					var m_pt = s.node.createSVGPoint();
  					m_pt.x = x; 
					m_pt.y = y;	 
					m_pt = m_pt.matrixTransform( s.node.getScreenCTM().inverse());
					var  movex= m_pt.x ;
					var movey= m_pt.y ; 
					 wire_pts[w][n+2]= movex;
					 wire_pts[w][n+3]= movey;
					 wire_pts[w][n] = wire_pts[w][n-2];
					 wire_pts[w][n+1] = wire_pts[w][n+3];
					 console.log(wire_pts[w]);
					 wire[w].attr({"points": wire_pts[w]});
					  
}  //end of mouse_over	
		
		
		$(document).on('keyup', function (event)
		{
			if (event.keyCode == 27)
			{
			
				s.unmousemove(mouse_mover);
				wire_pts[w].splice(n, 4);
				s.unclick(clickHandler);
				l=0;
				
			}
		});  //end of key up

		
		
		
		
		
		
		
		
		
		
		 });         //final end