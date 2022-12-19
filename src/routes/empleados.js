//importar express
const express = require('express')
//crear el router
const routerEmpleados = express.Router()

//*Metodo GET
routerEmpleados.get('/', (req, res) => {
    //conexion con la db
    req.getConnection( (err, connection) =>{
        if(err) {
            return res.send(err)
        }
        //Consulta SQL query() => parametros: 1) comandos SQL para ver todos los registro, filas
        //con el nombre de la TABLA a la que se quiere acceder 2)funcion callback
        connection.query('SELECT * FROM empleados' , (err, rows) => {
            if(err){
                return res.send(err)
            }
            //*Responde con los datos que se obtienene en JSON
            res.json(rows)
        })
    })
})
//*Metodo POST
routerEmpleados.post('/', (req, res) =>{
    req.getConnection( (err, connection) => {
       if(err) return res.send(err)
       //Se insertan datos en la tabla "empleados". Parametros: 1)consulta query 2)Dato a insertar 3) funcion callback
       //El dato a insertar (objeto.json) vienen en un array [req.body]
       //Si se quiere agregar varios datos(objetos.json), se usa la misma cantidad de signos ? que datos
       connection.query('INSERT INTO empleados set ?', [req,body], (err, rows) =>{
        if(err){
            return res.send(err)
        }
        res.send('Datos enviados')
       })
    })
})

//**Exportar este modulo
module.exports = routerEmpleados