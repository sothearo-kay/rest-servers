import { Request, Response } from "express";
import {
  createTask,
  getTaskById,
  getAllTasks,
  deleteTaskById,
  getTasksByTag,
  getTasksDueByDate,
  getTasksByUserId,
  toggleTaskCompletion,
} from "../services/task.service";

// Create a task
const handleCreateTask = async (req: Request, res: Response) => {
  const { userId, title, tag, dueDate } = req.body;
  try {
    const newTask = await createTask(userId, title, tag, dueDate);
    res.status(201).json({ id: newTask.id });
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

// Get a task by ID
const handleGetTaskById = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.taskid);
  try {
    const task = await getTaskById(taskId);

    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Error fetching task", error });
  }
};

// Get all tasks
const handleGetAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

// Delete a task by ID
const handleDeleteTaskById = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.taskid);
  try {
    await deleteTaskById(taskId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
};

// Get tasks by tag
const handleGetTasksByTag = async (req: Request, res: Response) => {
  const { tagname } = req.params;
  try {
    const tasks = await getTasksByTag(tagname);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks by tag", error });
  }
};

// Get tasks due by date
const handleGetTasksDueByDate = async (req: Request, res: Response) => {
  const { yy, mm, dd } = req.params;
  const dueDate = `${yy}-${mm}-${dd}`;
  try {
    const tasks = await getTasksDueByDate(dueDate);
    res.json(tasks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching tasks due by date", error });
  }
};

// Get tasks by user ID
const handleGetTasksByUserId = async (req: Request, res: Response) => {
  const userId = parseInt(req.params.userid);
  try {
    const tasks = await getTasksByUserId(userId);
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks by user ID", error });
  }
};

// Toggle task completion
const handleToggleTaskCompletion = async (req: Request, res: Response) => {
  const taskId = parseInt(req.params.taskid);
  try {
    const updatedTask = await toggleTaskCompletion(taskId);
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: "Error toggling task completion", error });
  }
};

export {
  handleCreateTask,
  handleGetTaskById,
  handleGetAllTasks,
  handleDeleteTaskById,
  handleGetTasksByTag,
  handleGetTasksDueByDate,
  handleGetTasksByUserId,
  handleToggleTaskCompletion,
};
