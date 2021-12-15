import app from "./app";


// definicion para una página http
app.listen(app.get('port'));
console.log('Server DeviceGps on Port:: ' + app.get('port'));


// Instalar plugons para una página https
// 1.- $ npm install --save fs      ==> Obtiene acceso a los archivo en carpeta
// 2.- $ npm install --save https   ==>