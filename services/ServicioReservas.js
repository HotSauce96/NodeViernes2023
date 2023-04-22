import { modeloReserva } from "../models/modeloReservas.js";

export class ServicioReservas{

    constructor(){}

    async registrarReserva(datosReserva){

        let reservaNueva=new modeloReserva(datosReserva)
        return await reservaNueva.save()

    }
    async buscarTodasReservas(){
        let reservasConsultadas=await modeloReserva.find()
        return reservasConsultadas
    }
    async buscarReserva(idReserva){
        let reservaConsultada=await modeloReserva.findById(idReserva)
        return reservaConsultada
    }
    async editarReservas(idReserva,datosReserva){
        return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
    }

}