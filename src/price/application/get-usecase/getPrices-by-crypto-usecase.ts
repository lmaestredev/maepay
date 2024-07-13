import { GetCryptoByIdUseCase } from "../../../crypto/application/get-usecase/get-crypto-by-id-usecase";
import { Price } from "../../domain/price";
import { PriceRepository } from "../../domain/price-repository";

export class GetPricesByCryptoIdUseCase {
  constructor(
    private readonly priceRepository: PriceRepository,
    private readonly getCryptoByIdUseCase: GetCryptoByIdUseCase
  ) {}

  errorMessage = "Prices list is empty";
  successMessage = "Crypto prices returned successfully";
  run(cryptoId: number): Promise<Price[]> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to getting crypto prices ---------------"
        );
        console.log("--------------- Verifying crypto's id ---------------");
        const crypto = await this.getCryptoByIdUseCase.run(cryptoId);
        if (crypto) {
          const prices = await this.priceRepository.getPricesByCryptoId(
            cryptoId
          );
          console.log(this.successMessage);
          resolve(prices);
        } else {
          reject(new Error(this.errorMessage));
        }
      } catch (error) {
        console.error((error as Error).message || "An unknown error occurred.");
        reject(new Error(this.errorMessage));
      }
    });
  }
}
