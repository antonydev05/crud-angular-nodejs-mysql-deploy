import { createPool } from "mysql2/promise";
import { MYSQLHOST, MYSQLDATABASE, MYSQLPASSWORD, MYSQLPORT, MYSQLUSER } from "./keys";

export const pool = createPool({
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  host: MYSQLHOST,
  database: MYSQLDATABASE,
  port: MYSQLPORT,
});