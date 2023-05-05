import express from 'express'
import {ControladorHabitaciones} from '../controllers/ControladorHabitacion.js'
import { ControladorReservas } from '../controllers/ControladorReservas.js'

let controladorHabitacion= new ControladorHabitaciones()

let controladorReservas = new ControladorReservas()

//Para separar las rutas de la logica de negocio
//utilizare un metodo especial de EXPRESS

export let rutas=express.Router()

//Ruta de Habitaciones

rutas.post('/registrarhabitacion',controladorHabitacion.registrandoHabitacion)
rutas.get('/buscarhabitaciones',controladorHabitacion.buscandoTodasHabitaciones)
rutas.get('/buscarhabitacion/:idhabitacion',controladorHabitacion.buscandoUnaHabitacion)
rutas.put('/actualizarhabitacion/:idhabitacion',controladorHabitacion.editandoHabitacion)

// Ruta de Reservas 

rutas.post('/registrarreserva', controladorReservas.registrandoReserva)
rutas.get('/buscarreservas', controladorReservas.buscandoTodasReservas)
rutas.get('/buscarreserva/:idreserva', controladorReservas.buscandoReserva)
rutas.put('/actualizarreserva/:idreserva', controladorReservas.editandoReserva)
rutas.delete('/eliminarreserva/:idreserva', controladorReservas.eliminandoReserva)