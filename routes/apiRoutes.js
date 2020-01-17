// ------------------------- dependencies
const fs = require("fs");

// ------------------------- load data
const notePad = require("../notePad.json");

// ------------------------- routing data
module.exports = function(app) {
    // GET requests 
    // return notes from notePad.json
    app.get("/api/notes", function(request, response) {
        response.json(notePad);
    });

    // POST requests 
    // add user input response to notePad.json
    // includes unique ID for note id/deletion
    // return notes to client 
    app.post("/api/notes", function(request, response) {
        // push new note
        const newNote = request.body;
        console.log(newNote);
        notePad.push(newNote);
        // add id to note
        notePad.forEach(i => {
            notePad.id = i + 2020
        });
        // return notes
        response.json(notePad);
    });

    // DELETE requests 
    // recieve an ID query of a note to delete
    // return note objects by id for deletion
    //------- read notes from notePad.json
    //------- remove note corresponding to id query
    //------- rewrite notes to notePad.json
    app.delete("/api.notes/:noteID", function(request, response) {
        // read notepad.json file
        
        // clear array in the index position corresponding to id query
        // write notes back to notePad.json
        // return notes to client
    })

};

