import { ErrorResponseI } from "./error-response";

export interface EstadosI extends ErrorResponseI {
    IdEstado:number,
    Nombre:string,
    Abreviatura:string
}