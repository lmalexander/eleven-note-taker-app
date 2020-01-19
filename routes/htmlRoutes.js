// dependencies
const path = require("path");

// --------------- routing
module.exports = function (app) {
// html get requests
// index.html
app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "/public/index.html"));
})
// notes.html
app.get("/notes", function(request, response) {
    response.sendFile(path.join(__dirname, "/public/notes.html"));
});
};
