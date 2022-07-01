const path = require('path');


module.exports = function (app) {
    //get notes- should return the notes.html file 
    app.get("/notes", function (req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    //get * - should return the index.html file
    app.get("*", function(re ,res) {
        res.sendFile(path(__dirname, "../public/index.html"));
    });
}