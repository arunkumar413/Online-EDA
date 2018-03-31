var parts = {
    
    IC8pin:function () {
    this.manufactuerer = "";
    this.name = "";
    this.part_num = 

class IC8pin{
    constructor(){
    this.manufactuerer = "";
    this.name = "NE555";
    this.part_num =
    this.total_pins = 8;
    this.datasheet = ""; // http link to the datasheet

        this.p1= {num:1,name: "Vcc",x:0,y:0};
        this.p2= {num:2,name: "Vcc",x:0,y:30};
        this.p3= {num:3,name: "Vcc",x:0,y:60};
        this.p4= {num:4,name: "Vcc",x:0,y:90};
        this.p5= {num:5,name: "Vcc",x:150,y:90};
        this.p6= {num:6,name: "Vcc",x:150,y:60};
        this.p7= {num:7,name: "Vcc",x:150,y:30};
        this.p8= {num:8,name: "Vcc",x:150,y:0};

        this.box= 0;  // Holds the bounding box values of the group.
var parts = {

    IC8pin:function () {
    this.manufactuerer = "";
    this.name = "";
    this.part_num =
    this.total_pins = 8;
    this.datasheet = "";
    this.pins= {
        pin1:
        {num:1,name: "Vcc",x:10,y:5},
        
        
        };  //end of pins



        };  //end of pins


 this.outer = s.path("M0 0 h160 v100 h-160 Z").attr({fill: "none", strokeWidth: 1});
 this.rec = s.rect(30,0,100,100).attr({fill:"yellow",stroke:"black"});
 this.ICname = s.text(65, 50, "555").attr({"font-size":12});



this.text1 = s.text(32, 12, "1").attr({"font-size":12});
this.text2 = s.text(32, 38, "2").attr({"font-size":12});
this.text3 = s.text(32, 67, "3").attr({"font-size":12});
this.text4 = s.text(32, 99, "4").attr({"font-size":12});
this.text5 = s.text(120, 99, "5").attr({"font-size":12});
this.text6 = s.text(120, 67, "6").attr({"font-size":12});
this.text7 = s.text(120, 38, "7").attr({"font-size":12});
this.text8 = s.text(120, 12, "8").attr({"font-size":12});

this.pin1 = s.path("M0 0 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});
this.pin2 = s.path("M0 30 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});
this.pin3 = s.path("M0 60 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});
this.pin4 = s.path("M0 90 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});
this.pin5 = s.path("M150 90 h10 v10 h-10 Z").attr({fill: "blue",strokeWidth: 1});
this.pin6 = s.path("M150 60 h10 v10 h-10 Z").attr({fill: "blue",strokeWidth: 1});
this.pin7 = s.path("M150 30 h10 v10 h-10 Z").attr({fill: "blue",strokeWidth: 1});
this.pin8 = s.path("M150 0 h10 v10 h-10 Z").attr({fill: "blue",strokeWidth: 1});

this.line1 = s.path("M10 5 h20").attr({stroke: "black",strokeWidth: 1});
this.line2 = s.path("M10 35 h20").attr({stroke: "black",strokeWidth:1});
this.line3 = s.path("M10 65 h20").attr({stroke: "black",strokeWidth:1});
this.line4 = s.path("M10 95 h20").attr({stroke: "black",strokeWidth:1});
this.line5 = s.path("M130 95 h20").attr({stroke: "black",strokeWidth:1});
this.line6 = s.path("M130 65 h20").attr({stroke: "black",strokeWidth:1});
this.line7 = s.path("M130 35 h20").attr({stroke: "black",strokeWidth:1});
this.line8 = s.path("M130 5 h20").attr({stroke: "black",strokeWidth:1});

this.grp = s.group(this.outer,this.rec,this.ICname,
             this.text1, this.text2, this.text3, this.text4, this.text5, this.text6, this.text7, this.text8,
             this.pin1, this.pin2, this.pin3, this.pin4, this.pin5, this.pin6, this.pin7, this.pin8,
             this.line1,this.line2, this.line3, this.line4, this.line5,this.line6,this.line7, this.line8);

this.line1,this.line2, this.line3, this.line4, this.line5,this.line6,this.line7, this.line8);

this.grp.drag(this.drag_move,this.drag_start,this.drag_stop);
this.grp.click(this.exe_command);

    }//end of constructor

    drag_move(dx, dy){
		this.attr({transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]});
	}
	drag_start () {
		this.data('origTransform', this.transform().local);
	}
	drag_stop() {
      console.log("finished dragging");
      this.box=this.getBBox();
      console.log(this.box)
}
    remove(){
        this.remove();
    }
    exe_command(){
        if (command= 'rem'){
            this.remove();}
        else if(command='rotate'){
     this.transform(this.g.transform()+'r90');
        }
    }
}//end of class IC

             this.line1,this.line2, this.line3, this.line4, this.line5,this.line6,this.line7, this.line8);

         },
Resistor: function(){
    this.manufactuerer = "";
    this.name = "";
    this.part_num = 
    this.total_pins = 8;
    this.datasheet = "";
    this.pins= {pin1:{num:1,name: "Vcc"}};
    

    this.part_num =
    this.total_pins = 8;
    this.datasheet = "";
    this.pins= {pin1:{num:1,name: "Vcc"}};

this.outer = s.path("M0 0 h120 v18 h-120 Z").attr({fill: "none", strokeWidth: 1});
this.rec = s.rect(30,0,60,18).attr({fill:"yellow",stroke:"black"});
this.ICname = s.text(55, 12, "R").attr({"font-size":12});

this.pin1 = s.path("M0 4.5 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});
this.pin2 = s.path("M110 4.5 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});

this.line1 = s.path("M10 9 h20").attr({stroke: "black",strokeWidth: 1});
this.line2 = s.path("M90 9 h20").attr({stroke: "black",strokeWidth:1});
this.grp = s.group(this.outer,this.rec,this.ICname, this.pin1, this.pin2,this.line1,this.line2);
             
         } //end of resistor
};
             
             
             


         } //end of resistor
};


