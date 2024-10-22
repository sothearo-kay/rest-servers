import { PrismaClient, Task } from "@prisma/client";

const prisma = new PrismaClient();

const createTask = async (
  title: string,
  tag: string,
  dueDate: string
): Promise<Task> => {
  const task = prisma.task.create({
    data: { title, tag, dueDate },
  });
  return task;
};

const getTaskById = async (id: number): Promise<Task | null> => {
  return await prisma.task.findUnique({
    where: { id },
  });
};

const getAllTasks = async (): Promise<Task[]> => {
  return await prisma.task.findMany();
};

const deleteTaskById = async (id: number): Promise<Task> => {
  return await prisma.task.delete({
    where: { id },
  });
};

const getTasksByTag = async (tag: string): Promise<Task[]> => {
  return await prisma.task.findMany({
    where: { tag },
  });
};

const getTasksDueByDate = async (dueDate: string): Promise<Task[]> => {
  return await prisma.task.findMany({
    where: { dueDate },
  });
};

export {
  createTask,
  getTaskById,
  getAllTasks,
  deleteTaskById,
  getTasksByTag,
  getTasksDueByDate,
};
