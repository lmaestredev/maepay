import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("maepay", "postgres", "mysecretpassword", {
  host: "localhost",
  dialect: "postgres",
});

import "../crypto/infrastructure/outbound/crypto-model";
import "../price/infrastructure/outbound/price-model";

export const connect = async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.log(error);
    console.error("Unable to connect to the database");
  }
};
