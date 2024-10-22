import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";

// User signup
const handleSignup = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await registerUser(username, password);
    res.status(201).json({ token }); // 201 created
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// User login
const handleLogin = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await loginUser(username, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" }); // 401 Unauthorized
  }
};

export { handleSignup, handleLogin };
