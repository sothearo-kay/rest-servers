import { PrismaClient, Task } from "@prisma/client";

const prisma = new PrismaClient();

const createTask = async (
  userId: number,
  title: string,
  tag: string,
  dueDate: string
): Promise<Task> => {
  const task = prisma.task.create({
    data: {
      title,
      tag,
      dueDate,
      user: { connect: { id: userId } },
    },
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

const getTasksByUserId = async (userId: number): Promise<Task[]> => {
  return await prisma.task.findMany({
    where: { userId },
  });
};

const toggleTaskCompletion = async (taskId: number): Promise<Task> => {
  const task = await prisma.task.findUnique({
    where: { id: taskId },
  });

  if (!task) {
    throw new Error("Task not found");
  }

  // Toggle the completion status
  return await prisma.task.update({
    where: { id: taskId },
    data: { completed: !task.completed },
  });
};

export {
  createTask,
  getTaskById,
  getAllTasks,
  deleteTaskById,
  getTasksByTag,
  getTasksDueByDate,
  getTasksByUserId,
  toggleTaskCompletion,
};
