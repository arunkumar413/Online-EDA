# Online-EDA
This is an SVG, javascript based project for creating electronic schematic and PCB online. Please visit the wiki on this project to understand the project better.

https://github.com/arunkumar413/Online-EDA/wiki

The parts are maintatned in separate folder named parts.


Files:

1) editors.js  // contains functions for adding, connecting parts

2) easystart.js // contains functions for routing the connectings between parts

3) eda.css // for applying styling on the parts and UI


Important functions in the editors.js file:

1) add_part () //used to add new part to the screen.

2) add_wire()  // used for connecting wire between various electronic components on the screen.

3) drag_part()  //make the parts draggbale.

4) find_path() // for finding the shortest wire path between connnected components. This function executes when user establishes
new connection or drags the part to a new place on the screeen.

5) set_walls()   // Area occupied by a part is set as obstacle so that wire cannot be drawn 
over the parts. Executes when the user drags the part.

6) clickHandler() //fires when the user clicks on a connection point (connection points is represented by the class "cp")
 

