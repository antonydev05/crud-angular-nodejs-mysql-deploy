import { Router } from "express";

class IndexRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  // ruta inicial devolverá mensaje hello
  config(): void {
    this.router.get("/", (req, res) => res.send("Hello"));
  }
}

// Ejecuta el Constructor
const indexRoutes = new IndexRoutes();
// exportaremos el enrutador
export default indexRoutes.router;