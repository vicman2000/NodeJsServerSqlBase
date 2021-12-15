import { config } from 'dotenv';

config(); // Obtiene variables de ambiente predefinidas en archivo .env

export default {
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER,
    dbDataBase: process.env.DB_DATABASE || "",
    dbPort: process.env.DB_PORT || 1433
};