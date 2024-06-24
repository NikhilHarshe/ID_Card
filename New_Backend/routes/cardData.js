const express = require("express");
const router = express.Router();

const { saveCardData } = require("../controlers/CardData");


router.post("/setCardData", saveCardData);

module.exports = router