'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
	console.log('Hello World!!!');
	console.log('Hello World2!!!');
	res.send('Hi there!');
});

app.listen(port, 'localhost');

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
