"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class GamesController {
    // metodo para listar todos los juegos
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const games = yield database_1.pool.query("SELECT * FROM games");
                console.log(games);
                res.json(games[0]);
            }
            catch (error) {
                console.log("Error db: " + error);
            }
        });
    }
    // Metodo para 1 juego por id
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const games = yield database_1.pool.query("SELECT * FROM games WHERE id = ?", [id]);
            if (games.length > 0) {
                return res.json(games[0]);
                res.status(404).json({ text: "the game doesn't exists" });
            }
        });
    }
    // metodo para crear un juego
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const game = yield database_1.pool.query("INSERT INTO games set ?", [req.body]);
                res.json({ message: "Game saved" });
            }
            catch (error) {
                console.log("Error db: " + error);
            }
            //await pool.query('INSERT INTO games set ?', [req.body]);
            //console.log(req.body);
            //res.json({message: 'Game saved'});
        });
    }
    // metodo para borrar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ text: "The game was deleted" });
        });
    }
    // metodo para actualizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.pool.query('UPDATE games set ? WHERE id = ?', [req.body, id]);
            res.json({ message: "The was updated " });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
