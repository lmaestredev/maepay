import express from "express";

import { AuthController } from "../controller/auth-controller";

const authRouter = express.Router();
const authController = new AuthController();

authRouter.post("/login", authController.login.bind(authController));

export { authRouter };
