import { CreatePriceUseCase } from "../../../price/application/create-usecase/create-price-usecase";
import { Crypto } from "../../domain/crypto";
import { CryptoRepository } from "../../domain/crypto-repository";
import { CreateCryptoDto } from "./create-crypto-dto";

export class CreateCryptoUseCase {
  constructor(
    private readonly cryptoRepository: CryptoRepository,
    private readonly createPriceUseCase: CreatePriceUseCase
  ) {}

  errorMessage = "Has ocurred an error creating crypto";
  successMessage = "Crypto created successfully";
  run(createcryptoDto: CreateCryptoDto): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to create a new Crypto ---------------"
        );
        const crypto = new Crypto(
          createcryptoDto.name,
          createcryptoDto.currentPrice,
          undefined,
          undefined
        );
        console.log(JSON.stringify(crypto));

        console.log("--------------- Verifying crypto name ---------------");
        const exists = await this.cryptoRepository.getByName(crypto.name);
        if (!exists) {
          const createdcrypto = await this.cryptoRepository.create(crypto);
          console.log(JSON.stringify(createdcrypto));
          await this.createPriceUseCase.run({
            price: createdcrypto.currentPrice,
            cryptoId: createdcrypto.id,
          });
          console.log(this.successMessage);
          resolve(this.successMessage);
        } else {
          reject(
            new Error(`Already exists a crypto whit name: ${crypto.name}`)
          );
        }
      } catch (error) {
        console.error(this.errorMessage);
        reject(new Error(this.errorMessage));
      }
    });
  }
}
