import { Crypto } from "../../domain/crypto";
import { CryptoRepository } from "../../domain/crypto-repository";

export class GetCryptoByIdUseCase {
  constructor(private readonly cryptoRepository: CryptoRepository) {}

  errorMessage = "Crypto not found";
  successMessage = "Crypto founded successfully";
  run(id: number): Promise<Crypto> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to finding crypto by id ---------------"
        );
        const crypto = await this.cryptoRepository.getById(id);
        if (crypto) {
          console.log(this.successMessage);
          resolve(crypto);
        } else {
          reject(new Error(this.errorMessage));
        }
      } catch (error) {
        console.error(this.errorMessage);
        reject(new Error(this.errorMessage));
      }
    });
  }
}
