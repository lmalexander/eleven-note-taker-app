//---------------------------------npm dependencies
const express = require("express");
const path = require("path");

//--------------------------------express server configuration 
// create an "express" server
const app = express();

// choose port to listen on
const PORT = process.env.PORT || 7000;
// set up new express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

//----------------------------------server routing files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app); 

//-----------------------------------server listener
app.listen(PORT, function() {
    console.log("now listening on PORT: " + PORT);
});