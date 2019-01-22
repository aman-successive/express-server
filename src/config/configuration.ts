import { IConfig } from "./IConfig";
import { config } from "dotenv";
config();
console.log('inside configuration.js');
console.log(config());
const configuration: IConfig = Object.freeze({
  port: process.env.PORT
});
export default configuration;
