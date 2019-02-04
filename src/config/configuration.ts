import { IConfig } from "./IConfig";
import { config } from "dotenv";
config();
console.log("inside configuration.js");
console.log(config());
const configuration: IConfig = Object.freeze({
  port: process.env.PORT,
  key: process.env.KEY,
  mongoUrl: process.env.MONGO_URL
});
export default configuration;
