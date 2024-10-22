import { Request, Response } from "express";
import {
  createTask,
  getTaskById,
  getAllTasks,
  deleteTaskById,
  getTasksByTag,
  getTasksDueByDate,
} from "../services/task.service";

// Create a task
const handleCreateTask = async (req: Request, res: Response) => {
  const { title, tag, dueDate } = req.body;
  try {
    const newTask = await createTask(title, tag, dueDate);
    res.status(201).json({ id: newTask.id });
  } catch (error) {
    res.status(500).json({ message: "Error creating task", error });
  }
};

// Get a task by ID
const handleGetTaskById = async (req: Request, res: Response) => {
  try {
    const task = await getTaskById(parseInt(req.params.taskid));

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
  try {
    await deleteTaskById(parseInt(req.params.taskid));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Error deleting task", error });
  }
};

// Get tasks by tag
const handleGetTasksByTag = async (req: Request, res: Response) => {
  try {
    const tasks = await getTasksByTag(req.params.tagname);
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

export {
  handleCreateTask,
  handleGetTaskById,
  handleGetAllTasks,
  handleDeleteTaskById,
  handleGetTasksByTag,
  handleGetTasksDueByDate,
};
