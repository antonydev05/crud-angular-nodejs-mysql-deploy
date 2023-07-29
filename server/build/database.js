"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
const keys_1 = require("./keys");
exports.pool = (0, promise_1.createPool)({
    user: keys_1.DB_USER,
    password: keys_1.DB_PASSWORD,
    host: keys_1.DB_HOST,
    database: keys_1.DB_NAME,
    port: keys_1.DB_PORT,
});
