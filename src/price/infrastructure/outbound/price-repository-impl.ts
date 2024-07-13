import { Price } from "../../domain/price";
import { PriceRepository } from "../../domain/price-repository";
import { PriceModel } from "./price-model";

export class PriceRepositoryImpl implements PriceRepository {
  async create(price: Price): Promise<void> {
    await PriceModel.create({
      price: price.price,
      cryptoId: price.cryptoId,
    });
  }

  async getPricesByCryptoId(id: number): Promise<Price[]> {
    const prices = await PriceModel.getPricesByCryptoId(id);
    return prices;
  }

  async getLastPriceFromACrypto(id: number): Promise<Price | null> {
    const price = await PriceModel.getLastPriceByCryptoId(id);
    return price;
  }
}
