import express from "express";
import config from './config';

import devicesRoutes from "./routes/devices.routes";

const app = express();


//Settings
app.set('port', config.port);

// MiddleWares para que el Controller entienda la recepcion de Json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(devicesRoutes);



// Definicion del app
export default app;