const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;

const dbConnect = require("./src/config/db")
dbConnect()
const userRouter = require("./src/Routers/userRouter");
app.use("/", userRouter); 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
