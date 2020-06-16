const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/user", function (req, res) {
  let { name, age } = req.body;
  //insert
  //
  res.send({ name, age });
});

app.listen(3000, () => {
  console.log(`Listen port: ${3000}`);
});
