const e = require("express");
const Products = require("./../Models/userModels");

const getAllUser = async (req, res) => {
  let allUser = await Products.find();
  let filteredData = allUser;
  if (!req.query.name) {
  }
  if (req.query.name) {
    filteredData = filteredData.filter((x) =>
      x.name.toLowerCase().trim().includes(req.query.name.trim().toLowerCase())
    );
  }
  if (req.query.price) {
    filteredData = filteredData.filter((x) => x.price == req.query.price);
    console.log(filteredData);
  }
  res.send(filteredData);
};
const getuserByid = async (req, res) => {
  console.log(req.params.id);
  let allUser = await Products.find();
  let userByid = allUser.filter((x) => x.id == req.params.id);
  res.send(userByid);
};

module.exports = { getAllUser, getuserByid };
