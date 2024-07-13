import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export const jwtMiddleware = (
  req: Request & { header: { [key: string]: string } },
  res: Response,
  next: NextFunction
) => {
  const token = req.header("authorization");
  console.log(JSON.stringify(token));

  if (!token) {
    return res.status(401).json({ error: "Unauthorized - Token missing" });
  }

  try {
    const decoded = jwt.verify(token, "1234");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized - Invalid token" });
  }
};

export const generateToken = (userId: string): string => {
  return jwt.sign({ userId }, "1234", { expiresIn: "1h" });
};
