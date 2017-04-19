
(function () {
	'use strict';

	var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		TaskSchema;

	TaskSchema = new Schema({
		name: {
			type: String,
			Required: 'Please enter the name of the task.'
		},

		created_date: {
			type: Date,
			default: Date.now
		},

		status: {
			type: [{
				type: String,
				enum: ['pending', 'ongoing', 'completed']
			}],
			default: ['pending']
		}
	});

	module.exports = mongoose.model('Tasks', TaskSchema);
}());