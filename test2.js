$(document).ready(function() {

var s = Snap("#mycanvas");

var rec = s.rect(30,0,100,100).attr({fill:"yellow",stroke:"black"});
var outer = s.path("M0 0 h160 v100 h-160 Z").attr({fill: "none", strokeWidth: 1});
var ICname = s.text(65, 50, "555").attr({"font-size":12});
var text1 = s.text(32, 12, "1").attr({"font-size":12});
var text2 = s.text(32, 38, "2").attr({"font-size":12});
var text3 = s.text(32, 67, "3").attr({"font-size":12});
var text4 = s.text(32, 99, "4").attr({"font-size":12});
var text5 = s.text(120, 99, "5").attr({"font-size":12});
var text6 = s.text(120, 67, "6").attr({"font-size":12});
var text7 = s.text(120, 38, "7").attr({"font-size":12});
var text8 = s.text(120, 12, "8").attr({"font-size":12});

var pin1 = s.path("M0 0 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});
var pin2 = s.path("M0 30 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});
var pin3 = s.path("M0 60 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});
var pin4 = s.path("M0 90 h10 v10 h-10 Z").attr({fill: "blue", strokeWidth: 1});
var pin5 = s.path("M150 90 h10 v10 h-10 Z").attr({fill: "blue",strokeWidth: 1});
var pin6 = s.path("M150 60 h10 v10 h-10 Z").attr({fill: "blue",strokeWidth: 1});
var pin7 = s.path("M150 30 h10 v10 h-10 Z").attr({fill: "blue",strokeWidth: 1});
var pin8 = s.path("M150 0 h10 v10 h-10 Z").attr({fill: "blue",strokeWidth: 1});

var line1 = s.path("M10 5 h20").attr({stroke: "black",strokeWidth: 1});
var line2 = s.path("M10 35 h20").attr({stroke: "black",strokeWidth:1});
var line3 = s.path("M10 65 h20").attr({stroke: "black",strokeWidth:1});
var line4 = s.path("M10 95 h20").attr({stroke: "black",strokeWidth:1});
var line5 = s.path("M130 95 h20").attr({stroke: "black",strokeWidth:1});
var line6 = s.path("M130 65 h20").attr({stroke: "black",strokeWidth:1});
var line7 = s.path("M130 35 h20").attr({stroke: "black",strokeWidth:1});
var line8 = s.path("M130 5 h20").attr({stroke: "black",strokeWidth:1});

grp = s.group(rec, outer, ICname, 
             text1, text2, text3, text4, text5, text6, text7, text8,
             pin1, pin2, pin3, pin4, pin5, pin6, pin7, pin8,
             line1,line2, line3, line4, line5,line6,line7, line8);
             
             grp.drag();
             
             
             });