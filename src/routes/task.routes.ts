import { Router } from "express";
import {
  handleCreateTask,
  handleGetTaskById,
  handleGetAllTasks,
  handleDeleteTaskById,
  handleGetTasksByTag,
  handleGetTasksDueByDate,
  handleGetTasksByUserId,
  handleToggleTaskCompletion,
} from "../controllers/task.controller";

const router = Router();

router.post("/", handleCreateTask);
router.get("/:taskid", handleGetTaskById);
router.get("/", handleGetAllTasks);
router.delete("/:taskid", handleDeleteTaskById);
router.get("/tag/:tagname", handleGetTasksByTag);
router.get("/due/:yy/:mm/:dd", handleGetTasksDueByDate);
router.get("/users/:userid", handleGetTasksByUserId);
router.patch("/:taskid/toggle", handleToggleTaskCompletion);

export default router;
