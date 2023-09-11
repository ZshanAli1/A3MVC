const express = require("express");
const router = express.Router();
const greetC = require("../controller/greetControl");
router.get("/greet", greetC.greet);
module.exports = router;
