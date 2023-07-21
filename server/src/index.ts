import express, { Application, application } from "express";

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  // si hay un port en el sistema lo tomará sino usará el port 3000
  config(): void {
    this.app.set('port', process.env.PORT || 3000); // el puerto lo guarda en port
  }

  routes(): void {}

  // enciende el servidor en el puerto guardado en port
  start(): void {
    this.app.listen(this.app.get('port'), () =>{
        console.log('Server on port', this.app.get('port')) // muestra el port usado
    });
  }
}

// guarda el objeto app que esta devolviendo del constructor en una constante server
const server = new Server();
server.start(); // inicializa la aplicación
