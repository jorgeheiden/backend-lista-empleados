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
       connection.query('INSERT INTO empleados set ?', [req.body], (err, rows) =>{
        if(err){
            return res.send(err)
        }
        console.log([req.body])
        res.send(rows)
       })
    })
})

//**Metodo DELETE
routerEmpleados.delete('/:id', (req, res) => {
    req.getConnection( (err, connection) => {
        if(err){
            return res.send(err)
        }
        connection.query('DELETE FROM empleados WHERE idempleados = ?', [req.params.id], (err, rows) =>{
            if(err){
                return res.send(err)
            }
            res.send(rows)
        })
    })
})

//**Metodo PUT
routerEmpleados.put('/:id', (req, res) =>{
    req.getConnection( (err, connection) => {
        if(err){
            return res.send(err)
        }
        connection.query('UPDATE empleados SET ? WHERE idempleados = ?', [req.body, req.params.id], (err, rows) => {
            if(err){
                return res.send(err)
            }
            res.send({respuesta: 'Datos Actualizados'})
        })
    })
})
//**Exportar este modulo
module.exports = routerEmpleados