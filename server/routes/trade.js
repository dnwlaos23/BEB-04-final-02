var express = require("express");
var router = express.Router();

const { tradeController } = require("../controller");

// * POST api/trade/buyRequest
router.post("/buyRequest", tradeController.buyRequest.post);

// * POST api/trade/reservation
router.post("/reservation", tradeController.reservation.post);

// * POST api/trade/reservation
router.post("/cancleBuyRequest", tradeController.cancleBuyRequest.post);

// * POST api/trade/cancleReservation
router.post("/cancleReservation", tradeController.cancleReservation.post);

// * POST api/trade/general/g_confirmContract
router.post("/general/confirmContract", tradeController.g_confirmContract.post);

// * POST api/trade/artist/a_confirmContract
router.post("/artist/confirmContract", tradeController.a_confirmContract.post);

// * POST api/trade/tradeDetail
router.post("/tradeDetail", tradeController.tradeDetail.post);

module.exports = router;