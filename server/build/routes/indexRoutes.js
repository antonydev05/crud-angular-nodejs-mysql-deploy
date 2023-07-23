"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = require("../controllers/indexController");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    // ruta inicial devolverá mensaje hello
    config() {
        this.router.get("/", indexController_1.indexController.index);
    }
}
// Ejecuta el Constructor
const indexRoutes = new IndexRoutes();
// exportaremos el enrutador
exports.default = indexRoutes.router;
