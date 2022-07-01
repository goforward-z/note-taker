const fs = require('fs');

module.exports = function (app) {
    // The application should have a db.json file on the backend that will be used to store and retrieve notes using the fs module.

    // GET /api/notes - Should read the db.json file and return all saved notes as JSON.
    app.get("/app/notes",function(req,res) {
        console.log("getting notes");
        fs.readFile("db/db.json","utf-8",(err,data) => {
            if(err) throw err;
            let notes = JSON.parse(data);
        });
    });
    //post/api/notes - should receive a new note to save on the request body,add it to the db.json file,nd then return the new note to the client.
    app.post("/api/notes",function (req,res) {
        fs.readFile("db/db.json","utf-8",(err,data) => {
            if(err) throw err;

            let notes = JSON.parse(data);

            let newNote = req.body;
            let uniueId = (notes.length).toString();
            newNote.id = uniueId;
            console.log(newNote);
            notes.push(newNote);

            fs.writeFileSync("db/db.json",JSON.stringify(notes), "utf-8", (err,data) => {
                if(err) throw err;
                console.log("New note successfully added!");
            });

            res.json(notes);
        });
    });

}