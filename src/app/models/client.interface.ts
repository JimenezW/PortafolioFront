import { DomicilioI } from "./domicilio.interface";

export interface ClientInterfaceI {
    idCliente : Number,
    idPersona : Number,
    active : boolean,
    nombre : string,
    apellidoP : string,
    apellidoM : string,
    edad : Number,
    domicilio : DomicilioI[]
}