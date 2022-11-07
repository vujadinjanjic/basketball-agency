import config from "./config.json";
import env from "dotenv";

env.config();

const buildConfig = () => {
  loadDbConfig();
  return config;
};

const loadDbConfig = () => {
  if (!process.env["DB_USERNAME"]) {
    throw new Error("DB_USERNAME is not defined");
  }

  config.db.username = process.env["DB_USERNAME"];

  if (!process.env["DB_PASSWORD"]) {
    throw new Error("DB_PASSWORD is not defined");
  }

  config.db.password = process.env["DB_PASSWORD"];
};

export default buildConfig();
