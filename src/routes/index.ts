import { Router } from "express";
import taskRoutes from "./task.routes";
import userRoutes from "./user.routes";

const router = Router();

// Register all routes
router.use("/task", taskRoutes);
router.use("/users", userRoutes);

export default router;
