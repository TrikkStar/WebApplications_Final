The structure of this application is centered around the interface.js file, with the controller function being the center of that file.
The controller function calls itself upon being defined, and it is reliant upon various helper functions defined both inside of itself as well as exterior functions in interface.js.
The controller function is responsable for creating and updating the HTML displayed upon the page, based upon the users actions. 
The controller function is also highly dependent upon the Algorithms object defined in algorithms.js, this object is where the actual analysis of the algorithms is run.
The Algorithms object has attributes for each of the algorithms that it can run, as well as an array of said algorithms names and an array to be used to easily acess one of the algorithms. 
Main.js is where all the required files are loaded together using require.js and index.html is the page upon which all the information is displayed. 