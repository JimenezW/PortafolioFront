import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { JsonResponceI } from 'src/app/models/JsonResponse';
import { MunicipioI } from 'src/app/models/municipios';

@Injectable({
  providedIn: 'root'
})
export class CodigoPostalService {
 
  constructor(private _http:HttpClient) {

  }

  get(idCodigoPostal: any, idMunicipio: any, CodigoPostal:any, Nombre : any):Observable<JsonResponceI>{

    let data = {
      idCodigoPostal : idCodigoPostal,
      idMunicipio : idMunicipio,
      Codigo : CodigoPostal,
      Nombre : Nombre
    };
    
    return this._http.post<JsonResponceI>('/api/CodigoPostal/Filtrar', data).pipe(tap((res:JsonResponceI)=>{
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

}
