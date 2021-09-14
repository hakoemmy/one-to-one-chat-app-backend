import express from "express";
import Validator from "../../middlewares/Validator";
import { accountExist, userExist } from "../../middlewares/ScopeChecker";
import AuthController from "../../controllers/AuthController";
import DataChecker from "../../middlewares/DataChecker";
import inputError from "../../middlewares/inputError";

const authRouter = express.Router();

/**
 * @swagger
 *
 * /api/v1/auth/signup:
 *   post:
 *     security: []
 *     summary: Account registration
 *     description: Users should be able to create an account before they start chatting
 *     tags:
 *       - Auth
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               username:
 *                 type: string
 *     produces:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *               message:
 *                 type: string
 *
 *     responses:
 *       201:
 *         description: Account created successfully!
 */

authRouter.post(
  "/signup",
  Validator.signupRules(),
  Validator.validateInput,
  accountExist,
  AuthController.signup
);

/**
 * @swagger
 *
 * /api/v1/auth/login:
 *   post:
 *     security: []
 *     summary: User Login
 *     description: Login a user
 *     tags:
 *       - Auth
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     produces:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               data:
 *                 type: string
 *               message:
 *                 type: string
 *
 *     responses:
 *       200:
 *         description: Logged in successfully!
 */

authRouter.post(
  "/login",
  Validator.loginRules(),
  inputError,
  DataChecker.validateCredentials,
  AuthController.login
);
export default authRouter;
