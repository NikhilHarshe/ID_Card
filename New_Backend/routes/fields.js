const express = require("express");
const router = express.Router();

const { CreateFields } = require("../controlers/RequiredFields");

router.post("/createFields", CreateFields);


module.exports = router