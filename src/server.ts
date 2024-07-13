// import bodyParser from "body-parser";
import { config as dotEnvConfig } from "dotenv";
import express, { Application } from "express";

import { authRouter } from "./auth/router/auth-router";
import { config } from "./config/config";
import { connect } from "./connections/sequelize-connection";
import { cryptoRouter } from "./crypto/infrastructure/inbound/routers/crypto-router";
import { healthRouter } from "./health/health-router";
import { priceRouter } from "./price/infrastructure/inbound/routers/price-router";

dotEnvConfig();
const { port } = config.server;
const baseUri = "/api/v1/flixxo-app";

export class Server {
  private app: Application;
  private port: number;

  constructor(app: Application = express()) {
    this.app = app;
    this.port = port;
  }

  async dbConnection(): Promise<void> {
    await connect();
  }

  async start(): Promise<void> {
    await this.dbConnection();

    // Middlewares
    // this.app.use(bodyParser.json());
    this.app.use(express.json());

    // Rutas de mi aplicación
    this.app.use(`${baseUri}/health`, healthRouter);
    this.app.use(`${baseUri}/crypto`, cryptoRouter);
    this.app.use(`${baseUri}/price`, priceRouter);
    this.app.use(`${baseUri}/auth`, authRouter);

    await this.app.listen(this.port, async () => {
      console.log(`[APP] - Starting application on port ${this.port}`);
    });
  }
}
