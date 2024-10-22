import { Task } from "../models/task.model";

let tasks: Task[] = [];
let currentId = 1;

const createTask = (task: Omit<Task, "id">): Task => {
  const newTask = { ...task, id: currentId++ };
  tasks.push(newTask);
  return newTask;
};

const getTaskById = (id: number): Task | undefined =>
  tasks.find((task) => task.id === id);

const getAllTasks = (): Task[] => tasks;

const deleteTaskById = (id: number) => {
  tasks = tasks.filter((task) => task.id !== id);
};

const getTasksByTag = (tag: string): Task[] =>
  tasks.filter((task) => task.tag === tag);

const getTasksDueByDate = (dueDate: string): Task[] =>
  tasks.filter((task) => task.dueDate === dueDate);

export {
  createTask,
  getTaskById,
  getAllTasks,
  deleteTaskById,
  getTasksByTag,
  getTasksDueByDate,
};
