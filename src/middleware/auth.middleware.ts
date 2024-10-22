import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Token missing. Please log in." });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        res
          .status(401)
          .json({ message: "Token expired. Please log in again." });
        return;
      }
      res.status(403).json({ message: "Invalid token" });
      return;
    }

    (req as any).user = user;
    next();
  });
};
