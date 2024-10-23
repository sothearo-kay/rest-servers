import express, { Application } from "express";
import routes from "./routes";
import authRoutes from "./routes/auth.routes";
import { authMiddleware } from "./middleware/auth.middleware";

const app: Application = express();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/api", authMiddleware, routes);

export default app;
