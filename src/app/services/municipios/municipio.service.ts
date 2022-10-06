import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { JsonResponceI } from 'src/app/models/JsonResponse';
import { MunicipioI } from 'src/app/models/municipios';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
 
  constructor(private _http:HttpClient) {

  }

  active():Observable<any>{
    return this._http.get<JsonResponceI>('/api/municipio').pipe(tap((res:JsonResponceI)=>{
      if(res.codeResult = 200){
          return <MunicipioI>JSON.parse(res.data)
      }else{
          return res;
      }
    }),catchError((err)=>{
      return of(err);
      })
    );
  }

  find(idMunicipio : any):Observable<JsonResponceI>{
    let url = `/api/municipio/${idMunicipio}`;

    return this._http.get<JsonResponceI>(url).pipe(tap((res:JsonResponceI)=>{

      }), catchError((err)=>{
        return of(err);
      })
    );
  }

   getAllMunicipioEstado(idEstado : Number):Observable<JsonResponceI>{
    const body = {};
    const params = new HttpParams()
    .set('idEstado', idEstado.toString())
    
    return this._http.post<JsonResponceI>('/api/municipio/allEstado', body, {
      params : params
    } ).pipe(tap((res:JsonResponceI)=>{
      
    }),catchError((err)=>{
      return of(err);
    })
    );
  }

}
