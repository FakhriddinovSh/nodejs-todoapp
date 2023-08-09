const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 4010;

app.get('/todos', (req, res) => {
	// fs.readFile('./src/database/todos.json', 'utf8', (err, data) => {
	// 	res.setHeader('Content-Type', 'application/json');
	// 	res.send(data);
	// });
	// res.setHeader('Access-Control-Allow-Origin', '*');
	// res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	// res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	// res.setHeader('Access-Control-Allow-Credentials', true);
	fs.readFile('./src/database/todos.json', 'utf8', (err, data) => {
		if (err) {
			// Handle the error and send an appropriate response
			res.status(500).send('Error reading todos data');
			return;
		}

		res.setHeader('Content-Type', 'application/json');
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
		res.setHeader('Access-Control-Allow-Credentials', true);

		res.send(data);
	});
});

app.get('/todos/:id', (req, res) => {
	fs.readFile('./src/database/todos.json', 'utf8', (err, data) => {
		const myData = JSON.parse(data);
		const filtered = myData.filter((item) => item.id == req.params.id);

		res.setHeader('Content-Type', 'application/json');
		res.status(200).send(filtered);
	});
});

app.delete('/todos', (req, res) => {
	fs.readFile('./src/database/todos.json', 'utf8', (err, data) => {
		res.setHeader('Content-Type', 'application/json');
		res.send(data);
	});
});

app.delete('/todos/:id', (req, res) => {
	console.log(req.params);
	fs.readFile('./src/database/todos.json', 'utf8', (err, data) => {
		const myData = JSON.parse(data);
		const filtered = myData.filter((item) => item.id == req.params.id);
		myData.splice(filtered, 1);

		res.setHeader('Content-Type', 'application/json');
		res.send(myData);
	});
});

app.listen(port, () => {
	console.log(`Server running on port http://localhost:${port}`);
});
