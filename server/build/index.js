"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    // si hay un port en el sistema lo tomará sino usará el port 3000
    config() {
        this.app.set('port', process.env.PORT || 3000); // el puerto lo guarda en port
    }
    routes() { }
    // enciende el servidor en el puerto guardado en port
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port')); // muestra el port usado
        });
    }
}
// guarda el objeto app que esta devolviendo del constructor en una constante server
const server = new Server();
server.start(); // inicializa la aplicación
