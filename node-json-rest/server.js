
(function () {
	'use strict';

	var express = require('express'),
		app = express(),
		fs = require('fs'),
		server,
		host,
		port;

	// List the users from users.json
	app.get('/listUsers', function (req, res) {
		fs.readFile('./users.json', 'utf8', function (err, data) {
			console.log(data);
			res.end(data);
		});
	});

	// Functionality for making a POST call
	app.post('/addUser', function (req, res) {
		// Mock user
		var user = {
			"user_4": {
				"name": "Added User",
				"age": 0,
				"occupation": "Mock Data",
				"id": 4
			}
		};

		fs.readFile('./users.json', 'utf8', function (err, data) {
			data = JSON.parse(user);
			data['user_4'] = user['user_4'];
			console.log(data);
			res.end(JSON.stringify(data));
		});
	});

	// Set up the server
	server = app.listen(3000, function () {
		host = server.address().address;
		port = server.address().port;
		console.log('node json app listening localhost:' + port);
	});

}());