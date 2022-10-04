import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiSetting } from 'src/app/app-settings-api';
import { EstadosI } from 'src/app/models/estados';
import { catchError, tap } from "rxjs/operators";
import { Observable, BehaviorSubject, of } from "rxjs";
import { JsonResponceI } from 'src/app/models/JsonResponse';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
 
  constructor(private _http:HttpClient) {

   }

   get():Observable<JsonResponceI>{
    return this._http.get<JsonResponceI>(`/api/Estado`).pipe(tap((res:JsonResponceI)=>{
    }),catchError((err)=>{
      return of(err);
    })
    );
  }

}
