import dotenvSafe from "dotenv-safe";
import path from "path";

dotenvSafe.config({
  path: path.resolve(__dirname, "..", ".env"),
});

export const { WEB3STORAGE_TOKEN } = <{ [key: string]: string }>process.env;
