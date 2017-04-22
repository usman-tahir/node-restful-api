
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

	// Set up the server
	server = app.listen(3000, function () {
		host = server.address().address;
		port = server.address().port;
		console.log('node json app listening localhost:' + port);
	});

}());