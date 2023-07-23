"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    // rutas crud
    config() {
        this.router.get('/', gamesController_1.default.list); // listar
        this.router.get('/:id', gamesController_1.default.getOne); //listar un juego por id
        this.router.post('/', gamesController_1.default.create); // crear
        this.router.delete('/:id', gamesController_1.default.delete); // borrar
        this.router.put('/:id', gamesController_1.default.update); //actualizar
    }
}
// Ejecuta el Constructor
const gamesRoutes = new GamesRoutes();
// exportaremos el enrutador
exports.default = gamesRoutes.router;
