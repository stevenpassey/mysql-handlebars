var orm = require("../config/orm.js");

module.exports = {

	newBurger: (name, callback) => {
		orm.newBurger(name, (res) => { callback(res); });
	},

	showAll: (callback) => {
		orm.showAll((res) => { callback(res); });
	},

	eatBurger: (id, callback) => {
		orm.eatBurger(id, (res) => { callback(res); });
	},

	deleteBurger: (id, callback) => {
		orm.deleteBurger(id, (res) => { callback(res); });
	}
}