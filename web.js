#!/usr/bin/env node
var fs = require('fs');
var file = "index.html";
var buffer = new Buffer(fs.readFileSync(file));
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
//console.log(buffer.toString());
