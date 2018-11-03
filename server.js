var http = require('http');
var app = require("./app/app.js");

http.createServer(app.onRequest).listen(8000);
