import mysql from 'mysql2/promise';
// Importamos los datos de conexion a la DB
import keys from './keys';

// la coneccion lo guardamos en una constante
const pool = mysql.createPool(keys.database);

const connect = () => {
    const pool = mysql.createPool(keys.database);
    pool.getConnection();
    return pool;
}

export default pool;