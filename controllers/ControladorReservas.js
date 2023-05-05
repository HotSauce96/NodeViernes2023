import { ServicioReservas } from "../services/ServicioReservas.js"
import { ServicioHabitaciones} from "../services/ServicioHabitaciones.js"

export class ControladorReservas{

    constructor(){}

    async registrandoReserva(peticion,respuesta){

        let datosReserva=peticion.body

        let servicioReserva=new ServicioReservas()
	    let servicioHabitaciones = new ServicioHabitaciones()

        try{
		// Validacion que la habitacion existe para poder hacer la reserva.
		
	    let habitacion = await servicioHabitaciones.buscarHabitacion(datosReserva.idHabitacionReserva);


        console.log('Info habitacion:', habitacion);
        
// Se guarda habitacion y se pregunta si es true (que exista), sí existe entra a recibir los datosReserva.fechaInicio y fechaFinal para obtener la fecha y calcular cuantos días se quedo.
// Si la variable restaDias es menor a 0 significa que se está intentando colocar una fecha "menor" a la fecha final, indicando que no se puede viajar al pasado.

            if(habitacion){
                let restaDias = new Date(datosReserva.fechaFinal).getTime() - new Date(datosReserva.fechaInicio).getTime()
                if(restaDias >= 0){ 

// DiasDiferencia llega en horas y se divide hasta 24. (1 día)

                    let diasDiferencia = restaDias / 1000 / 60 / 60 / 24

//Operacion cálculo diasDiferencia por el precio de la habitacion 


                    datosReserva.costoReserva = diasDiferencia * habitacion.precioNoche

                console.log("El precio de la habitacion según la cantidad de personas es de " + datosReserva.costoReserva);

                    await servicioReserva.registrarReserva(datosReserva)
                    respuesta.status(200).json({
                        "mensaje":"Exito agregando los datos"
                    })
                } else {
                    respuesta.status(400).json({
                        "mensaje":"Fecha inválida, no se puede viajar al pasado"
                    })
                }
            }else{
                respuesta.status(400).json({
                    "mensaje":"No se puede reservar una habitación que no existe"
                })
            }
	    
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+ errorPeticion
            })
        }
    }

    async buscandoTodasReservas(peticion,respuesta){

        let servicioReserva=new ServicioReservas()

        try{
            respuesta.status(200).json({

                "mensaje":"Exito buscando habitaciones",
                "habitaciones":await servicioReserva.buscarTodasReservas()
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+errorPeticion
            })
        }
    }

    async buscandoReserva(peticion,respuesta){

        let idReserva =peticion.params.idreserva
            console.log(idReserva)
        let servicioReserva=new ServicioReservas()

        try{
            respuesta.status(200).json({
                "mensaje":"Exito buscando la reserva "+ idReserva,
                "habitacion":await servicioReserva.buscarReserva(idReserva)

            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+ errorPeticion
            })
        }
    }

    async editandoReserva(peticion,respuesta){

        let idReserva = peticion.params.idReserva

        let datosReserva=peticion.body

        let servicioReserva=new ServicioReservas()


        try{
            await servicioReserva.editarReservas (idReserva,datosReserva)
            respuesta.status(200).json({
                "mensaje":"Exito editando la reserva"
            })
        }catch(errorPeticion){
            respuesta.status(400).json({
                "mensaje":"Fallamos "+ errorPeticion
            })
        }
    }


	async eliminandoReserva(peticion, respuesta){

		let idReserva = peticion.params.idReserva

        let datosReserva=peticion.body

        let servicioReserva=new ServicioReservas()

		try{
			await servicioReserva.eliminarReserva(idReserva, datosReserva)
			respuesta.status(200).json({
				"mensaje": "Exito eliminando la habitacion"
			})
			} catch(errorPeticion){
			respuesta.status(400).json({
			"mensaje": "Fallo en eliminar la reserva, error" + errorPeticion
			})
		}
	}
}
