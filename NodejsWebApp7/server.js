'use strict';
var http = require('http');
var port = process.env.PORT || 1337;

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

// APPP CONFIG
mongoose.connect('mongodb://localhost/restful_blog_app');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);

//Blog.create({
//	title: "Test Blog",
//	image: "https://images.unsplash.com/photo-1446231855385-1d4b0f025248",
//	body: "HELLO THIS IS A BLOG POST!"
//});

// RESTFUL ROUTES
app.get('/', function (req, res) {
	res.redirect('/blogs');
});

app.get('/blogs', function (req, res) {
	res.render('index');
});

app.listen(port, 'localhost');


//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
