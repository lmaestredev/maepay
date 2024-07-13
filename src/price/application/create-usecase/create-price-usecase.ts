import { Price } from "../../domain/price";
import { PriceRepository } from "../../domain/price-repository";
import { CreatePriceDto } from "./create-price-dto";

export class CreatePriceUseCase {
  constructor(private readonly priceRepository: PriceRepository) {}

  async run(createPriceDto: CreatePriceDto): Promise<void> {
    try {
      const price = new Price(
        createPriceDto.price,
        createPriceDto.cryptoId,
        undefined,
        undefined
      );
      console.log(JSON.stringify(price));
      await this.priceRepository.create(price);
    } catch (error) {
      console.error("Has ocurred an error creating Price");
      throw new Error("Has ocurred an error creating Price");
    }
  }
}
