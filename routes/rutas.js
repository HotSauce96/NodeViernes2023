import express from 'express'

//Para separar las rutas de la logica de negocio
//utilizare un metodo especial de EXPRESS
export let rutas=express.Router()

rutas.post('/registrarhabitacion', function (req, res) {
    res.send('estamos registrando la habitacion')
})
  
rutas.get('/buscarhabitaciones', function (req, res) {
    res.send('estamos buscando todas las habitaciones')
})
  
rutas.get('/buscarhabitacion', function (req, res) {
    res.send('estamos buscando 1 habitacion')
})
  
rutas.put('/actualizarhabitacion', function (req, res) {
    res.send('estamos actualizando 1 habitacion')
})