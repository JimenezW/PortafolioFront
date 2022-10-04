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

   get(idEstado : Number):Observable<MunicipioI[]>{

    const params = new HttpParams()
    .set('idEstado', idEstado.toString())
    
    let url = `/api/municipio/allEstado?IdEstado${idEstado}`;
    return this._http.post<JsonResponceI>('/api/municipio/allEstado', params).pipe(tap((res:JsonResponceI)=>{
      debugger
        if(res.codeResult = 200){
            return  <MunicipioI>JSON.parse(res.data[0])
        }else{
            return res;
        }
    }),catchError((err)=>{
      return of(err);
    })
    );
  }

}
