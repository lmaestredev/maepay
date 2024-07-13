import { Request, Response } from "express";

import { GetAllCryptosUseCase } from "../../../application/get-usecase/get-all-cryptos-usecase";

export class CryptoGetController {
  constructor(private readonly getAllCryptosUseCase: GetAllCryptosUseCase) {}

  async getAll(req: Request, res: Response) {
    try {
      const useCaseRes = await this.getAllCryptosUseCase.run();
      res.status(200).json({
        cryptos: useCaseRes,
      });
    } catch (error) {
      console.log((error as Error).message || "An unknown error occurred.");
      res.status(404).json({
        error: (error as Error).message || "An unknown error occurred.",
      });
    }
  }
}
