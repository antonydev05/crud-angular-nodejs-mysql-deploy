"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
const keys_1 = require("./keys");
exports.pool = (0, promise_1.createPool)({
    user: keys_1.MYSQLUSER,
    password: keys_1.MYSQLPASSWORD,
    host: keys_1.MYSQLHOST,
    database: keys_1.MYSQLDATABASE,
    port: keys_1.MYSQLPORT,
});
