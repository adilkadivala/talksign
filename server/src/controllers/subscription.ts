import type { Response } from "express";
import { CreateSubscriptionSchema } from "../types/input";
import { prisma } from "../prisma/index";
import type { AuthRequest } from "../middleware/auth";

const MONTHLY_PRICE = 9.99;

export const createSubscription = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const body = CreateSubscriptionSchema.safeParse(req.body);
    if (!body.success) {
      return res
        .status(400)
        .json({ error: "Validation failed", details: body.error });
    }

    const price = body.data.price || MONTHLY_PRICE;

    const existingSubscription = await prisma.subscription.findFirst({
      where: {
        userId: req.userId,
        status: "ACTIVE",
      },
    });

    if (existingSubscription) {
      return res
        .status(400)
        .json({ error: "User already has an active subscription" });
    }

    const renewDate = new Date();
    renewDate.setDate(renewDate.getDate() + 30);

    const subscription = await prisma.subscription.create({
      data: {
        userId: req.userId,
        price,
        status: "PENDING",
        renewDate,
      },
    });

    return res.status(201).json({
      message: "Subscription created (pending payment)",
      subscription,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// get status

export const getSubscriptionStatus = async (
  req: AuthRequest,
  res: Response
) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const subscription = await prisma.subscription.findFirst({
      where: { userId: req.userId },
      orderBy: { createdAt: "desc" },
    });

    if (!subscription) {
      return res.status(200).json({
        message: "No subscription found",
        subscription: null,
      });
    }

    return res.status(200).json({
      message: "Subscription status retrieved",
      subscription,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// gat all subscription

export const getAllSubscription = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const subscriptions = await prisma.subscription.findMany({
      where: { userId: req.userId },
      orderBy: { createdAt: "desc" },
    });

    return res.status(200).json({
      message: "Subscriptions retrieved",
      subscriptions,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// cancel subscription

export const cancelSubscription = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const subscription = await prisma.subscription.findFirst({
      where: {
        userId: req.userId,
        status: "ACTIVE",
      },
    });

    if (!subscription) {
      return res.status(404).json({ error: "No active subscription found" });
    }

    const updated = await prisma.subscription.update({
      where: { id: subscription.id },
      data: { status: "INACTIVE" },
    });

    return res.status(200).json({
      message: "Subscription cancelled",
      subscription: updated,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
