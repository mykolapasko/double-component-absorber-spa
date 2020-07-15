'use strict';

module.exports = function(app) {
	var agents = require('../controllers/agentsController');

	// agents Routes
	app.route('/agents')
		.get(agents.list_all_agents);

	app.route('/agents/:agentId')
		.put(agents.update_an_agent);
};