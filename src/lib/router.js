// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// function Server(req, res) {
// 	if (res.method == 'GET' && res.url == '/todos') {
// 		const todos = fs.readFileSync(
// 			this.path.join(process.cwd(), 'database', 'todos.json'),
// 			'UTF-8',
// 		);

// 		return todos ? JSON.parse(todos) : [];
// 	}
// }

function Express() {
	this.server = http.createServer(Server);

	this.get = function (paz, callbackHandler) {
		if (paz == '/todos') {
			const todos = fs.readFileSync(
				path.join(process.cwd(), 'database', 'todos.json'),
				'UTF-8',
			);

			return todos ? JSON.parse(todos) : [];
		}
	};
	this.listen = function (PORT, callback) {
		this.server.listen(PORT, callback);
	};
}

// module.exports = Express;
