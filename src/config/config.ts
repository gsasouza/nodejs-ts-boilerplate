import * as path from "path";
import * as dotenvSafe from "dotenv-safe";

const envFile = (name: string) => path.join(__dirname, `../../${name}`);

dotenvSafe.load({
  path: envFile(".env"),
  sample: envFile(".env.example"),
  allowEmptyValues: process.env.NODE_ENV !== "production"
});

const status =
  process.env.NODE_ENV === "production" ? "production" : "development";
if (process.env.NODE_ENV)
  console.log(
    `CONFIG: NODE_ENV: '${process.env.NODE_ENV}' running in: '${status}'`
  );

export const port: number | string = process.env.PORT || 5100;
export const jwtSecret: string = process.env.JWT_KEY || "";
export const mongoUrl: string = process.env.MONGO_URL || "";
export const env = process.env.NODE_ENV;