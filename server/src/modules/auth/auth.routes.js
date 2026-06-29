const express = require("express");

const router = express.Router();

const authController = require("./auth.controller");
const authenticate = require("../../middleware/auth.middleware");
const validate = require("../../middleware/validate.middleware");
const { authLimiter } = require("../../middleware/rateLimit.middleware");

const { registerSchema, loginSchema } = require("../../validations/auth.validation");

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ujwal
 *               email:
 *                 type: string
 *                 example: ujwal@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post("/register",authLimiter, validate(registerSchema), authController.register);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: ujwal@example.com
 *               password:
 *                 type: string
 *                 example: Password@123
 *     responses:
 *       200:
 *         description: Login successful
 */
router.post("/login",authLimiter, validate(loginSchema), authController.login);

/**
 * @swagger
 * /auth/profile:
 *   get:
 *     summary: Get logged-in user's profile
 *     tags:
 *       - Authentication
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile fetched successfully
 */
router.get("/profile", authenticate, authController.getProfile);

module.exports = router;
