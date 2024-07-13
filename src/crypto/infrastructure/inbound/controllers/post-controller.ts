import { Request, Response } from "express";

import { CreateCryptoUseCase } from "../../../application/create-usecase/create-crypto-usecase";

export class CryptoPostController {
  constructor(private readonly createCryptoUseCase: CreateCryptoUseCase) {}
  async create(req: Request, res: Response) {
    const { name, currentPrice } = req.body;
    try {
      const useCaseRes = await this.createCryptoUseCase.run({
        name,
        currentPrice,
      });
      res.status(202).json({
        msg: useCaseRes,
      });
    } catch (error) {
      console.log((error as Error).message || "An unknown error occurred.");
      res.status(409).json({
        error: (error as Error).message || "An unknown error occurred.",
      });
    }
  }

  async createMassive(req: Request, res: Response) {
    const cryptos = req.body;
    try {
      for (const crypto of cryptos) {
        const name = crypto.name;
        const currentPrice = crypto.currentPrice;

        const useCaseRes = await this.createCryptoUseCase.run({
          name,
          currentPrice,
        });
        console.log(useCaseRes);
      }
      res.status(202).json({
        msg: "Cryptos created successfully",
      });
    } catch (error) {
      console.log((error as Error).message || "An unknown error occurred.");
      res.status(409).json({
        error: (error as Error).message || "An unknown error occurred.",
      });
    }
  }
}
