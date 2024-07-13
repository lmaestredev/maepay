import { Crypto } from "../../domain/crypto";
import { CryptoRepository } from "../../domain/crypto-repository";
import { CryptoModel } from "./crypto-model";

export class CryptoRepositoryImpl implements CryptoRepository {
  async create(crypto: Crypto): Promise<Crypto> {
    const created = await CryptoModel.create({
      name: crypto.name,
      currentPrice: crypto.currentPrice,
    });

    return new Crypto(
      created.name,
      created.currentPrice,
      created.previousPrice,
      created.id
    );
  }

  async getByName(name: string): Promise<Crypto | null> {
    const crypto = await CryptoModel.getByName(name);
    return crypto;
  }

  async update(crypto: Crypto): Promise<Crypto | null> {
    const test = await CryptoModel.findByPk(crypto.id);

    if (test) {
      await test.update({
        name: crypto.name,
        currentPrice: crypto.currentPrice,
        previousPrice: crypto.previousPrice,
        id: crypto.id,
      });

      return new Crypto(
        test.name,
        test.currentPrice,
        test.previousPrice,
        test.id
      );
    } else {
      return null;
    }
  }

  async getAll(): Promise<Crypto[]> {
    const CryptoModels = await CryptoModel.findAll();

    const cryptos: Crypto[] = CryptoModels.map((model) => {
      return new Crypto(
        model.name,
        model.currentPrice,
        model.previousPrice,
        model.id
      );
    });

    return cryptos;
  }

  async getById(id: number): Promise<Crypto | null> {
    const crypto = await CryptoModel.findByPk(id);
    return crypto;
  }
}
