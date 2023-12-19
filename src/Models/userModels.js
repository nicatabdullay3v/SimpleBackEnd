const mongoose = require("mongoose");

const productsSchema = mongoose.Schema(
  {
    name: String,
    price: Number
  },
  { collection: "Products"}
);

const Products = mongoose.model("Products", productsSchema);

module.exports = Products;