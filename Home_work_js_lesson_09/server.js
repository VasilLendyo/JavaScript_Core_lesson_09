var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(express.static(__dirname));

server.get("/", function (req, resp) {
    console.log("Start page requested.");
});

server.get("/userGet", function (req, resp) {
    console.log("Form receipted by GET.");
    var obj = req.query;
    console.log(obj.userSurname += ".ValidatedByGET");
    console.log(obj.userName += ".ValidatedByGET");
    console.log(obj.userAge += ".ValidatedByGET");
    console.log(obj.userAddress += ".ValidatedByGET");
	resp.send(obj);
});

server.post("/userPost", function (req, resp) {
    console.log("Form receipted by POST.");
    // console.log(JSON.parse(req.query));
    var obj = req.body;
    console.log(obj.userSurname += ".ValidatedByPOST");
    console.log(obj.userName += ".ValidatedByPOST");
    console.log(obj.userAge += ".ValidatedByPOST");
    console.log(obj.userAddress += ".ValidatedByPOST");
    resp.send(obj);
});

server.listen(3000); //the server object listens on port 8080