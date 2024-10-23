import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const getUsers = async (): Promise<User[]> => {
  return await prisma.user.findMany();
};

const getUserById = async (id: number): Promise<User | null> => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

const deleteUserById = async (id: number): Promise<User> => {
  return await prisma.user.delete({
    where: { id },
  });
};

export { getUsers, getUserById, deleteUserById };
