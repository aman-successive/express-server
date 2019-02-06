import configuration from './config/configuration';
import Server from './Server';
console.log('inside index.js');
const server = new Server(configuration);
server.bootstrap().run();
