//---------------------------------npm dependencies
const express = require("express");

//--------------------------------express server configuration 
// create an "exoress" server
const app = express();
// choose port to listen on
const PORT = process.env.PORT || 7000;
// set up new express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//----------------------------------server routing files
/* require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app); */

//-----------------------------------server listener
app.listen(PORT, function() {
    console.log("now listening on PORT: " + PORT);
});