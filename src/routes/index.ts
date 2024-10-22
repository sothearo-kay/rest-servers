import { Router, Request, Response } from "express";

const router = Router();

// Root route
router.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript + Node.js!");
});

export default router;
