import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
const configuration: IConfig = Object.freeze({
  key: process.env.KEY,
  mongoUrl: process.env.MONGO_URL,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});
export default configuration;
