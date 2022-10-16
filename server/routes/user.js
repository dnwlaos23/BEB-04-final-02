var express = require("express");
var router = express.Router();

const { userController } = require("../controller");

// * POST api/users/login
router.post("/login", userController.login.post);

// * POST /users/logout
router.post("/logout", userController.logout.post);

// * get /users/artist/mypage
router.get("/artist/mypage", userController.a_mypage.get);

// * post /users/artist/detail
router.post("/artist/detail", userController.a_detail.post);

// * get /users/general/mypage
router.get("/general/mypage", userController.g_mypage.get);

// * post /users/general/detail
router.post("/general/detail", userController.g_detail.post);

// * POST /users/join
router.post("/join", userController.join.post);

// * POST /users/checkId
router.post("/checkId", userController.checkId.post);


module.exports = router;