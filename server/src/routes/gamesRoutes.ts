import { Router } from "express";
import gamesController from '../controllers/gamesController';

class GamesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  // rutas crud
  config(): void {
    this.router.get('/', gamesController.list); // listar
    this.router.get('/:id', gamesController.getOne); //listar un juego por id
    this.router.post('/', gamesController.create); // crear
    this.router.delete('/:id', gamesController.delete); // borrar
    this.router.put('/:id', gamesController.update); //actualizar
  }
}

// Ejecuta el Constructor
const gamesRoutes = new GamesRoutes();
// exportaremos el enrutador
export default gamesRoutes.router;