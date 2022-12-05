import { ErrorResponseI } from "./error-response";

export interface JsonResponceI extends ErrorResponseI {
    codeResult: Number,
    message: string,
    errorCode: Number,
    data : any
}