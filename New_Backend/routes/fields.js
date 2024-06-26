const express = require("express");
const router = express.Router();

const { CreateFields, getFormFields } = require("../controlers/RequiredFields");

router.post("/createFields", CreateFields);
router.post("/getFormFields", getFormFields);


module.exports = router