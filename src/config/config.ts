interface ServerConfig {
  port: number;
}

interface DatabaseConfig {
  name: string;
}

interface Config {
  server: ServerConfig;
  database: DatabaseConfig;
}

export const config: Config = {
  server: {
    port: parseInt(process.env.PORT || "3000"),
  },
  database: {
    name: process.env.DATABASE || "postgres",
  },
};
