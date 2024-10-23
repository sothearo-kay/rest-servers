import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET!;

const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const verifyPassword = async (password: string, hash: string) => {
  return bcrypt.compare(password, hash);
};

const generateToken = async (username: string) => {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
};

const registerUser = async (
  username: string,
  email: string,
  password: string
) => {
  const passwordHash = await hashPassword(password);

  // Store the user in the database
  await prisma.user.create({
    data: {
      username,
      email,
      password: passwordHash,
    },
  });

  return generateToken(username);
};

const loginUser = async (username: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || !(await verifyPassword(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  return generateToken(username);
};

export { registerUser, loginUser };
