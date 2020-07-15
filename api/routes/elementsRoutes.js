'use strict';

module.exports = function(app) {
	var absorberApp = require('../controllers/elementsController');

	// todoList Routes
	app.route('/elements')
		.get(absorberApp.list_all_elements)
		.post(absorberApp.create_an_element);

	app.route('/elements/:elementId')
		.get(absorberApp.read_an_element)
		.put(absorberApp.update_an_element)
		.delete(absorberApp.delete_an_element);
};
