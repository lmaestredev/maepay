import { Crypto } from "../../domain/crypto";
import { CryptoRepository } from "../../domain/crypto-repository";

export class GetAllCryptosUseCase {
  constructor(private readonly cryptoRepository: CryptoRepository) {}

  errorMessage = "Cryptos list is empty";
  successMessage = "Cryptos returned successfully";
  run(): Promise<Crypto[]> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to getting cryptos ---------------"
        );

        const cryptos = await this.cryptoRepository.getAll();
        if (cryptos) {
          console.log(this.successMessage);
          resolve(cryptos);
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
