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
             return(this.grp);
             
         },
Resistor: function(){
    this.manufactuerer = "";
    this.name = "";
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
return(this.grp);             
             
         } //end of resistor
};
             
             
             
             