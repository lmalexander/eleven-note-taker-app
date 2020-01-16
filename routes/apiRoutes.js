// ------------------------- load data
const noteDatabase = require("../journal.json");

// ------------------------- routing data
module.exports = function(app) {
    // GET requests
    app.get("/api/notes", function(request, response) {
        response.json(noteDatabase)
    });
    // POST requests
    app.post("/api/notes", function(request, response) {
        response.push(request.body);
        response.json(true);
    });
    // DELETE requests
    app.delete("/api.notes/:noteID", function(request, response) {
        if (noteDatabase.noteID === request.body) {
            
        }
    })

};

