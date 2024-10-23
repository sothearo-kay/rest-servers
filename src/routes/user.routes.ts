import { Router } from "express";
import {
  handleDeleteUserById,
  handleGetUserById,
  handleGetUsers,
} from "../controllers/user.controller";

const router = Router();

router.get("/", handleGetUsers);
router.get("/:userId", handleGetUserById);
router.delete("/:userId", handleDeleteUserById);

export default router;
