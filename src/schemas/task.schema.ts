import { z } from "zod";

export const taskSchema = z.object({
  userId: z.number(),
  title: z.string().min(3),
  tag: z.string().min(3),
  dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
});
