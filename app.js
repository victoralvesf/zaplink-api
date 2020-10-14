import Hapi from '@hapi/hapi';
import { routes } from './src/routes';

class App {
  constructor() {
    this.server = null

    this.start();
    this.routes();
  }

  async start() {
    this.server = Hapi.server({
      port: process.env.APP_PORT,
      host: process.env.APP_HOST
    });
  };

  async routes() {
    this.server.route(routes);
  }
}

export default new App().server;