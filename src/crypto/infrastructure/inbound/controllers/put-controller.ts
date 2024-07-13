import { Request, Response } from "express";

import { UpdateCryptoUseCase } from "../../../application/update-usecase/update-crypto-usecase";

export class CryptoPutController {
  constructor(private readonly updateCryptoUseCase: UpdateCryptoUseCase) {}

  async run(req: Request, res: Response) {
    const { name } = req.params;
    const { newPrice } = req.body;
    try {
      const useCaseRes = await this.updateCryptoUseCase.run({ name, newPrice });
      res.status(200).json({
        msg: useCaseRes,
      });
    } catch (error) {
      console.log((error as Error).message || "An unknown error occurred.");
      res.status(404).json({
        error: (error as Error).message || "An unknown error occurred.",
      });
    }
  }
}
