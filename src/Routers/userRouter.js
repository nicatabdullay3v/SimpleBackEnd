const router = require("express").Router();
const userControllers = require("./../controllers/userControllers");


router.get("/products", userControllers.getAllUser);
router.get("/products/:id", userControllers.getuserByid);


module.exports = router;

