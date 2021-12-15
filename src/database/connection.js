import sql from "mssql";
import config from '../config';

const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDataBase,
    //port: config.dbPort,
    port: 49494,
    options: {
        encrypt: true, //For Azure
        trustServerCertificate: true, // Change to true for local dev / Self-signed certs
    }

};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;

    } catch (error) {
        console.error(error);
    }
}

export { sql }; // Exporto sql para que se pueda utilizar en los controladores