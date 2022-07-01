const express = require('express');
const path = require('path');


//set up express app
const app = express();
const port = 3000;


//sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//starts server to begin listening
app.listen(port,function(){
    console.log("APP listening on PORT" + PORT);
});