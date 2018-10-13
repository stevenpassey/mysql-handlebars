var express = require("express");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 80;

app.use(express.static("public"));

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded( { extended: true } ));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "burger"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function(){
    console.log("Express (Port " + PORT + ")");
});