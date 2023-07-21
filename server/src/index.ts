import express, { Application, application } from "express";
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

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
    this.app.use(morgan('dev')); // nos informa las peticiones en consola
    this.app.use(cors());
    this.app.use(express.json()); // el servidor ahora acepta formatos json
    this.app.use(express.urlencoded({extended: false}));
  }

  routes(): void {
    this.app.use('/',indexRoutes);
    this.app.use('/api/games',gamesRoutes); // escribimos como será la ruta
  }

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
