import { DataTypes, Model } from "sequelize";

import { sequelize } from "../../../connections/sequelize-connection";
import { PriceModel } from "../../../price/infrastructure/outbound/price-model";

export class CryptoModel extends Model {
  declare name: string;
  declare currentPrice: number;
  declare previousPrice?: number;
  declare id?: number;

  static async getByName(name: string): Promise<CryptoModel | null> {
    const crypto = await this.findOne({
      where: { name: name },
    });

    return crypto;
  }
}

CryptoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    currentPrice: {
      type: DataTypes.DECIMAL,
    },
    previousPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "cryptos",
    sequelize,
  }
);

CryptoModel.hasMany(PriceModel, {
  foreignKey: "cryptoId",
  sourceKey: "id",
});

PriceModel.belongsTo(CryptoModel, {
  foreignKey: "cryptoId",
});
