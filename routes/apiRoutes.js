// -------------------------------------------------------------------------- dependencies
const fs = require("fs");
const path = require("path");

//  load data
const notePad = require("../notePad.json");
// store fs.read notePad file for editing
const notePadFile = fs.readFileSync(path.resolve("notePad.json"));
const notePadData = JSON.parse(notePadFile);


module.exports = function(app) {
// ---------------------------------------------------------------------------- routing
    // ---------------------------------------- GET requests 
    // return notes from notePad.json

    app.get("/api/notes", function(request, response) {
    // return notePad as a json object
        response.json(notePadData);
    });
    // ---------------------------------------- POST requests 
    // add user input response to notePad.json
    // includes unique ID for note id/deletion
    // return notePad to client 

    app.post("/api/notes", function(request, response) {
    // check request.body value
        // console.log(request.body);

    // create newNote and add id 
        const newNote = request.body;
        const newNoteID = Math.floor(Math.random() * 1001);
        newNote["id"] = newNoteID;
        console.log(newNote);
        
    // push newNote to notePadData
        notePadData.push(newNote);

    // rewrite notePadData to notePad.json
        fs.writeFile("notePad.json", JSON.stringify(notePadData, null, 10) , (err) => {
            if (err) throw (err);
            console.log(`note id# ${newNoteID} was added!`);
            // return notePad.json file
            response.json(notePadData);
        })
    });
// ------------------------------------------ DELETE requests 
    // recieve an ID query of a note to delete
    // read notes from notePad.json
    // remove note corresponding to id query
    // rewrite notes to notePad.json

    app.delete("/api/notes/:id", function(request, response) {
    // console.log client request
        console.log(request.params.id);

    // store client request as deleteID
        deleteID = request.params.id;

    // filter new array without deleteID 
         notePadUpdated = notePad.filter( function(notePadData) { return notePadData.id != deleteID });

   // write new notepad.json array data to notepad.json
        fs.writeFile("notePad.json", JSON.stringify(notePadUpdated, null, 10) , (err) => {
        if (err) throw (err);
        console.log(`note id# ${deleteID} was deleted!`);

    // return notePadUpdated json data
        response.json(notePadUpdated);
    }); 
    });

};