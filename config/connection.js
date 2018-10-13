var mysql = require("mysql");

var connection_props = { host: 'localhost', user: 'root', password: '5mysql5', database: 'burgers_db'};

var connection = process.env.JAWSDB 
			   ? mysql.createConnection(process.env.JAWSDB_URL) 
			   : mysql.createConnection(connection_props);

//var connection = mysql.createConnection(connection_props);

connection.connect((error) => { if(error) { console.log(error); } console.log("mySQL connected on port 3306");});

module.exports = connection;