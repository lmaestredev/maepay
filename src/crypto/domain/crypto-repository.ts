import { Crypto } from "./crypto";

export interface CryptoRepository {
  create(crypto: Crypto): Promise<Crypto>;
  getByName(name: string): Promise<Crypto | null>;
  update(crypto: Crypto): Promise<Crypto | null>;
  getAll(): Promise<Crypto[]>;
  getById(id: number): Promise<Crypto | null>;
}
