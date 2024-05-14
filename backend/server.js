// this is where we write our backend node.js code
var express = require("express");
//var cors = require("cors");
var mysql = require("mysql");

var app = express();

app.get('/', function(req, res) {
    res.send('Hey There!');
});

// app.use(cors());

app.listen(3000, () => {
    console.log("listening on port 3000");
})