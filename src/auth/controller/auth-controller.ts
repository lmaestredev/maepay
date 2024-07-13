import { Request, Response } from "express";

import { generateToken } from "../middleware/jwtMiddleware";

export class AuthController {
  async login(req: Request, res: Response): Promise<void> {
    try {
      const userId = "123";
      const token = generateToken(userId);

      res.status(200).json({ token });
    } catch (error) {
      console.error((error as Error).message || "An unknown error occurred.");
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
