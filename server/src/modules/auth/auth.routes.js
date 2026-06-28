const express = require("express");
const authenticate = require("../../middleware/auth.middleware");


const router = express.Router();

const authController = require("./auth.controller");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/profile", authenticate, authController.getProfile);


module.exports = router;