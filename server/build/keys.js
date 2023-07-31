"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQLPORT = exports.MYSQLDATABASE = exports.MYSQLPASSWORD = exports.MYSQLUSER = exports.MYSQLHOST = exports.PORT = void 0;
exports.PORT = process.env.PORT || 3000;
exports.MYSQLHOST = process.env.MYSQLHOST || 'localhost';
exports.MYSQLUSER = process.env.MYSQLUSER || 'root';
exports.MYSQLPASSWORD = process.env.MYSQLPASSWORD || 'mysql';
exports.MYSQLDATABASE = process.env.MYSQLDATABASE || 'ng_games_db';
exports.MYSQLPORT = parseInt(process.env.MYSQLPORT || '3306');
