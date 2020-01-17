// ------------------------- load data
const noteDatabase = require("../journal.json");

// ------------------------- routing data
module.exports = function(app) {
    // GET requests 
    // return notes from journal.json
    app.get("/api/notes", function(request, response) {
        response.json(noteDatabase)
    });

    // POST requests 
    // add user input response to journal.json
    // includes unique ID for note id/deletion
    // return new note to client 
    app.post("/api/notes", function(request, response) {
        const newNote = response.push(request.body);
        const id = `note#${Math.random()*10}`;
        journal.json.push(id);
        response.json(true);
    });

    // DELETE requests 
    // recieve an ID query of a note to delete
    // return note objects by id for deletion
    //------- read notes from journal.json
    //------- remove note corresponding to id query
    //------- rewrite notes to journal.json
    app.delete("/api.notes/:noteID", function(request, response) {
        if (noteDatabase.id === request.body) {
            
        }
    })

};

