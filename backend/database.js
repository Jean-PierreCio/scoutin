var mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localhost', 
    database: '', // databse name
    user: 'root', 
    password: 'root'
});