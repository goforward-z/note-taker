const express = require('express');
const path = require('path');


//set up express app
const app = express();
const PORT = process.env.PORT || 3000;


//sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('pubic'));


//starts server to begin listening
app.listen(PORT,function(){
    console.log("APP listening on PORT" + PORT);
});