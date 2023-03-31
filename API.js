import express from 'express'
import {rutas} from './routes/rutas.js'

export class API{
    constructor(){
        this.app = express() //app es express
        this.enrutarPeticiones()
    }
    despertarServidor(){
        this.app.listen(3000,()=>console.log("Servidor encendido..."))
    }
    enrutarPeticiones(){
        this.app.use(express.json())
        this.app.use('/',rutas)
    }
    conectarBD(){}
}