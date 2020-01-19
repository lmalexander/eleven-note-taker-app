// --------------------------------------------- dependencies
const path = require("path");


module.exports = function(app) {
// --------------------------------------------- routing
// ------------------------- html GET request
// index.html
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "/index.html"));
});
// notes.html
app.get("/notes", function(request, response) {
    response.sendFile(path.join(__dirname, "/notes.html"));
});
};
