const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 4010;

app.use(cors());

app.get("/todos", (req, res) => {
  fs.readFile("./src/database/todos.json", "utf8", (err, data) => {
    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

app.get("/todos/:id", (req, res) => {
  fs.readFile("./src/database/todos.json", "utf8", (err, data) => {
    const myData = JSON.parse(data);
    const filtered = myData.filter((item) => item.id == req.params.id);
    res.status(200).send(filtered);
  });
});

app.delete("/todos", (req, res) => {
  fs.readFile("./src/database/todos.json", "utf8", (err, data) => {
    res.send(data);
  });
});

app.delete("/todos/:id", (req, res) => {
  console.log(req.params);
  fs.readFile("./src/database/todos.json", "utf8", (err, data) => {
    const myData = JSON.parse(data);
    const filtered = myData.filter((item) => item.id == req.params.id);
    myData.splice(filtered, 1);

    res.setHeader("Content-Type", "application/json");
    res.send(myData);
  });
});

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});
