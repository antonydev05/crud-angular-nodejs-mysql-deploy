import { Router } from "express";
import { indexController } from '../controllers/indexController'

class IndexRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  // ruta inicial devolverá mensaje hello
  config(): void {
    this.router.get("/", indexController.index);
  }
}

// Ejecuta el Constructor
const indexRoutes = new IndexRoutes();
// exportaremos el enrutador
export default indexRoutes.router;