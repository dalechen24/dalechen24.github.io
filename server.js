var express = require("express"),
	http = require("http"),
	path = require("path");

var server = express();

server.set("port", process.env.PORT || 3000);
server.set("view engine", "jade");
server.set("views", __dirname + "/views");
server.use(express.static(__dirname));

server.get("/", function(req, res) {
	res.render("index");
});

server.get("/testSuite", function(req, res) {
	res.render("testSuite");
});

server.use(function(req, res, next) {
	res.render("pageNotFound");
});

server.use(function(err, req, res, next) {
	res.render("serverError");
});

server.listen(server.get("port"), function() {
	console.log("server started on localhost:" + server.get("port") + "; press Ctrl-C to terminate.");
});