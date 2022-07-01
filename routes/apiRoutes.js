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
}