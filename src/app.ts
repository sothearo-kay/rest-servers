import express, { Application } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import authRoutes from "./routes/auth.routes";
import { authMiddleware } from "./middleware/auth.middleware";

dotenv.config();

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/api", authMiddleware, routes);

export default app;
