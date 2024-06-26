const express = require("express");
const router = express.Router();

const { saveCardData, getAllEntryes } = require("../controlers/CardData");
const { auth } = require("../controlers/User");


router.post("/setCardData", saveCardData);
router.get("/getAllEntryes",  getAllEntryes);

module.exports = router