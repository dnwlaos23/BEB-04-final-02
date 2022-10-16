var express = require("express");
var router = express.Router();

const { artController } = require("../controller");

// * POST api/art/insertArt
router.post("/insertArt", artController.insertArt.post);

// * GET api/art/artList
router.get("/artList", artController.artList.get);

// * POST api/art/artDetail
router.post("/artDetail", artController.artDetail.post);

module.exports = router;