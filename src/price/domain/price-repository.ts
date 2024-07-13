import { Price } from "./price";

export interface PriceRepository {
  // getById(id: string): Promise<Price | null>;
  create(price: Price): Promise<void>;
  getPricesByCryptoId(id: number): Promise<Price[]>;
  getLastPriceFromACrypto(id: number): Promise<Price | null>;
}
