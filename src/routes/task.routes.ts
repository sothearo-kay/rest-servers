import { Router } from "express";
import {
  handleCreateTask,
  handleGetTaskById,
  handleGetAllTasks,
  handleDeleteTaskById,
  handleGetTasksByTag,
  handleGetTasksDueByDate,
} from "../controllers/task.controller";

const router = Router();

router.post("/task", handleCreateTask);
router.get("/task/:taskid", handleGetTaskById);
router.get("/task", handleGetAllTasks);
router.delete("/task/:taskid", handleDeleteTaskById);
router.get("/task/tag/:tagname", handleGetTasksByTag);
router.get("/task/due/:yy/:mm/:dd", handleGetTasksDueByDate);

export default router;
