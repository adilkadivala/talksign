import express from "express";
import { register, signIn } from "../controllers/auth";
const authRouter = express.Router();

// POST /auth/register
authRouter.route("/api/v1/register").post(register);

// POST /auth/login
authRouter.route("/api/v1/login").post(signIn);

export default authRouter;
    