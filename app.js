const express = require("express");
const app = express();
const port = 3001;
const data = require("./db.json");

app.get("/products", (req, res) => {
  let filteredData = data.products;
  if (!req.query.name) {
  }
  if (req.query.name) {
    filteredData = filteredData.filter((x) =>
      x.name.trim().toLowerCase().includes(req.query.name.trim().toLowerCase())
    );
  }
  if (req.query.price) {
    filteredData = filteredData.filter((x) => x.price == req.query.price);
  }
  res.send(filteredData);
});

app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  const elemById = data.products.find((elem) => elem.id == id);
  res.send(elemById);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
