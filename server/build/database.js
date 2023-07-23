"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
// Importamos los datos de conexion a la DB
const keys_1 = __importDefault(require("./keys"));
// la coneccion lo guardamos en una constante
const pool = promise_1.default.createPool(keys_1.default.database);
const connect = () => {
    const pool = promise_1.default.createPool(keys_1.default.database);
    pool.getConnection();
    return pool;
};
exports.default = pool;
