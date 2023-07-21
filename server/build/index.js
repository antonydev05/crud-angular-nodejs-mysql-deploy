"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    // si hay un port en el sistema lo tomará sino usará el port 3000
    config() {
        this.app.set('port', process.env.PORT || 3000); // el puerto lo guarda en port
        this.app.use((0, morgan_1.default)('dev')); // nos informa las peticiones en consola
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); // el servidor ahora acepta formatos json
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default); // escribimos como será la ruta
    }
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
