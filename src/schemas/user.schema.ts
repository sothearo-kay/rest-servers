import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(3),
});

const loginScheme = z.object({
  username: z.string().min(3),
  password: z.string().min(3),
});

export { userSchema, loginScheme };
