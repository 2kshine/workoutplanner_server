const express = require("express");

const userAuthController = require("../controllers/userAuthController");

const router = express.Router();

router.post("/signup", userAuthController.signUp);
router.post("/login", userAuthController.login);

module.exports = router;
