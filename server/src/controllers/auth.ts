import type { Request, Response } from "express";
import { SignInSchema, SignUpSchema } from "../types/input";
import { prisma } from "../prisma/index";
import incrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// register

export const register = async (req: Request, res: Response) => {
  try {
    const body = SignUpSchema.safeParse(req.body);
    if (!body.success) {
      return res
        .status(400)
        .json({ error: "Validation failed", details: body.error });
    }

    const { name, email, password } = body.data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Hash password
    const passwordHash = await incrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        passwordHash,
      },
      select: { id: true, email: true, name: true },
    });

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// sign-in

export const signIn = async (req: Request, res: Response) => {
  try {
    const body = SignInSchema.safeParse(req.body);
    if (!body.success) {
      return res
        .status(400)
        .json({ error: "Validation failed", details: body.error });
    }

    const { email, password } = body.data;

    // Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Verify password
    const isValidPassword = await incrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "30d" }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email, name: user.name },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
