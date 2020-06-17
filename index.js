const express = require("express");
const bodyParser = require("body-parser");
const { getName } = require("./lib/util");
const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  port: 8889,
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
var multer = require("multer");
var upload = multer({ dest: "uploads" });

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", async function (req, res) {
  const users = await sequelize.query("SELECT * FROM `customers`", {
    type: Sequelize.QueryTypes.SELECT,
  });
  res.send({ users });
});

app.post("/", upload.single("file"), async function (req, res) {
  console.log("req", req.file);
  res.send(req.file);
});

app.post("/user", function (req, res) {
  // let { name, age } = req.body;

  let name = getName(req.body);
  res.send({ name: name });
});

app.listen(3000, () => {
  console.log(`Listen port: ${3000}`);
});
