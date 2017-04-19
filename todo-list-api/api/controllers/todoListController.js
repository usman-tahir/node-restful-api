
(function () {
	'use strict';

	var mongoose = require('mongoose'),
		Task = mongoose.model('Tasks');

	exports.list_all_tasks = function (request, response) {
		Task.find({}, function (error, task) {
			if (error) {
				response.send(error);
			}
			response.json(task);
		});
	};

	exports.create_a_task = function (request, response) {
		var new_task = new Task(response.body);
		new_task.save(function (error, task) {
			if (error) {
				response.send(error);
			}
			response.json(task);
		});
	};

	exports.read_a_task = function (request, response) {
		Task.findById(request.params.taskId, function (error, task) {
			if (error) {
				response.send(error);
			}
			response.json(task);
		});
	};

	exports.update_a_task = function (request, response) {
		Task.findOneAndUpdate(request.params.taskId, request.body, { new: true }, function (error, task) {
			if (error) {
				response.send(error);
			}
			response.json(task);
		});
	};

	exports.delete_a_task = function (request, response) {
		Task.remove({
			_id: request.params.taskId
		}, function (error, task) {
			if (error) {
				response.send(error);
			}
			response.json({ message: 'Task successfully deleted' });
		});
	};
}());