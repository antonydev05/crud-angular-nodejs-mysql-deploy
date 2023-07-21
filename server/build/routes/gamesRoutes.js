"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    // ruta inicial devolverá mensaje hello
    config() {
        this.router.get("/", (req, res) => res.send("games"));
    }
}
// Ejecuta el Constructor
const gamesRoutes = new GamesRoutes();
// exportaremos el enrutador
exports.default = gamesRoutes.router;
