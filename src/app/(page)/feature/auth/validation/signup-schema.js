import { z } from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters"),

    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email"),

    phoneNumber: z
      .string()
      .min(10, "Phone number must be 10 digits")
      .max(10, "Phone number must be 10 digits")
      .regex(/^[0-9]+$/, "Only numbers allowed"),

    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[A-Z]/, "Must include at least 1 uppercase letter")
      .regex(/[0-9]/, "Must include at least 1 number")
      .regex(/[^A-Za-z0-9]/, "Must include at least 1 special character"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });