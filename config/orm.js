var mysql = require("./connection.js");

module.exports = {

	newBurger: (name, callback) => {

		mysql.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, false);", [name], (error, res) => {

			if(error) { console.log(error); }
			
			callback(res);
		});
	},

	showAll: (callback) => {

		mysql.query("SELECT * FROM burgers", (error, res) => {

			if(error) { console.log(error); }
			
			callback(res);
		});
	},

	eatBurger: (id, callback) => {
		mysql.query("UPDATE burgers SET devoured = true WHERE id = ?", [id], (error, res) => {

			if(error) { console.log(error); }
			
			callback(res);
		});
	},

	deleteBurger: (id, callback) => {

		mysql.query("DELETE FROM burgers WHERE id = ?", [id], (error, res) => {

			if(error) { console.log(error); }
			
			callback(res);
		});
	}
}