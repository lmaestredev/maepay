import { CreatePriceUseCase } from "../../../price/application/create-usecase/create-price-usecase";
import { Crypto } from "../../domain/crypto";
import { CryptoRepository } from "../../domain/crypto-repository";
import { UpdateCryptoDto } from "./update-crypto-dto";

export class UpdateCryptoUseCase {
  constructor(
    private readonly cryptoRepository: CryptoRepository,
    private readonly createPriceUseCase: CreatePriceUseCase
  ) {}

  errorMessage = "Doesn't exists a Crypto with name: ";
  successMessage = "Crypto updated successfully";
  run(cryptoDto: UpdateCryptoDto): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to update a Crypto ---------------"
        );
        console.log(JSON.stringify(cryptoDto));
        console.log("--------------- Searching crypto by name ---------------");
        const exists = await this.cryptoRepository.getByName(cryptoDto.name);
        if (exists) {
          exists.previousPrice = exists.currentPrice;
          exists.currentPrice = cryptoDto.newPrice;
          const cryptoToUpdate = new Crypto(
            exists.name,
            exists.currentPrice,
            exists.previousPrice,
            exists.id
          );

          const updatedcrypto = await this.cryptoRepository.update(
            cryptoToUpdate
          );
          console.log(JSON.stringify(updatedcrypto));
          if (updatedcrypto) {
            await this.createPriceUseCase.run({
              price: updatedcrypto.currentPrice,
              cryptoId: updatedcrypto.id,
            });
          }
          console.log(this.successMessage);
          resolve(this.successMessage);
        } else {
          reject(new Error(this.errorMessage + cryptoDto.name));
        }
      } catch (error) {
        console.error(this.errorMessage + cryptoDto.name);
        reject(new Error(this.errorMessage + cryptoDto.name));
      }
    });
  }
}
