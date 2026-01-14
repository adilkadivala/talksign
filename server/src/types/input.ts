import z from "zod";

export const SignUpSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.email(),
  password: z.string().min(6),
});

export const SignInSchema = SignUpSchema.pick({
  email: true,
  password: true,
});

export const CreateSubscriptionSchema = z.object({
  price: z.number().positive().optional(),
});

export const PaymentSchema = z.object({
  cardNumber: z.string().regex(/^\d{4}$/, "Must provide last 4 digits of card"),
  amount: z.number().positive(),
});
