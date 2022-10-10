var express = require("express");
var router = express.Router();

const { web3Controller } = require("../controller");

// * get /web3/getMyNFT
router.get("/getMyNFT", web3Controller.getMyNFT.get);


module.exports = router;