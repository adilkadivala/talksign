import express from "express";
import { authMiddleware } from "../middleware/auth";
import {
  cancelSubscription,
  createSubscription,
  getAllSubscription,
  getSubscriptionStatus,
} from "../controllers/subscription";

const subscriptionRouter = express.Router();

subscriptionRouter
  .route("/api/v1/create")
  .post(authMiddleware, createSubscription);

subscriptionRouter
  .route("/api/v1/status")
  .get(authMiddleware, getSubscriptionStatus);

subscriptionRouter.route("/api/v1/all").get(authMiddleware, getAllSubscription);

subscriptionRouter
  .route("/api/v1/cancel")
  .post(authMiddleware, cancelSubscription);

export default subscriptionRouter;
