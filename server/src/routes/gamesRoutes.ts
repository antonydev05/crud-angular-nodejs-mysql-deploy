import { Router } from "express";

class GamesRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  // ruta inicial devolverá mensaje hello
  config(): void {
    this.router.get("/", (req, res) => res.send("games"));
  }
}

// Ejecuta el Constructor
const gamesRoutes = new GamesRoutes();
// exportaremos el enrutador
export default gamesRoutes.router;