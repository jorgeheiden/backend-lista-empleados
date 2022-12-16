//** Nodemon: 
//Click derecho en la carpeta src => open in integrated terminal => nodemon app.js

//Importar express:
const express = require('express')
//Accede a la funcion express() esta permite crear una aplicacion de express:
const app = express()

//Importar el modulo mysql
const mysql2 = require('mysql2')
//importar express-myconnection
const myconn = require('express-myconnection')



//Definir el puerto de escucha:
//Al deployar la aplicacion se utiliza process.env.PORT pero al estar
//desarrollando la aplicacion de manera local se puede asignar un numero de puerto

//Establecer el puerto como una propiedad de la aplicacion:
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), (req, res) => {
    console.log('El servidor esta escuchando en el puerto', app.get('port'))
})