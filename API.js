import express from 'express'
import {rutas} from './routes/rutas.js'
import cors from 'cors'
import { establecerConexion } from './database/conexion.js'

export class API{
    constructor(){
        this.app = express() //app es express
        this.conectarBD()
        this.enrutarPeticiones()
    }
    despertarServidor(){
        this.app.listen(3000,()=>console.log("Servidor encendido..."))
    }
    enrutarPeticiones(){
        this.app.use(cors())
// habilitamos la recepción de datos desde el body de la petición
        this.app.use(express.json()) //habilitamos la recepcion de datos desde el body de la peticion
 // Configuración de CORS
        this.app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
        next();
        });
// Enrutamientos o Endpoints
        this.app.use('/',rutas) //habilitamos las rutas o endpoints
    }
    conectarBD(){
        establecerConexion()
    }
}