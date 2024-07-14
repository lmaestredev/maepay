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
const baseUri = "/api/v1/maepay";

export class Server {
  private app: Application;
  private port: number;

  constructor(app: Application = express()) {
    this.app = app;
    this.port = port;
  }

  async dbConnection(sync = false): Promise<void> {
    await connect(sync);
  }

  async start(sync: boolean): Promise<void> {
    await this.dbConnection(sync);

    // Middlewares
    // this.app.use(bodyParser.json());
    this.app.use(express.json());

    // Rutas de mi aplicación
    this.app.use(`${baseUri}/health`, healthRouter);
    this.app.use(`${baseUri}/crypto`, cryptoRouter);
    this.app.use(`${baseUri}/price`, priceRouter);
    this.app.use(`${baseUri}/auth`, authRouter);

    this.app.listen(this.port, async () => {
      console.log(`[APP] - Starting application on port ${this.port}`);
    });
  }
}
