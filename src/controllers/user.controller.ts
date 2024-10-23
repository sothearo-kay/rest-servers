import { Request, Response } from "express";
import { getUsers, getUserById } from "../services/user.service";

// Get all users
const handleGetUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

// Get a user by ID
const handleGetUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    const user = await getUserById(userId);

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

export { handleGetUsers, handleGetUserById };
