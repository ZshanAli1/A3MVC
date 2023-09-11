const express = require("express");
const router = express.Router();
const newProduct = require("../controller/productControl");
router.post("/product/new", newProduct.newProduct);
module.exports = router;
