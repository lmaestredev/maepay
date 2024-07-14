import { Server } from "./server";

const args = process.argv.slice(2);
const syncDb = args.includes("true") || false;

const server = new Server();

server.start(syncDb);
