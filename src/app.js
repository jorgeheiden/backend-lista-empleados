//** Nodemon: 
//Click derecho en la carpeta src => open in integrated terminal => nodemon app.js

//Importar express:
const express = require('express')
//Accede a la funcion express() esta permite crear una aplicacion de express:
const app = express()

//Importar el modulo mysql
const mysql2 = require('mysql2')
//Importar express-myconnection
const myconn = require('express-myconnection')
//Importar las rutas
const routerEmpleados = require('./routes/empleados')

//Crear el objeto de configuraciones de la base de datos
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'lista_empleados'
}
//MIDDLEWARES
//middleware para la conexion con la db
//Parametros: mysql2, objeto de configuraciones y una estrategia de conexion
app.use(myconn(mysql2, dbOptions, 'single'))
//Middleware para que el servidor pueda usar el formato JSON
app.use(express.json())

//*RUTAS: asociar el router a un path
app.use('/api/empleados', routerEmpleados)

//Definir el puerto de escucha:
//Al deployar la aplicacion se utiliza process.env.PORT pero al estar
//desarrollando la aplicacion de manera local se puede asignar un numero de puerto

//Establecer el puerto como una propiedad de la aplicacion:
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), (req, res) => {
    console.log('El servidor esta escuchando en el puerto', app.get('port'))
})
//*funcion para probar el funcionamiento del servidor:
/*
app.get('/', (req, res) =>{
    res.send('Probando servidor. . .')
})
*/
