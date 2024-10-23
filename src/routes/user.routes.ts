import { Router } from "express";
import {
  handleGetUserById,
  handleGetUsers,
} from "../controllers/user.controller";

const router = Router();

router.get("/", handleGetUsers);
router.get("/:userId", handleGetUserById);

export default router;
