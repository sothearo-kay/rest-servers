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
const handleCreateTask = (req: Request, res: Response) => {
  const { title, tag, dueDate } = req.body;
  const newTask = createTask({ title, tag, dueDate });
  res.status(201).json({ id: newTask.id });
};

// Get a task by ID
const handleGetTaskById = (req: Request, res: Response) => {
  const task = getTaskById(parseInt(req.params.taskid));

  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }
  res.json(task);
};

// Get all tasks
const handleGetAllTasks = (req: Request, res: Response) => {
  res.json(getAllTasks());
};

// Delete a task by ID
const handleDeleteTaskById = (req: Request, res: Response) => {
  deleteTaskById(parseInt(req.params.taskid));
  res.status(204).send();
};

// Get tasks by tag
const handleGetTasksByTag = (req: Request, res: Response) => {
  res.json(getTasksByTag(req.params.tagname));
};

// Get tasks due by date
const handleGetTasksDueByDate = (req: Request, res: Response) => {
  const { yy, mm, dd } = req.params;
  const dueDate = `${yy}-${mm}-${dd}`;
  res.json(getTasksDueByDate(dueDate));
};

export {
  handleCreateTask,
  handleGetTaskById,
  handleGetAllTasks,
  handleDeleteTaskById,
  handleGetTasksByTag,
  handleGetTasksDueByDate,
};
