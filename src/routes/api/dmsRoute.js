import express from "express";
import Validator from "../../middlewares/Validator";
import DmController from "../../controllers/DmController";
import verifyToken from "../../middlewares/verifyToken";

const authRouter = express.Router();

/**
 * @swagger
 *
 * /api/v1/dms:
 *   post:
 *     security: []
 *     summary: Send a DM
 *     description: Users should be able to create send dm to any user
 *     tags:
 *       - DMs
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               receiverId:
 *                 type: string
 *               message:
 *                 type: string
 *     parameters:
 *        - name: x-auth-token
 *          in : header
 *          description: authorization header
 *          required: true
 *          type: string
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
 *         description: DM created successfully!
 */

authRouter.post(
  "/",
  Validator.dmRules(),
  Validator.validateInput,
  verifyToken,
  DmController.createDm
);

export default authRouter;
