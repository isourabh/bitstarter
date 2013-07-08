#!/usr/bin/env node
var fs = require('fs');
var file = "index.html";
var buffer = new Buffer(fs.readFileSync(file));
console.log(buffer.toString());