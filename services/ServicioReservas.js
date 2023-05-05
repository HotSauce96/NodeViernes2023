import { modeloReserva } from "../models/modeloReservas.js";

export class ServicioReservas{

    constructor(){}

    async registrarReserva(datosReserva){

        let reservaNueva=new modeloReserva(datosReserva)
        console.log(reservaNueva)
        return await reservaNueva.save()

    }
    async buscarTodasReservas(){
        let reservasConsultadas=await modeloReserva.find()
        return reservasConsultadas
    }
    async buscarReserva(idReserva){
        console.log(idReserva)
        let reservaConsultada=await modeloReserva.findById(idReserva)
        //console.log(reservaConsultada)
        return reservaConsultada
    }
    async editarReservas(idReserva,datosReserva){

        return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
    }

    async eliminarReserva(idReserva, datosReserva){
        return await modeloReserva.deleteOne(idReserva, datosReserva)
    }

}