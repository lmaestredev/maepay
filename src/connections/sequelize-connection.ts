import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "maepay",
  "postgres",
  "mysecretpassword",
  {
    host: "localhost",
    dialect: "postgres",
    // logging: true,
  }
);

import "../crypto/infrastructure/outbound/crypto-model";
import "../price/infrastructure/outbound/price-model";

export const connect = async (alterValue = false) => {
  try {
    console.log("-------------------HEEEEEEEEEY-------------", alterValue);
    await sequelize.sync({ alter: alterValue });
  } catch (error) {
    console.log(error);
    console.error("Unable to connect to the database");
  }
};
