// dependencies
const path = require("path");

// --------------- routing
module.exports = function (app) {
// html get requests
// index.html
app.get("/", function(response, request) {
    response.sendFile(path.join(__dirname, "../public/index.html"));
})
// notes.html
app.get("/notes", function(response,request) {
    response.sendFile(path.join(__dirname, "../public/notes.html"));
});
};
