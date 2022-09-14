const express = require("express");
const router = express.Router();

const loginController = require("../controllers/Account");

router.get("/getAccount", loginController.getAccount);

module.exports = router;
