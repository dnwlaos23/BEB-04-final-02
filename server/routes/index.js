/* '/api'로 시작하는 url 관리 router 파일 */

const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const artRouter = require("./art");
const tradeRouter = require("./trade");
const web3Router = require("./web3");

// * request URL : /api/users
router.use("/user", userRouter);
// * request URL : /api/art
router.use("/art", artRouter);
// * request URL : /api/trade
router.use("/trade", tradeRouter);
// * request URL : /api/web3
router.use("/web3", web3Router);

module.exports = router;