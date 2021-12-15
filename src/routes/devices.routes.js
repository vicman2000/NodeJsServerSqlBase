import { Router } from "express";
import { devicesGps_Listar, DevicesGps_MsgSOS_Guardar, devicesMarcajesGps_Guardar }
from "../controllers/devices.controller";


const router = Router();

router.get('/devices', devicesGps_Listar);
router.post('/devices', devicesMarcajesGps_Guardar);
router.post('/devices/sos', DevicesGps_MsgSOS_Guardar);
// router.get('/devices', );
// router.put('/devices', );
// router.delete('/devices', );
// router.get('/devices', );
// router.get('/devices', );

export default router;