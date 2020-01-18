// -------------------------------------------------------------------------- dependencies
const fs = require("fs");
const path = require("path");

//  load data
const notePad = require("../notePad.json");
// store fs.read notePad file for editing
const notePadFile = fs.readFileSync(path.resolve("notePad.json"));
const notePadData = JSON.parse(notePadFile);

// ---------------------------------------------------------------------------- routing
module.exports = function(app) {
    // ---------------------------------------- GET requests 
    // return notes from notePad.json

    app.get("/api/notes", function(request, response) {
        // return notePad as a json object
        response.json(notePad);
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
            response.send(notePadData);
        })
    });
// ------------------------------------------ DELETE requests 
    // recieve an ID query of a note to delete
    // read notes from notePad.json
    // remove note corresponding to id query
    // rewrite notes to notePad.json

    app.delete("/api/notes/:id", function(request, response) {
    // console.log client request
        console.log(request.body);
        
/* 
    // make sure request.body is a number and store as deleteID
        if (isNaN(request.body) === true) {
            return "Please enter a number!"
        } else deleteID = request.body;
    // for loop through notepad.json file data searching for deleteID
    // clear array corresponding to deleteID
        for (let i = 0; i < notePadData.length; i++) {
            if (notePadData.id === deleteID) {
                notePadData[i] = 0;
            } else break;
        };
   // rewrite notepad.json file data to notepad.json
        fs.writeFile("notePad.json", JSON.stringify(notePadData, null, 10) , (err) => {
        if (err) throw (err);
        console.log(`note id# ${deleteID} was deleted!`);
        // return updated notePad.json file
        response.json(notePad);
    }); */

    });
};