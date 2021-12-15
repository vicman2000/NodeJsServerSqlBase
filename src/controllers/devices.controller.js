//import { Int } from 'mssql';
import { getConnection, sql } from '../database/connection';




//export const getDevices = (req, res) => res.send('Devices Controller!!');
export const devicesGps_Listar = async(req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query("Select top 10 descripcion, ip , habilitado from tbl_bio_devices");


    res.status(200);
    res.json({
        status: 1,
        message: "OK",
        objectResult: result.recordset,
    });
};


export const devicesMarcajesGps_Guardar = async(req, res) => {
    const { enumber, coordenada, anio, mes, dia, hora, minuto, segundo, serieDispositivo, idUsuario, idioma } = req.body;

    if (enumber == null || coordenada == null ||
        anio == null ||
        mes == null ||
        dia == null ||
        hora == null ||
        minuto == null ||
        segundo == null ||
        serieDispositivo == null ||
        idUsuario == null || idioma == null) {
        return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' });
    }


    try {
        const pool = await getConnection();

        //const result = await pool.request().query("Select top 10 * from tbl_personas");
        const result =
            await pool
            .request()
            .input("enumber", sql.Int, enumber)
            .input("coordenada", sql.NVarChar, coordenada)
            .input("Anio", sql.Int, anio)
            .input("Mes", sql.Int, mes)
            .input("Dia", sql.Int, dia)
            .input("Hora", sql.Int, hora)
            .input("Minuto", sql.Int, minuto)
            .input("Segundo", sql.Int, segundo)
            .input("SerieDispositivo", sql.NVarChar, serieDispositivo)
            .input("IdUsuario", sql.Int, idUsuario)
            .input("Idioma", sql.Char, idioma)
            .query("exec st_bio_DevicesGps_Marcaje_Inserta @enumber, @coordenada, @anio, @mes, @dia, @hora, @minuto, @segundo, @serieDispositivo,  @IdUsuario, @Idioma ");

        //console.log(result.recordset[0].Result);

        let _status = 1;
        const _mensaje = result.recordset[0].Result;
        let _resultado = result.recordset;
        if (_mensaje != "OK") {
            _status = 0;
            _resultado = [];
        }

        res.status(200);
        res.json({
            status: _status,
            message: _mensaje,
            objectResult: _resultado,
        });


    } catch (error) {
        res.status(400);
        res.json({
            status: 0,
            message: error.message,
            objectResult: [],
        });
    }


};

export const DevicesGps_MsgSOS_Guardar = async(req, res) => {
    const { enumber, coordenada, anio, mes, dia, hora, minuto, segundo, serieDispositivo, idUsuario, idioma } = req.body;

    if (enumber == null || coordenada == null ||
        anio == null ||
        mes == null ||
        dia == null ||
        hora == null ||
        minuto == null ||
        segundo == null ||
        serieDispositivo == null ||
        idUsuario == null || idioma == null) {
        return res.status(400).json({ msg: 'Bad Request. Please Fill all fields' });
    }


    try {
        const pool = await getConnection();

        //const result = await pool.request().query("Select top 10 * from tbl_personas");
        const result =
            await pool
            .request()
            .input("enumber", sql.Int, enumber)
            .input("coordenada", sql.NVarChar, coordenada)
            .input("Anio", sql.Int, anio)
            .input("Mes", sql.Int, mes)
            .input("Dia", sql.Int, dia)
            .input("Hora", sql.Int, hora)
            .input("Minuto", sql.Int, minuto)
            .input("Segundo", sql.Int, segundo)
            .input("SerieDispositivo", sql.NVarChar, serieDispositivo)
            .input("IdUsuario", sql.Int, idUsuario)
            .input("Idioma", sql.Char, idioma)
            .query("exec st_bio_DevicesGps_MsgSOS_Inserta @enumber, @coordenada, @anio, @mes, @dia, @hora, @minuto, @segundo, @serieDispositivo,  @IdUsuario, @Idioma ");

        //console.log(result.recordset[0].Result);

        let _status = 1;
        const _mensaje = result.recordset[0].Result;
        let _resultado = result.recordset;
        if (_mensaje != "OK") {
            _status = 0;
            _resultado = [];
        }

        res.status(200);
        res.json({
            status: _status,


            message: _mensaje,
            objectResult: _resultado,
        });


    } catch (error) {
        res.status(400);
        res.json({
            status: 0,
            message: error.message,
            objectResult: [],
        });
    }


};