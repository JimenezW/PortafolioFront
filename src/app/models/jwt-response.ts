import { ErrorResponseI } from "./error-response"

export interface JwtResponseI extends ErrorResponseI {
    dataUser:{
        id:number,
        name:string,
        email:string,
        accessToken:string,
        expireIn:string
    }
}
