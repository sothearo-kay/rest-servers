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

router.post("/", handleCreateTask);
router.get("/:taskid", handleGetTaskById);
router.get("/", handleGetAllTasks);
router.delete("/:taskid", handleDeleteTaskById);
router.get("/tag/:tagname", handleGetTasksByTag);
router.get("/due/:yy/:mm/:dd", handleGetTasksDueByDate);

export default router;
