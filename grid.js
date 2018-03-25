class Grid{
  constructor(){

this.width  =    800;
this.height =    800;
this.gap    =    25;
this.q =[];
this.r =[];

for (var i=0;i<=800/this.gap;i++){
 this.x = i*this.gap;

 this.u = 'M0'+','+this.x+'h'+800;
 this.v = 'M'+this.x+','+0+'v'+800;

 this.q[i] = s.path(this.u).attr({fill:'blue',strokeWidth:1,stroke:'lightgray'});
 this.r[i] = s.path(this.v).attr({fill:'blue',strokeWidth:1,stroke:'lightgray'});

}

  }
}
