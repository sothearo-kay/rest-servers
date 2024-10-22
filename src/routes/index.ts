import { Router } from "express";
import taskRoutes from "./task.routes";

const router = Router();

// Register all routes
router.use("/task", taskRoutes);

export default router;
