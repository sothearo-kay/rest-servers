import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// generate by -> crypto.randomBytes(32).toString("hex");
const JWT_SECRET = process.env.JWT_SECRET!;

console.log(process.env);

const users = new Map<string, { passwordHash: string }>();

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

const registerUser = async (username: string, password: string) => {
  const passwordHash = await hashPassword(password);
  users.set(username, { passwordHash });
  return generateToken(username);
};

const loginUser = async (username: string, password: string) => {
  const user = users.get(username);
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    throw new Error("Invalid credentials");
  }
  return generateToken(username);
};

export { registerUser, loginUser };
