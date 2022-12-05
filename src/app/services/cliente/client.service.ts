import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { ClientInterfaceI } from "src/app/models/client.interface";
import { JsonResponceI } from "src/app/models/JsonResponse";

@Injectable({
    providedIn: 'root'
  })
  export class ClientService {

    constructor(private _http:HttpClient) {

    }

    save(data : ClientInterfaceI){
        return this._http.post<JsonResponceI>('/api/Client/Create', data).pipe(tap((res:JsonResponceI)=>{
            if(res.codeResult = 200){
                return res.data
            }else{
                return res;
            }
        }),catchError((err)=>{
          return of(err);
        })
        );
    }

    consultar(idCliente : number, nombre : string, apellidoP : string, codigoPostal : string):Observable<JsonResponceI>{

        let httpParams = new HttpParams()
        .append('IdCliente', idCliente)
        .append('Nombre', nombre)
        .append('ApellidoP', apellidoP)
        .append('CodigoPostal', codigoPostal);

        return this._http.post<JsonResponceI>('api/Client/filter',{}, {params : httpParams}).pipe(tap((res:JsonResponceI)=>{
      
            return res;
          }),catchError((err)=>{
            return of(err);
          })
          );

    }

}