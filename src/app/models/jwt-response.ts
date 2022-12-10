import { ErrorResponseI } from "./error-response"

export interface JwtResponseI extends ErrorResponseI {
        token:string,
        expireAt:string
}
