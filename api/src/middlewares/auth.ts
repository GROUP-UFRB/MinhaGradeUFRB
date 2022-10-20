import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = (req.headers["x-access-token"] as string) || null;

  if (!token) {
    return res.status(403).json({ message: "Token not found." });
  }
  try {
    const decoded = verify(token, "token_secret");
  } catch (err) {
    return res.status(401).json({ message: "Invalid token." });
  }
  next();
};

export default authMiddleware;
