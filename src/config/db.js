const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.DB_URL;
const dbConnect = async () => {
    mongoose
    .connect(url)
    .then(() => {
      console.log("connected mongoDB");
    })
    .catch((err) => {
      console.log("failed" + err);
    });
}
module.exports = dbConnect