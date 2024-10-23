import { ZodError } from "zod";
import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";
import { userSchema, loginScheme } from "../schemas/user.schema";

// User signup
const handleSignup = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = userSchema.parse(req.body);
    const token = await registerUser(username, email, password);
    res.status(201).json({ token }); // 201 created
  } catch (error) {
    if (error instanceof ZodError) {
      res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(500).json({ message: "Internal server error" });
    }
  }
};

// User login
const handleLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = loginScheme.parse(req.body);
    const token = await loginUser(username, password);
    res.json({ token });
  } catch (error) {
    if (error instanceof ZodError) {
      res
        .status(400)
        .json({ message: "Validation error", errors: error.errors });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  }
};

export { handleSignup, handleLogin };
