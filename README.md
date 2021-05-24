This is for testing bro
#### A Web based opensource eletronics schematic and PCB designing application.

The eletronic parts or schematic symbols are visualized using svg elements such as rect, path, line, circle etc,.
The symbols are drawn on to the DOM using snapSVG library.

### Demo:
http://online-eda.surge.sh/home.html

#### Technologies used:

1) HTML5
2) JavaScript
3) SnapSVG (http://snapsvg.io/)
4) SVG
5) CSS

##### Files:

1) parts.js --- Contains the parts' object definition
2) editors.js --- Contains utility functions to add the parts, move, rotate, remove and other user interactions with parts and shcematic
3) eda.css --- An external CSS styling file 

#### Running and testing the project:

1) Download the project source code from https://github.com/arunkumar413/Online-EDA.git
2) Unzip/extract the the contents of the dowloaded zip file.
3) cd to the project directory containing the files: home.html,parts.js.editor.js etc,.
4) If you're using python 3.x version on your machine execute this code:
   `python -m http.server`
5) If Python version is 2.X run:
   `python -m SimpleHTTPServer`
6) Visit http://localhost:8000/home.html to access the application.
7) By default, this will run the contents of the directory on a local web server, on port 8000. 
8) For more info on running a simple http server vist https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server


Note:  If you already have something running on port 8000, you can choose another port by running the server command followed by an alternative port number, e.g. `python -m http.server 7800` (Python 3.x) or `python -m SimpleHTTPServer 7800` (Python 2.x). 
You can then access your content at localhost:7800.


### Contributing to the project:

Contributions to the project are always welcome. You can join the gitter channel at https://gitter.im/Online-EDA/Development
and start disucssing about the project, code, help and other stuff. Also you can raise an the issue on the github repo.


