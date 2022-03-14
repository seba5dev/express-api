const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3030;
const app = express();
app.use(bodyParser.json());

//MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "express-api",
});
app.get("/", (req, res) => res.send("Hello World!"));
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "hammer",
    },
    {
      id: 2,
      name: "screwdriver",
    },
    ,
    {
      id: 3,
      name: "wrench",
    },
  ];

  res.json(products);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
