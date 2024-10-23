import { Request, Response } from "express";
import {
  getUsers,
  getUserById,
  deleteUserById,
} from "../services/user.service";
import { deleteUserTasks } from "../services/task.service";

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

// Delete a user by ID
const handleDeleteUserById = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  try {
    const { count } = await deleteUserTasks(userId);
    console.log(`Deleted ${count} tasks for user ${userId}`);

    await deleteUserById(userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};

export { handleGetUsers, handleGetUserById, handleDeleteUserById };
