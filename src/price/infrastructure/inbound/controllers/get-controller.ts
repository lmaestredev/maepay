import { Request, Response } from "express";

import { GetLastPriceFromACryptoUseCase } from "../../../application/get-usecase/getLastPrice-from-a-crypto";
import { GetPricesByCryptoIdUseCase } from "../../../application/get-usecase/getPrices-by-crypto-usecase";

export class PriceGetController {
  constructor(
    private readonly getPricesByCryptoId: GetPricesByCryptoIdUseCase,
    private readonly getLastPriceFromACrypto: GetLastPriceFromACryptoUseCase
  ) {}

  async getByCryptoId(req: Request, res: Response) {
    try {
      const { cryptoId } = req.params;
      const useCaseRes = await this.getPricesByCryptoId.run(Number(cryptoId));
      res.status(200).json({
        crypto: cryptoId,
        prices: useCaseRes,
      });
    } catch (error) {
      console.log((error as Error).message || "An unknown error occurred.");
      res.status(404).json({
        error: (error as Error).message || "An unknown error occurred.",
      });
    }
  }

  async getLastPrice(req: Request, res: Response) {
    try {
      const { cryptoId } = req.params;
      const useCaseRes = await this.getLastPriceFromACrypto.run(
        Number(cryptoId)
      );
      res.status(200).json({
        crypto: cryptoId,
        lastPrice: useCaseRes,
      });
    } catch (error) {
      console.log((error as Error).message || "An unknown error occurred.");
      res.status(404).json({
        error: (error as Error).message || "An unknown error occurred.",
      });
    }
  }
}
