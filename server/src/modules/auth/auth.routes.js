const express = require("express");

const router = express.Router();

const authController = require("./auth.controller");
const authenticate = require("../../middleware/auth.middleware");
const validate = require("../../middleware/validate.middleware");

const {
  registerSchema,
  loginSchema,
} = require("../../validations/auth.validation");

router.post(
  "/register",
  validate(registerSchema),
  authController.register
);

router.post(
  "/login",
  validate(loginSchema),
  authController.login
);

router.get(
  "/profile",
  authenticate,
  authController.getProfile
);

module.exports = router;