var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.post('/burger', (req, res) => {
	burger.newBurger(req.body.burger_name, (result) => { res.json(result); });
});

router.get('/', (req, res) => {
	burger.showAll((data) => {	res.render('index', { burger: data }); });
});

router.put('/burger', (req, res) => {
	burger.eatBurger(req.body.burger_id, (result) => { res.json(result); });
});

router.delete('/burger', (req, res) => {
	burger.deleteBurger(req.body.burger_id, (result) => { res.json(result); });
});

module.exports = router;