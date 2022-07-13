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

module.exports = router;