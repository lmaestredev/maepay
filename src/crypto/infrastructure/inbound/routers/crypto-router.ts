import express from "express";
import { NextFunction, Request, Response } from "express";

import { jwtMiddleware } from "../../../../auth/middleware/jwtMiddleware";
import {
  cryptoGetController,
  cryptoPostController,
  cryptoPutController,
} from "../../dependencies";

const cryptoRouter = express.Router();

cryptoRouter.post(
  "/create",
  jwtMiddleware as (req: Request, res: Response, next: NextFunction) => void,
  cryptoPostController.create.bind(cryptoPostController)
);
cryptoRouter.post(
  "/create-massive",
  jwtMiddleware as (req: Request, res: Response, next: NextFunction) => void,
  cryptoPostController.createMassive.bind(cryptoPostController)
);
cryptoRouter.put(
  "/update/:name",
  jwtMiddleware as (req: Request, res: Response, next: NextFunction) => void,
  cryptoPutController.run.bind(cryptoPutController)
);
cryptoRouter.get(
  "/get-all",
  cryptoGetController.getAll.bind(cryptoGetController)
);

export { cryptoRouter as cryptoRouter };
